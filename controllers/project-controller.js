const asyncHandler = require('express-async-handler');
const Project = require('../models/project-model');
exports.getProjectList = asyncHandler(async (req, res) => {
	try {
		const resultAction = await Project.find()
			.sort({ created_at: -1 })
			.exec();
		return res.status(200).json(resultAction);
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
		res.status(400).json(error);
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
		res.status(400).json(error);
	}
});

exports.deleteProject = asyncHandler(async (req, res) => {
	const pId = req.params.id;
	let project;
	try {
		project = await Project.findOneAndRemove({ _id: pId });
	} catch (err) {
		res.status(400).json(error);
	}

	if (!project) {
		res.status(402).json({ message: 'Project not found' });
	}

	res.status(200).json({ id: project._id, message: 'Project deleted' });
});