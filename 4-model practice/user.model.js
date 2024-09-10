import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // username : String,
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        min: [8, "password is too short"],
        max: 12,
    }

}, { timestamps: true }

)

export const User = mongoose.model("User", userSchema)