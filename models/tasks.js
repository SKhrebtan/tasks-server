const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const taskSchema = new Schema({
   title: {
    type: String,
  },
  projetcId: {
    type: String,
  },
  isGroup: {
    type: Boolean,
    default: false,
  },
   position: {
    type: String,
  },
     groupId: {
    type: String,
  },
  note: {
        type: String,
  },
   status: {
        type: String,
  },
    priority: {
        type: String,
  },
     deadline: {
        type: String,
  },
      owner: {
      type: Schema.Types.ObjectId,
      ref: 'project',
      required: true,
  },
}, { versionKey: false, timestamps: true });

taskSchema.post("save", handleMongooseError)

const addTaskSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
 })
const Task = model("task", taskSchema);
module.exports = {
  addTaskSchema,
  Task
}