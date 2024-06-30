import mongoose from "mongoose";

const fileschema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    content: {
        type: Number,
        required: true,
        default: 0
    }
})

const File = mongoose.model('file',fileschema);

export default File