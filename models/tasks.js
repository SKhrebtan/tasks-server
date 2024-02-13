const { Schema, model } = require("mongoose");
const Joi = require("joi");

const taskSchema = new Schema({
  id: {
    type: String,
    require,
  },
  title: {
    type: String,
  },
  // projetcID: {
  //   type: String,
  // },
  // isGroup: {
  //   type: Boolean,
  //   default: false,
  // },
  //  position: {
  //   type: String,
  // },
  //    groupId: {
  //   type: String,
  // },
  // note: {
  //       type: String,
  // },
  //  status: {
  //       type: String,
  // },
  //   priority: {
  //       type: String,
  // },
  //    deadline: {
  //       type: String,
  //    },
}, { versionKey: false, timestamps: true });

const addTaskSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
 })
const Task = model("task", taskSchema);
module.exports = {
  addTaskSchema,
  Task
}