const { Task } = require("../../models/tasks");
const { ctrlWrapper } = require("../../helpers");

const getAll = async (req, res) => {
     const result = await Task.find();
     res.json(result);
}
  
module.exports = {
    getAll: ctrlWrapper(getAll)
}