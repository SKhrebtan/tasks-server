const { Task } = require("../../models/tasks");
const { HttpError, ctrlWrapper } = require("../../helpers");

const deleteTaskById = async (req, res) => {
    const { id } = req.params;
    const result = await Task.findByIdAndRemove(id);
    if (!result) {
      throw HttpError(404, "Not found")
    }
    res.json({
      message: "Delete succesful"
    })
}

module.exports = {
    deleteTaskById: ctrlWrapper(deleteTaskById)
}