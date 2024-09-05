import userModel from '../../../DB/models/User.model.js';
import { AppError } from "../../../AppError.js";
import bcrypt from 'bcryptjs/dist/bcrypt.js';
import jwt from 'jsonwebtoken';
//import { registerSchema } from './auth.validation.js';
import { sendEmail } from '../../Utils/sendEmail.js';
import cloudinary from "../../Utils/cloudinary.js";

export const register =async (req,res)=>{
    const{userName,email,password,role}=req.body;
    const user=await userModel.findOne({email});
    if(user){
        return next(new AppError('email exist', 409));
    }
    const hasedPassword=bcrypt.hashSync(password,parseInt(process.env.SALTROUND))
    
    let image = '';   


    if (req.file) {
      try {
        const { secure_url } = await cloudinary.uploader.upload(req.file.path);
        image = secure_url;  
      } catch (error) {
        return next(new AppError('Image upload failed', 500));
      }
    }
    await userModel.create({userName,email,password:hasedPassword,image,role})
    const html=`
    <div>
    <p> welcome Mr/s ${userName}</p>
    <h1 style='background-color:teal;width:50%'>welcome</h1>
    <h2>new account</h2>
    </div>
    `
    sendEmail(email,'welcome',html)
    return res.status(201).json({message:"success"});
    
}

export const login=(async(req,res)=>{
    const {email,password}=req.body;
    
    const user= await userModel.findOne({email});

    if(!user){
        return next(new AppError('email not found',404));
    }

    const match= bcrypt.compareSync(password,user.password);
    if(!match){
        return next(new AppError('invalid password',500));
    }
    const token=jwt.sign({id:user._id,role:user.role},process.env.LOGINSIGNITURE,{expiresIn:'10000h'});
    return res.status(200).json({message:"success",token});
})
















