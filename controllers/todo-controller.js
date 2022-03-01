const asyncHandler = require('express-async-handler');
const Project = require('../models/project-model');
const Todo = require('../models/todo-model');
exports.getTodoList = asyncHandler(async (req, res) => {
	try {
		const resultAction = await Project.find()
			.sort({ created_at: -1 })
			.exec();
		return res.status(200).json(resultAction);
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