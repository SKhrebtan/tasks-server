const { Task } = require("../../models/tasks");
const { ctrlWrapper } = require("../../helpers");

const add = async (req, res) => {
    const { _id: owner } = req.project;
    const result = await Task.create({ ...req.body, owner });
    res.status(201).json(result);
}

module.exports = {
    addTask: ctrlWrapper(add)
}