import mongoose from "mongoose";

const subTodos=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    }

},{timestamps:true})

export const SubTODO=mongoose.model("SubTodo",subTodos)