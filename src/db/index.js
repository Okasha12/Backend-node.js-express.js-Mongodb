
// import mongoose from "mongoose";

// import { DB_NAME } from "../constants.js";

// const connectDB = async ()=>{
//     try{
//        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//        console.log(`\n MongoDb connected !! DB Host: ${connectionInstance.connection.host}`)//tell about host we connect 
//        console.log(connectionInstance)

//     }catch(error){
//         console.log("MongoDb connection error",error);
//         process.exit(1);
//     }
// }

// export default connectDB

import mongoose from "mongoose";


const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://okashahassan8010:Pasha416@cluster0.rolbjhr.mongodb.net/practice`)
        console.log(`MongoDb Connection Successful ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log('MONGODB connection ERROR: ', error );
        process.exit(1);
    }
}
export default connectDB;