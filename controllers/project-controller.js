const asyncHandler = require('express-async-handler');
const Project = require('../models/project-model');
const Todo = require('../models/todo-model');
exports.getProject = asyncHandler(async (req, res) => {
	const { id } = req.query;
	if (id) {
		try {
			const project = await Project.findById(id);
			if (!project) {
				return res.status(404).json({ message: 'Project not found' });
			}
			return res.status(200).json(project);
		} catch (error) {
			return res.status(400).json({ message: 'Get project failed' });
		}
	}
	try {
		const resultAction = await Project.find()
			.sort({ created_at: -1 })
			.exec();
		res.status(200).json(resultAction);
	} catch (error) {
		res.status(400).json(error);
	}
});

exports.createProject = asyncHandler(async (req, res) => {
	if (!req.body) {
		return res.status(400).json({
			message: 'You must provide a project',
		});
	}
	try {
		const newProject = await Project.create(req.body);
		res.status(200).json(newProject);
	} catch (error) {
		res.status(400).json({ message: 'Create project failed' });
	}
});

exports.updateProject = asyncHandler(async (req, res) => {
	const project = await Project.findById(req.params.id);
	if (!project) {
		res.status(402).json({ message: 'Project not found' });
	}

	project.name = req.body.name;
	project.color = req.body.color;

	try {
		await project.save();
		res.status(200).json(project);
	} catch (error) {
		res.status(400).json({ message: 'Save project failed' });
	}
});

exports.deleteProject = asyncHandler(async (req, res) => {
	const pId = req.params.id;
	let project;
	try {
		project = await Project.findOneAndRemove({ _id: pId });
	} catch (err) {
		res.status(400).json({ message: 'You provide a wrong id project' });
	}

	if (!project) {
		return res.status(404).json({ message: 'Project not found' });
	}

	try {
		await Todo.deleteMany({ projectId: pId });
	} catch (err) {
		return res.status(400).json({ message: 'Delete todo list failed' });
	}

	res.status(200).json({ id: project._id, message: 'Project deleted' });
});
