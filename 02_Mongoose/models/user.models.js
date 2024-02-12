import mongoose from "mongoose"

//Define the Schema with validation to save in MONGODB
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        require:true
    }

},{timestamps:true})

//timestamp: will add two more filed createdAt and updatedAt

export const User=mongoose.model("User",userSchema)
//in database as a standard practice Model name will be saved in purals e.g User will be saved as users