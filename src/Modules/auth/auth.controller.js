import userModel from '../../../DB/models/User.model.js';
//import categoryModel from '../../../DB/models/User.model.js';
import bcrypt from 'bcryptjs/dist/bcrypt.js';
import jwt from 'jsonwebtoken';
//import { registerSchema } from './auth.validation.js';



export const register =async (req,res)=>{
    const{userName,email,password}=req.body;
    const user=await userModel.findOne({email});
    if(user){
        return res.status(409).json({message:"email already exists"})
    }
    const hasedPassword=bcrypt.hashSync(password,parseInt(process.env.SALTROUND))

    await userModel.create({userName,email,password:hasedPassword})
    return res.status(201).json({message:"success"});
    //return error ()
    /////////////////global error/////////
}

export const login=(async(req,res)=>{
    const {email,password}=req.body;
    
    const user= await userModel.findOne({email});

    if(!user){
        return res.status(404).json({message:"user not found"})
    }

    const match= bcrypt.compareSync(password,user.password);
    if(!match){
        return res.status(500).json({message:"invalid password"})
    }
    const token=jwt.sign({id:user._id},process.env.LOGINSIGNITURE,{expiresIn:'10000h'});
    return res.status(200).json({message:"success",token});
})














// export const createCategory=async (req,res)=>{
    
//     const {name,createdBy,updatedBy,status}=req.body;
    
// const category=await categoryModel.insertMany ({name,createdBy,updatedBy,status});

//     return res.status(201).json({message:"success",category});

// // }catch(error){
// //     return res.status(500).json({message:"error",error});

// // }
// }

