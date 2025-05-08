import express from "express";
import {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";

import requireAuth from "../middleware/requireAuth.js";

const workoutRouter = express.Router();
workoutRouter.use(requireAuth);

// Get all workouts
workoutRouter.get("/", getWorkouts);

// get a single workout
workoutRouter.get("/:id", getSingleWorkout);

// Create a new workout
workoutRouter.post("/", createWorkout);

// Delete a workout
workoutRouter.delete("/:id", deleteWorkout);

// Update a workout
workoutRouter.patch("/:id", updateWorkout);

export default workoutRouter;
