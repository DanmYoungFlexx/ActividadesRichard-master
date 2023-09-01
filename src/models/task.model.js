import mongoose from "mongoose";
import { StringDecoder } from "string_decoder";

const taskSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    description : {
        type : String,
        required: true
    },
    date: {
        type : Date,
        dafault : Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true
    }
},{
    timestamps : true
})

export default mongoose.model('Task', taskSchema);