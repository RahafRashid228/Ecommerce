import mongoose, { Schema } from "mongoose";


const userSchema= new Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        
    },
    phone:{
        type:String,
        required:true,
    },
   address:{
        type:String,
       
    },
    confirmEmail:{
        type:Boolean,
        default:false,
    },
    gender:{
        type:String,
        enum:['Male','Female'],
       
    },
    status:{
        type:String,
        enum:['Active','notActive'],
        default:'notActive',
    },
    role:{
        type:String,
        enum:['User','Admin'],
    },


},{
  timestamps:true,  
}); 
const userModel=mongoose.model('User',userSchema);
export default userModel;