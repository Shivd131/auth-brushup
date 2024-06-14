import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a Username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a Password"],
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
  },
  {
    timestamps: true,
  }
);

// Use the existing model if it exists, otherwise create a new one
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
