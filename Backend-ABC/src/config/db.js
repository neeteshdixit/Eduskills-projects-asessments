import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.MONGO_URI)
const dbConnect =  async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully")
    } catch (error) {
        console.log("database connection error", error)
    }
}

export default dbConnect;