const { nn } = require('date-fns/locale');
const asyncHandler = require('express-async-handler');
const { formatDate } = require('../helpers/day');
const Project = require('../models/project-model');
const Todo = require('../models/todo-model');
exports.getTodoListFilter = asyncHandler(async (req, res) => {
	const { tomorrow, week } = req.query;
	const { startDate, endDate } = tomorrow
		? formatDate('Tomorrow')
		: week
		? formatDate('Week')
		: formatDate('Today');
	try {
		const todoList = await Todo.find({
			date: { $gte: startDate, $lte: endDate },
		})
			.lean()
			.populate({
				path: 'projectId',
				select: '_id name',
			})
			.sort({ created_at: -1 })

			.exec();

		todoList.forEach(todo => {
			const newPropsObj = {
				nameProject: todo.projectId.name,
				idProject: todo.projectId._id,
			};
			delete todo.projectId;
			return Object.assign(todo, newPropsObj);
		});
		return res.status(200).json(todoList);
	} catch (error) {
		res.status(400).json({ message: 'Error filter todo list' });
	}
});
exports.getTodoList = asyncHandler(async (req, res) => {
	const { pId } = req.params;
	if (!pId) {
		return res.status(400).json({ message: 'Not provide id project' });
	}
	try {
		const resultAction = await Project.findById(pId)
			.select('-_id todoListId')
			.populate({
				path: 'todoListId',
				options: { sort: { created_at: -1 } },
			})
			.exec();
		return res.status(200).json(resultAction.todoListId);
	} catch (error) {
		res.status(400).json({ message: 'Error get todo list' });
	}
});

exports.createTodo = asyncHandler(async (req, res) => {
	const pId = req.params.pId;
	if (!pId) {
		return res.status(400).json({
			message: 'You must provide a id project',
		});
	}
	if (!req.body) {
		return res.status(400).json({
			message: 'You must provide a project',
		});
	}
	let newTodo;
	try {
		newTodo = await Todo.create(req.body);
		try {
			await Project.findByIdAndUpdate(pId, {
				$push: { todoListId: [newTodo._id] },
			});
		} catch (error) {
			res.status(400).json({ message: 'Add todo to project failed' });
		}
		res.status(200).json(newTodo);
	} catch (error) {
		res.status(400).json({ message: 'Create todo failed' });
	}
});

exports.deleteTodo = asyncHandler(async (req, res) => {
	let { tId } = req.params;
	if (!tId) {
		return res.status(400).json({
			message: 'You must provide a id todo',
		});
	}

	let todo;
	try {
		todo = await Todo.findOneAndRemove({ _id: tId });
	} catch (err) {
		return res.status(400).json({ message: 'You provide a wrong id todo' });
	}

	if (!todo) {
		return res.status(404).json({ message: 'Todo not found' });
	}

	try {
		await Project.findByIdAndUpdate(todo.projectId, {
			$pull: { todoListId: todo._id },
		});
	} catch (error) {
		return res.status(400).json({ message: 'Delete todo failed' });
	}
	res.status(200).json({ todo, message: 'Delete todo success' });
});
