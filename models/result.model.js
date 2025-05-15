import mongoose from "mongoose";

const ResultSchema = mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts",
        required:true
    },
    candidateId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"candidates",
        required:true
    },
    status:{
        type:mongoose.Schema.Types.Boolean,
        required:true
    },
    score:{
        type:Number,
        min:0,
        max:100,
        required:true
    },
    
},{timestamps:true});

export const ResultModel = mongoose.model('results',ResultSchema)