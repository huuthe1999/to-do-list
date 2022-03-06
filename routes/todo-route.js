const express = require('express');
const {
	getTodoList,
	createTodo,
	getTodoListFilter,
	deleteTodo,
} = require('../controllers/todo-controller');
const router = express.Router();

router.get('/filter', getTodoListFilter);
router.get('/:pId', getTodoList);
router.post('/:pId', createTodo);
router.delete('/:tId', deleteTodo);

module.exports = router;
