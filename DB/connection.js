import mongoose from "mongoose";
const connectDb= async()=>{
    await mongoose.connect(process.env.DB_LOCAL);
    console.log("Connect");
    //error console.log("error to connect db",err)

}
export default connectDb;