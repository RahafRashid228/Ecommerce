import mongoose from "mongoose";
const connectDb= async()=>{
    return mongoose.connect(process.env.DB_LOCAL).then(result=>{
        console.log(`db connection established`);
    }).catch(err=>{
        console.log(`error to connect db:  ${err}`);  
    })
  
}
export default connectDb;