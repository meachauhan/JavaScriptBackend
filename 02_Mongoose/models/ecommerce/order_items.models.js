import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderItemSchema=new mongoose.Schema({

    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    orderItems:{
        type:[orderSchema]
    },
    address:{
        tyoe:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default: "PENDING"
    }
})

export const OrderItem=mongoose.model("OrderItem",orderItemSchema)