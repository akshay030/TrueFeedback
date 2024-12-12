import mongoose from "mongoose";

type ConnectionObject={
    isConnected?:number
}

const connection:ConnectionObject={}


async function dbConnect():Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database");
        return
        
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '',{})
        console.log("Connected to database sucessfully")
        
        connection.isConnected = db.connections[0].readyState
        console.log("Connected to database sucessfully")

    } catch (error) {
        console.log("Error connecting to database sucessfully",error);
        
        process.exit(1)
        
    }
}

export default dbConnect
