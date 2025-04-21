const userModel = require('../models/users');

async function getUsers(req, res) { // API to get all users
  try {
    const users = await userModel.find().sort({ createdAt: -1 });
    return res.json(users);
  } catch (error) {
    return res.status(400).send({message: error.message});
  }
}

async function updateUser(req, res) {
  // fetch user data 
  // update fname and lname if they are not same as in DB 
  
  try {
    let {fname, lname} = req.body;
    console.log(fname, lname);
    console.log(req.signData);
    await userModel.findOneAndUpdate({_id: req.signData.userId}, {fname, lname});
    res.json({status: true, message: "User data updated !"});
  }catch(err) {
    res.status(400).json({status: false, message: "Error updating user!"});
  }
}

module.exports = { getUsers, updateUser };