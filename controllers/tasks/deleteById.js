const { Task } = require("../../models/tasks");
const { HttpError, ctrlWrapper } = require("../../helpers");

const deleteById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Task.findByIdAndRemove(contactId);
    if (!result) {
      throw HttpError(404, "Not found")
    }
    res.json({
      message: "Delete succesful"
    })
}

module.exports = {
    deleteById: ctrlWrapper(deleteById)
}