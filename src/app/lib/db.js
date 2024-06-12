
 
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(`${process.env.CONNECTION_STRING}`);
      console.log("DB Connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;