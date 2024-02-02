const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const connectionPool = require("../database/connection-pool");

const db = require("../config/db");


router.get("/:id", function (req, res) {
  console.log('ID:', req.params.id);
  res.sendStatus(200);
});

router.put("/:id", function (req, res) {
  console.log('ID:', req.params.body);
  res.sendStatus(200);
});

router.post("/", function (req, res) {
  console.log("books post", req.body);

  connectionPool
    .getPool()
    .query("insert into books set ?", req.body, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
});


module.exports = router;
