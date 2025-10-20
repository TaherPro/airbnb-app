import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected successfully");
    } catch (err) {
        console.error("connection faild", err.message);
    }
};

export default connectDB

