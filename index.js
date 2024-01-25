import express from "express";
import mongoose from "mongoose";

import Tasks from "./models/tasksmodel.js";

const app=express()
app.use(express.json())

const port = 5555;

app.get('/', async(req, res)=>{
const Tasks = await Tasks.find()
res.json(Tasks)
})

app.post('/', async(req, res)=>{
    const {title, date, finished } = req.body;
    const newtask = new Tasks({
        title, date, finished
    }); 
    const task = await newtask.save();

    res.json(task)
    
})

app.put('/:id', async(req, res)=>{
    const {title, date, finished } = req.body;
    const task = await Tasks.findById(req.params.id)

    if (task) {
        task.title = title
        task.date = date
        task.finished = finished
        const updatedTask = await task.save();
        res.json(updatedTask)
        
    }



    
    
})

app.delete('/:id', async(req, res)=>{
    const task = await Tasks.findByIdAndDelete(req.params.id)
    res.json({message:"task delated!"})
    
})
app.listen(port, ()=>{
    console.log (`server is running on port  ${port}`);
})

mongoose.connect("mongodb+srv://deeq148:Ahmmoh1t43@ecomerce.6wcznoy.mongodb.net/mytasks?retryWrites=true&w=majority").then(()=>{
    console.log('connected to database');
})
