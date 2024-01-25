import mongoose from "mongoose";

const tasksSchema = mongoose.Schema({
    title:{
        type:String,
        requireed:[true, 'title is required'],

    },
    date:{
        type:String,
        requireed:[true, 'date is required'],
    },
    finished:{
        type:Boolean,
        default:false
    }
})

const Tasks= mongoose.model('tasks', tasksSchema)

export default Tasks