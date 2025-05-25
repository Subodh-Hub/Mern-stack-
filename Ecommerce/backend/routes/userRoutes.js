import express from "express";
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers
} from "../controllers/userController.js";

import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js";

const userRoutes = express.Router();

userRoutes
  .route("/")
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUsers);
userRoutes.post("/auth", loginUser);
userRoutes.post("/logout", logoutCurrentUser);

export default userRoutes;
