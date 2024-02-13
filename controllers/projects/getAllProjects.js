const { Project } = require("../../models/projects");
const { ctrlWrapper } = require("../../helpers");

const getAllProjects = async (req, res) => {
     const result = await Project.find();
     res.json(result);
}
  
module.exports = {
    getAllProjects: ctrlWrapper(getAllProjects)
}