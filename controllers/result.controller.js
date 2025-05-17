import mongoose from "mongoose";
import { ResultModel } from "../models/result.model.js";
import { UserModel } from "../models/user.model.js";

export const AddResult = async (req,res)=>{
    const Result = req.body
    console.log(Result);
    
    if(!Result.score || !Result.candidateId || !Result.postId ){
    return res.status(404).json({success:false,message:"data can not be null"});
    }
    try {
        if(Result.score < 50){
            Result.status = false
        }else{

            Result.status = true
        }

        const newResult =ResultModel(Result);
        await newResult.save()
        return res.status(200).json({success:true,message:"succcess"});

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({success:false,message:error.message});
        
        
    }
}
export const DeleteResult = async (req,res)=>{
    const id = req.params.id 
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({success:false,message:"invalid id"});
    }

    try {
        const newPost =await ResultModel.findByIdAndDelete(id);
        return res.status(200).json({success:true,message:"deleted"});

    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
        
    }
}
export const UpdateResult = async (req,res)=>{
    const id = req.params.id 
    const post = req.body;
    console.log(id);
    
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({success:false,message:"invalid id"});
    }

    try {
        const newPost = await ResultModel.findByIdAndUpdate(id,post,{new:true});
        return res.status(200).json({success:true,message:"updated"});

    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
        
    }
}
export const getResult = async (req,res)=>{
   try {
        const newPost = await ResultModel.find()
        .populate('postId','postName')
        .populate('candidateId')

        
        
        
        return res.status(200).json(newPost);

    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
        
    }
}
export const getResultById = async (req,res) => {
    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
        console.log("inavlid id");
        
        return res.status(404).json({success:false,message:"no valid id found"});
    }
    try {
        const Result = await ResultModel.findOne(({_id:id}))
        .populate('postId')
        .populate('candidateId')
        return res.status(200).json(Result); 
    } catch (error) {
        console.log(error.message);
        
            return res.status(500).json({success:false,message:error.message});
            
        }
}