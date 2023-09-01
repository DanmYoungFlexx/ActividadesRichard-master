import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true
    },

    email : {
        type: String,
        unique: true,
        require: true,
        trim: true
    },

    password :{
        type: String,
        require: true
    }

},{
    timestamps: true
})

export default mongoose.model("User", userSchema);