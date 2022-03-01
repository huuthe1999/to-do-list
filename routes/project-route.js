const express = require('express');
const {
	getProject,
	createProject,
	updateProject,
	deleteProject,
} = require('../controllers/project-controller');
const router = express.Router();

router.get('/', getProject);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
module.exports = router;
