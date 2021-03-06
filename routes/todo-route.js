const express = require('express');
const {
	getTodoList,
	createTodo,
	getTodoListFilter,
	updateTodo,
	deleteTodo,
} = require('../controllers/todo-controller');
const router = express.Router();

router.get('/filter', getTodoListFilter);
router.get('/:pId', getTodoList);
router.post('/:pId', createTodo);
router.put('/:tId', updateTodo);
router.delete('/:tId', deleteTodo);

module.exports = router;
