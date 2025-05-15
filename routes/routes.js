import express from "express";
import { AdminLogin, AdminRegister, UserLogin, UserRegister } from "../controllers/auth.controllers.js";
import { AddPost, DeletePost, getPosts, UpdatePost } from "../controllers/post.controller.js";
import { getResult } from "../controllers/result.controller.js";

export const router = express.Router();



// router.post('/Admin/Register',AdminRegister);
router.post('/User/Register',UserRegister);
router.post('/User/Login',UserLogin);
router.post('/Admin/Login',AdminLogin);



// ------------------POST ------------------\\
router.get('/posts',getPosts);
router.put('/posts/:id',UpdatePost);
router.delete('/posts/:id',DeletePost);
router.post('/posts',AddPost);

// ------------------POST ------------------\\
// ------------------RESULT ------------------\\
router.get('/Result',getResult);
router.put('/Result/:id',UpdateResult);
router.delete('/Result/:id',DeleteResult);
router.post('/Result',AddResult);

// ------------------RESULT ----------------