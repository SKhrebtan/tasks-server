const validates = require("./validateBody");
// const validateFavorite = require("./validateBody")
const isValidId = require("./isValidId")
const projectAuth = require('./projectBind')
module.exports = {
    validates,
    isValidId,
    projectAuth
    // validateFavorite,
}