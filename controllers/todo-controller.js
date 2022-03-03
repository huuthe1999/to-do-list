const { nn } = require('date-fns/locale');
const asyncHandler = require('express-async-handler');
const { formatDate } = require('../helpers/day');
const Project = require('../models/project-model');
const Todo = require('../models/todo-model');
exports.getTodoListByWeek = asyncHandler(async (req, res) => {
	const { week } = req.query;
	const { startDate, addSevenDays } = formatDate();
	if (week) {
		try {
			const todoList = await Todo.find({
				date: { $gte: startDate, $lte: addSevenDays },
			}).sort({ created_at: -1 });
			return res.status(200).json(todoList);
		} catch (error) {
			res.status(400).json({ message: 'Error filter todo list' });
		}
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
		res.status(400).json(error);
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
