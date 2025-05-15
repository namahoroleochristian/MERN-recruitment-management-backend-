import mongoose from "mongoose";
import { PostModel } from "../models/post.model.js";

export const AddPost = async (req,res)=>{
    const post = req.body
    if(!post.postName){
    return res.status(404).json({success:false,message:"data can not be null"});
    }
    try {
        const newPost =PostModel(post);
        await newPost.save()
        return res.status(200).json({success:true,message:"succcess"});

    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
        
    }
}
export const DeletePost = async (req,res)=>{
    const id = req.params.id 
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({success:false,message:"invalid id"});
    }

    try {
        const newPost =await PostModel.findByIdAndDelete(id);
        return res.status(200).json({success:true,message:"deleted"});

    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
        
    }
}
export const UpdatePost = async (req,res)=>{
    const id = req.params.id 
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({success:false,message:"invalid id"});
    }

    try {
        const newPost = await PostModel.findByIdAndUpdate(id,post,{new:true});
        return res.status(200).json({success:true,message:"updated"});

    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
        
    }
}
export const getPosts = async (req,res)=>{
   try {
        const newPost = await PostModel.find();
        return res.status(200).json(newPost);

    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
        
    }
}