import Workout from "../models/workoutModel.js";
import mongoose from "mongoose";

// Get all workouts
const getWorkouts = async (req, res) => {
  const user_id = req.user._id;
  const workouts = await Workout.find({ user_id }).sort({
    createdAt: -1,
  });

  res.status(200).json({ count: workouts.length, workouts });
};

// Get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};

// Create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const user_id = req.user._id;
    const workout = await Workout.create({
      title,
      reps,
      load,
      user_id,
    });
    res.status(200).json({ workout, message: "Added a new workout" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }
  res.status(200).json({ workout, message: "Deleted a workout sucessfully" });
};

// Update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findByIdAndUpdate(id, { ...req.body });
  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }
  res.status(200).json({ workout, message: "Updated a single workout" });
};

export {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
