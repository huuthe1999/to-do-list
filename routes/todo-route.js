const express = require('express');
const { getTodoList, createTodo } = require('../controllers/todo-controller');
const router = express.Router();

router.get('/:pId', getTodoList);
router.post('/:pId', createTodo);

module.exports = router;
