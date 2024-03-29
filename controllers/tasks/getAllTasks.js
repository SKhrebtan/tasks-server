const { Task } = require("../../models/tasks");
const { ctrlWrapper } = require("../../helpers");

const getAllTasks = async (req, res) => {
    const { _id: owner } = req.project; 
     const result = await Task.find({ owner});
     res.json(result);
}
  
module.exports = {
    getAllTasks: ctrlWrapper(getAllTasks)
}