import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDbUrl } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// defailt Middleware for handling cors policy 
app.use(cors()); 

//custom Middleware for cors policy
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type"]
// }))


app.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});

// Set the Routes
app.use("/books", booksRoute);

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
