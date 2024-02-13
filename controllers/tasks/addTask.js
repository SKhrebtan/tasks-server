const { Task } = require("../../models/tasks");
const { ctrlWrapper } = require("../../helpers");

const add = async (req, res) => {
    const result = await Task.create(req.body);
    res.status(201).json(result);
}

module.exports = {
    addTask: ctrlWrapper(add)
}