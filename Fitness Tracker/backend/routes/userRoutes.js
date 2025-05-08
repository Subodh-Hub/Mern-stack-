import express from "express";
import { loginUser, signUpUser } from "../controllers/userController.js";

const userRouter = express.Router();

// Login routes
userRouter.post("/login", loginUser);

// Signup routes
userRouter.post("/signup", signUpUser);

export default userRouter;
