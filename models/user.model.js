import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"User",
        enum:['User',"Candidate"]
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts",
        // required:true 
    },
    
},{timestamps:true});

export const UserModel = mongoose.model('Users',UserSchema)