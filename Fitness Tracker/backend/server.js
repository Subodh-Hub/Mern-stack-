import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import workoutRouter from "./routes/workoutRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// middleware
app.use(express.json());

// defailt Middleware for handling cors policy
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Route
app.use("/workouts", workoutRouter);
app.use("/user", userRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Listening to the request
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}!!!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
