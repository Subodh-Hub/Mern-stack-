import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();

// Routes to save a new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "Please fill all the fields" });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send({ message: "Book created successfully", book });
  } catch (err) {
    console.log("error", err.message);
    res.status(500).send({ meassage: err.message });
  }
});

// Routes to get all the books from dataBase
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      count: books.length,
      books,
    });
  } catch (err) {
    console.log("error", err.message);
    res.status(500).send({ message: err.message });
  }
});

// Routes to get a specific book from id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findById(id);
    return res.status(200).send(books);
  } catch (err) {
    console.log("error", err.message);
    res.status(500).send({ message: err.message });
  }
});

// Update a books
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Please fill all the fields: title, author, publishYear",
      });
    }

    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book updated successfully" });
  } catch (err) {
    console.log("error", err.message);
    res.status(500).send({ message: err.message });
  }
});

// Delete a books
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (err) {
    console.log("error", err.message);
    res.status(500).send({ message: err.message });
  }
});


export default router;