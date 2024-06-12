

import mongoose, { Schema } from "mongoose";



const userschema = new Schema({
    username: String,
    password: String,
    email:String,
    mobile:Number
});

const UserData = mongoose.models.UserData || mongoose.model("UserData", userschema);

export default UserData