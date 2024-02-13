const addProject = require("./addProject");
const getAllProjects = require("./getAllProjects");


module.exports = {
    ...addProject,
    ...getAllProjects,
  }