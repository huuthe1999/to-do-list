const express = require('express');
const {
	getProjectList,
	createProject,
	updateProject,
	deleteProject,
} = require('../controllers/project-controller');
const router = express.Router();

router.get('/', getProjectList);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
module.exports = router;
