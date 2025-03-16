const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  projectTitle: {
    type: String, 
    required: true 
  },
  projectDesc: {
    type: String, 
    required: true 
  },
  access: { 
    type: String,
    enum: ['public', 'private'],
    required: true
  },
  HTML: {
    type: String, 
    default: ""
  },
  CSS: {
    type: String, 
    default: ""
  },

}, {timestamps: true})

module.exports = mongoose.model("project", projectSchema);