const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const connectionPool = require("../database/connection-pool");
const BookRepository = require("../database/book-repository");
const db = require("../config/db");

let repository = new BookRepository(connectionPool);

// Busca um livro pelo ID
router.get("/:id", function (req, res) {
  repository.get(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ 'error': err.toString() });
    }
    else {
      res.status(200).json(result);
    }
  });
});

// Busca todos os livros
router.get("/", function (req, res) {
  repository.getAll((err, result) => {
    if (err) {
      res.status(500).json({ 'error': err.toString() });
    }
    else {
      res.status(200).json(result);
    }
  });
});

// Atualiza um livro existente
router.put('/:id', function (req, res) {
  repository.update(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(500).json({ 'error': err.toString() });
    }
    else {
      res.status(200).json(result);
    }
  });
})

// Deleta um livro existente
router.delete("/:id", function (req, res) {
  repository.delete(req.params.id, (err, result) => {
    if (err) {
      res.status(500).json({ 'error': err.toString() });
    }
    else {
      res.status(200).json(result);
    }
  });
});

// salva um novo livro
router.post('/', function (req, res) {
  repository.save(req.body, (err, result) => {
    if (err) {
      res.status(500).json({ 'error': err.toString() });
    }
    else {
      res.sendStatus(200);
    }
  });
})


module.exports = router;
