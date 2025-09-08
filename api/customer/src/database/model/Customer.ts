import mongoose from "mongoose";

const Schema = mongoose.Schema

const CustomerSchema =new Schema({
    email:String,
    password:String,
    phone: String,
    
},{timestamps: true})

export const Customer = mongoose.model("customer" , CustomerSchema) 