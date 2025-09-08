import mongoose from "mongoose";
import {config} from "../config/index"
// const {MONGODB_URI} = 


export const connection = async () => {
    try{
        await mongoose.connect(config.MONGODB_URI as string)
        console.log("DB Connection ");
    }catch(err){
        console.log("--- DB --- ERROR ---");
        console.log(err);
        throw new Error(err as string)
    }
}
