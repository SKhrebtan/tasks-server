const express = require('express');
const { projectAuth } = require("../../middlewares");
const { ctrlTasks } = require('../../controllers');

const router = express.Router();
 
router.get('/', projectAuth, ctrlTasks.getAllTasks);

router.post('/', projectAuth, ctrlTasks.addTask);

router.post('/:id', projectAuth, ctrlTasks.deleteTaskById)


module.exports = router;
