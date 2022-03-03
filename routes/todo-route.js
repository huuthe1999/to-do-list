const express = require('express');
const {
	getTodoList,
	createTodo,
	getTodoListFilter,
} = require('../controllers/todo-controller');
const router = express.Router();

router.get('/filter', getTodoListFilter);
router.get('/:pId', getTodoList);
router.post('/:pId', createTodo);

module.exports = router;
