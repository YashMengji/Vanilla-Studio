const projectModel = require("../models/projects");

async function createProject (req, res) {
  try {
    const { projectTitle, projectDesc, visibility, HTML, CSS } = req.body;
    const project = await projectModel.create({ projectTitle, projectDesc, visibility });
    res.status(201).json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getProject (req, res) {
  try {
    const project = await projectModel.findById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function updateProjectDetails (req, res) {
  try {
    const { projectTitle, projectDesc, visibility } = req.body;
    const project = await projectModel.findByIdAndUpdate(req.params.id, { projectTitle, projectDesc, visibility }, { new: true });
    res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function editProject (req, res) {
  try {
    const { HTML, CSS } = req.body;
    const project = await projectModel.findByIdAndUpdate(req.params.id, { HTML, CSS }, { new: true });
    res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function deleteProject (req, res) {
  try {
    const project = await projectModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { createProject, getProject, updateProjectDetails, editProject, deleteProject };