import mongoose from "mongoose";
import { connected } from "process";


export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('MongoDB connected');
            
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error:'+ err);
            process.exit()
        })

    } catch (error) {
        console.log('Something went wrong in connecting to DB');
        console.log(error);
        
        
    }
}