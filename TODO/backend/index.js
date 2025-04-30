const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./Models/Todo");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test");

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// done= true
app.put("/completed/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndUpdate(id, { done: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
});
//done= false
app.put("/incompleted/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndUpdate(id, { done: false })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete(id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  console.log("task", task);
  TodoModel.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
