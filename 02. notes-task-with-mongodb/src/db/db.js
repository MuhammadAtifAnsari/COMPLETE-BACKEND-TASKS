import mongoose from "mongoose";
import 'dotenv/config';
import path from 'path';
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), '.env') }); 

/*
۔1 dotenv | is the third-party library you installed.
۔2 .config() | method is dotenv engine.
۔3 path | is a built-in Node.js utility module used to handle file paths. 
۔4 .resolve() | method combines multiple path segments into a single, valid absolute path.
۔5 process |  is a global object in Node.js that provides information about the currently running Node.js process
۔6 cwd | stands for Current Working Directory.
*/ 

async function mongoDB_Connect() {
    try {
        if (!process.env.MONGODB_URI) {
            console.log("error in MONGODB_URI");
            return
        }

        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongo_db connect successfully!");

    } catch (error) {
        console.error(error);
        console.log("error in database connection!");
    }
}

export default mongoDB_Connect;