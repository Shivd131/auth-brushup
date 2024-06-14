import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide an Username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide an password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

//model could be already created in the db, so use ours only if not
const User = mongoose.models.users || mongoose.model("Users", userSchema); //btw Users will all become lowercased in mongo

export default User;
