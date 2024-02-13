const { Project } = require("../models/projects");
const { HttpError } = require('../helpers');


const projectAuth = async (req, res, next) => {
    const { projectid } = req.headers;
    
    try {
        const project = await Project.findById(projectid);
        if (!project) {
            next(HttpError(404, "Not found"))
        }
        req.project = project;
        next()
    } catch (error) {
        next(HttpError(404))
    }
}
module.exports = projectAuth;