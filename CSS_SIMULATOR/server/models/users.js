const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fname: {
    type: String, 
    required: true 
  },
  lname: {
    type: String, 
    required: true 
  },
  username: { 
    type: String, 
    unique: true, 
    required: true 
  },
  email: { 
    type: String, 
    unique: true, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  }, // Store hashed password
  profileImage: { 
    type: String,
    default: "https://res.cloudinary.com/du5jkj6pi/image/upload/v1736188016/FriendSphere/jp3evvshq3hdgmvfacid.png"
  }, // URL to user's profile
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "project"
    }
  ]
})

module.exports = mongoose.model("user", userSchema);