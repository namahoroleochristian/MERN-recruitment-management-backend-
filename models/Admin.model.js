import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"Admin",
        enum:['Admin']
    },
    
    
},{timestamps:true});

export const AdminModel = mongoose.model('Sudo',AdminSchema)