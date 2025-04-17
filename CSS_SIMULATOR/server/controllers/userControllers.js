const userModel = require('../models/users');

async function getUsers(req, res) { // API to get all users
  try {
    const users = await userModel.find().sort({ createdAt: -1 });
    return res.json(users);
  } catch (error) {
    return res.status(400).send({message: error.message});
  }
}

module.exports = { getUsers };