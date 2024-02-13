const addTask = require("./addTask");
// const deleteById = require("./deleteById");
const getAll = require("./getAll");


module.exports = {
    ...addTask,
    ...getAll,
}