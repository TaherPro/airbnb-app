import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: { 
    type: String, 
    required: [true, "Email is required"], 
    unique: true,
    match: [/.+@.+\..+/, "Must be a valid email"] 
  },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

export default User;
