import { AdminModel } from "../models/Admin.model.js";
import bcrypt from "bcryptjs";
import { UserModel } from "../models/user.model.js";
import jwt from 'jsonwebtoken'


export const AdminRegister = async (req,res)=>{
    const Admin = req.body;
    
    if (! Admin.name || !Admin.email || !Admin.password) {
        return res.status(404).json({success:false,message:"credentials can not be null"});
    }
    try {
        Admin.password = await bcrypt.hash(Admin.password,10);
        // console.log(Admin);

        const newAdmin = AdminModel(Admin);
         newAdmin.save();
        
        return res.status(200).json({success:true,message:"succcess"});
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
        
    }
}
export const UserRegister = async (req,res)=> {
    const User = req.body;
    if (!User.email || !User.name || !User.password  || !User.role) {
        
        return res.status(404).json({success:false,message:"credentials can not be null"});
    }
    try {
        User.password = await bcrypt.hash(User.password,10);
        // console.log(User);

        const newUser = UserModel(User);
         newUser.save();
        
        return res.status(200).json({success:true,message:"succcess"});
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
        
    }

}
export const UserLogin = async (req,res)=>{
    try {
        
        const User = req.body;
        if (!User.email || !User.password) {
            return res.status(404).json({success:false,message:"credentials can not be null"});
            
        }
        const findUser = await UserModel.findOne({email:User.email})
        const UserPassword = findUser.password
        if (!UserPassword) {
            return res.status(403).json({success:false,message:" invalid credentials"});
        }
        const passwordMatch = await bcrypt.compare(User.password,UserPassword);
        if(passwordMatch){
            const token = jwt.sign({
                name:findUser.name,
                id:findUser._id,
                role:findUser.role,
            },process.env.KEY,{
                expiresIn:100

            })
            res.cookie('jwt',token,{
                httpOnly:true
            });
            return res.status(200).json({success:true,message:" true credentials",token:token});
            
        }
        return res.status(403).json({success:false,message:" invalid credentials"});
        } catch (error) {
            // return res.status(500).json({success:false,message:error.message});
            console.log(error.message);
            
        
    }
}
export const AdminLogin = async (req,res)=>{
    try {
        
        const User = req.body;
        if (!User.email || !User.password) {
            return res.status(404).json({success:false,message:"credentials can not be null"});
            
        }
        const findUser = await AdminModel.findOne({email:User.email})
        const UserPassword = findUser.password
        if (!UserPassword) {
            return res.status(403).json({success:false,message:" invalid credentials"});
        }
        const passwordMatch = await bcrypt.compare(User.password,UserPassword);
        if(passwordMatch){
            const token = jwt.sign({
                name:findUser.name,
                id:findUser._id,
                role:findUser.role,
            },process.env.KEY,{
                expiresIn:100

            })
            res.cookie('jwt',token,{
                httpOnly:true
            });
            return res.status(200).json({success:true,message:" true credentials",token:token});
            
        }
        return res.status(403).json({success:false,message:" invalid credentials"});
        } catch (error) {
            // return res.status(500).json({success:false,message:error.message});
            console.log(error.message);
            
        
    }
}