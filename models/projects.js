const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const projectSchema = new Schema({
title:{
    type: String,
    required: [true, 'Set name for group'],
  },
}, { versionKey: false, timestamps: true });

projectSchema.post("save", handleMongooseError)

const addProjectSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
 })
const Project = model("project", projectSchema);
module.exports = {
  addProjectSchema,
  Project
}