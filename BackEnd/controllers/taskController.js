import mongoose from "mongoose";
import { TaskSchema } from "../models/taskModel";

const Task = mongoose.model('Task', TaskSchema);

export const addNewTask = async(req,res) => {
    let newTask = new Task(req.body);

    try {
        const task = await newTask.save();
        res.json(task);
    } catch (error) {
        res.send(error);
    }
}

export const getTasks = async(req,res) => {
    try {
        const tasks = await Task.find({});
        res.json(tasks);
    } catch (error) {
        res.send(error);
    }
}

export const updateTask = async(req,res) => {
    try {
        const task = await task.findOneAndUpdate(
                { _id: req.params.TaskId },
                req.body,
                {new: true}
            )
        res.json(task);
    } catch (error) {
        res.send(error);
    }
}

export const deleteTask = async(req,res) => {
    try {
        const task = await Task.deleteOne({_id:req.params.TaskId})
        res.json({message:'Succesfully deleted task'});
    } catch (error) {
        res.send(error);
    }
}
