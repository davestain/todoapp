import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})