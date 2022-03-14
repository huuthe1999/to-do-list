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
			checked: false,
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
				projectId: todo.projectId._id,
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

exports.updateTodo = asyncHandler(async (req, res) => {
	const { tId } = req.params;
	const newTodo = req.body;

	if (!tId) {
		return res.status(400).json({
			message: 'You must provide a id todo',
		});
	}

	if (!newTodo) {
		return res.status(400).json({
			message: 'You must provide a project',
		});
	}

	const oldProjectId = newTodo.oldProjectId;
	delete newTodo.oldProjectId;

	let updatedTodo;

	try {
		updatedTodo = await Todo.findOneAndUpdate({ _id: tId }, newTodo, {
			returnOriginal: false,
		});
	} catch (err) {
		return res.status(400).json({ message: 'You provide a wrong id todo' });
	}

	if (!updatedTodo) {
		return res.status(404).json({ message: 'Update todo failed' });
	}

	if (oldProjectId === newTodo.projectId) {
		return res.status(200).json(updatedTodo);
	} else {
		try {
			await Project.findByIdAndUpdate(newTodo.projectId, {
				$push: { todoListId: tId },
			});
			await Project.findByIdAndUpdate(oldProjectId, {
				$pull: { todoListId: tId },
			});
		} catch (error) {
			return res.status(400).json({ message: 'Update project failed' });
		}

		return res.status(200).json(updatedTodo);
	}
});

exports.deleteTodo = asyncHandler(async (req, res) => {
	const { tId } = req.params;
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
