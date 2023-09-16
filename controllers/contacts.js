const Contact = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
     const result = await Contact.find();
     res.json(result);
  }

// const getById = async (req, res, next) => {
//        const { contactId } = req.params
//   const result = await contacts.getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
//  }
 
// const add = async (req, res) => {
//          const result = await contacts.addContact(req.body)
//     res.status(201).json(result);
// }
  
// const deleteById = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await contacts.removeContact(contactId);
//     if (!result) {
//       throw HttpError(404, "Not found")
//     }
//     res.json({
//       message: "Delete succesful"
//     })
// }
  
// const updateById = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await contacts.updatedContact(contactId, req.body);
//     if (!result) {
//       throw HttpError(404, "Not found")
//     }
//     res.json(result)
//  }
  
module.exports = {
    getAll: ctrlWrapper(getAll),
    // getById: ctrlWrapper(getById),
    // add: ctrlWrapper(add),
    // deleteById: ctrlWrapper(deleteById),
    // updateById: ctrlWrapper(updateById),
}