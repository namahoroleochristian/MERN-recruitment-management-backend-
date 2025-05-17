import express from "express";
import { AdminLogin, AdminRegister, getUser, UserLogin, UserRegister } from "../controllers/auth.controllers.js";
import { AddPost, DeletePost, getPosts, UpdatePost } from "../controllers/post.controller.js";
import { AddResult, DeleteResult, getResult, getResultById, UpdateResult } from "../controllers/result.controller.js";

export const router = express.Router();



// router.post('/Admin/Register',AdminRegister);
router.post('/Register',UserRegister);
router.post('/Login',UserLogin);
router.post('/Admin/Login',AdminLogin);
router.get('/User',getUser);



// ------------------POST ------------------\\
router.get('/posts',getPosts);
router.put('/posts/:id',UpdatePost);
router.delete('/post/:id',DeletePost);
router.post('/posts',AddPost);

// ------------------POST ------------------\\

// ------------------RESULT ------------------\\
router.get('/Result',getResult);
router.get('/Result/:id',getResultById);
router.put('/Result/:id',UpdateResult);
router.delete('/Result/:id',DeleteResult);
router.post('/Result',AddResult);

// ------------------RESULT ------------------\\