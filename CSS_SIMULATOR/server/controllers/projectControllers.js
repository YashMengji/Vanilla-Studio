const projectModel = require("../models/projects");
const userModel = require("../models/users");

async function getProjects(req, res) {
  try {
    const userId = req.signData.userId; // assuming token is decoded and userId is available

    const userWithProjects = await userModel.findById(userId).populate("projects");

    if (!userWithProjects) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(userWithProjects.projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching projects", error: err.message });
  }
}

async function createProject (req, res) {
  try {
    const { projectTitle, projectDesc, visibility} = req.body;
    const project = await projectModel.create({ projectTitle, projectDesc, visibility });
    await userModel.findOneAndUpdate({_id: req.signData.userId}, {$push: {projects: project._id}});
    res.status(201).json({status: true, project});
  } catch (error) {
    return res.status(500).json({status: false, message: error.message });
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
    console.log(visibility);
    const project = await projectModel.findByIdAndUpdate(req.params.id, { projectTitle, projectDesc, visibility }, { new: true });
    res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function editProject (req, res) {
  try {
    const { HTML } = req.body;
    const project = await projectModel.findByIdAndUpdate(req.params.id, { HTML }, { new: true });
    // res.status(200).json(project);
    res.status(200).json({status: true, message: "project code updated!"});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function deleteProject (req, res) {
  try {
    const projectId = req.params.id
    let project = await projectModel.findByIdAndDelete(projectId);
    await userModel.findByIdAndUpdate(req.signData.userId, {$pull: {projects: projectId}});
    res.status(200).json({status: true, message: "Project deleted successfully", project });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { createProject, getProject, updateProjectDetails, editProject, deleteProject, getProjects };