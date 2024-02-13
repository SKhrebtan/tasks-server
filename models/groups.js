const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const groupSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Set name for group'],
  },
  projectId: {
    type: String,
  },
  position: {
    type: String,
  },
  tasks: {
    type: Array,
    default: [],
    },
   owner: {
      type: Schema.Types.ObjectId,
      ref: 'project',
      required: true,
  },
}, { versionKey: false, timestamps: true });

groupSchema.post("save", handleMongooseError)

const addGroupSchema = Joi.object({
  title: Joi.string().required(),
  projectId: Joi.string().required(),
    position: Joi.string().required(),
    tasks: Joi.array().items(Joi.object({
        title: Joi.string().required(),
        projectId: Joi.string().required(),
        isGroup: Joi.boolean().required(),
        position: Joi.string().required(),
        groupId: Joi.string().required(),
        notes: Joi.string().required(),
        checkboxList: Joi.array().items(Joi.string()),
        status: Joi.string().required(),
        priority: Joi.string().required(),
        deadline:Joi.string().required()
  }))
})
const Group = model("group", groupSchema);
module.exports = {
  addGroupSchema,
Group,  
}