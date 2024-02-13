const addTask = require("./addTask");
const deleteTaskById = require("./deleteTaskById");
const getAllTasks = require("./getAllTasks");


module.exports = {
    ...addTask,
    ...getAllTasks,
    ...deleteTaskById
}