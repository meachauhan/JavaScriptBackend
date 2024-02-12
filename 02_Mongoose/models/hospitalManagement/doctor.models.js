import mongoose, { mongo } from "mongoose";

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experinceInYears:{
        type:Number,
        required:true,
        defualt:0
    },
    workInHospitals:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }]

},{timestamps:true})

export const Doctor=mongoose.model("Doctor",doctorSchema)