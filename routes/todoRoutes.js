const express = require('express')
const router = express();
const todoContoller = require('../controllers/todoController')

router.post('/newTodo',todoContoller.createTodo);
router.get('/todos',todoContoller.getAllTodo);
router.get('/getTodo:id',todoContoller.getTodoById);
router.delete('/deltodo:id',todoContoller.deleteTodo);
module.exports = router;
