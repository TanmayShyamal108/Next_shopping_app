import mongoose, { Schema } from "mongoose";


const adminschema = new Schema({
    name: String,
    password: String
});

const AdminData = mongoose.models.AdminData || mongoose.model("AdminData", adminschema);

export default AdminData