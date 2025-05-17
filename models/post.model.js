import mongoose, { Schema } from "mongoose";

const PostSchema = mongoose.Schema({
    postName:{
        type:String,
        required:true
    },

    
},{timestamps:true});

export const PostModel = mongoose.model('posts',PostSchema)