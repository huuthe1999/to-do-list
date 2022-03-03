const express = require('express');
const {
	getTodoList,
	createTodo,
	getTodoListByWeek,
} = require('../controllers/todo-controller');
const router = express.Router();

router.get('/filter', getTodoListByWeek);
router.get('/:pId', getTodoList);
router.post('/:pId', createTodo);

module.exports = router;
