const { Project } = require("../../models/projects");
const { ctrlWrapper } = require("../../helpers");

const addProject = async (req, res) => {
    const result = await Project.create(req.body);
    res.status(201).json(result);
}

module.exports = {
    addProject: ctrlWrapper(addProject)
}