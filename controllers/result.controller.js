import mongoose from "mongoose";
import { PostModel } from "../models/post.model.js";
import { ResultModel } from "../models/result.model.js";

export const AddPost = async (req,res)=>{
    const Result = req.body
    if(!Result.score || !Result.candidateId || !Result.postId ){
    return res.status(404).json({success:false,message:"data can not be null"});
    }
    try {
        const newResult =ResultModel(Result);
        await newResult.save()
        return res.status(200).json({success:true,message:"succcess"});

    } catch (error) {
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
        const newPost = await ResultModel.find();
        return res.status(200).json(newPost);

    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
        
    }
}