const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const connectionPool = require("../database/connection-pool");
const BookRepository = require("../database/book-repository");
const db = require("../config/db");

let repository = new BookRepository(connectionPool);

router.get("/:id", function (req, res) {
  console.log('ID:', req.params.id);
  res.sendStatus(200);
});

router.put("/:id", function (req, res) {
  console.log('Body:', req.params.body);
  res.sendStatus(200);
});

router.delete("/:id", function (req, res) {
  console.log('Id:', req.params.id);
  res.sendStatus(200);
});

// salva um novo livro
router.post("/", function (req, res) {
  console.log("books post", req.body);
  repository.save(req.body);
  res.sendStatus(200);
});


module.exports = router;
