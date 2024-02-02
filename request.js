"use strict";
const axios = require("axios");

const book = {
  title: "xxxxxxxx",
  author: "yyyyyyyy",
  published: "2000-01-01",
};

axios
  .post("http://localhost:3100/books", book)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Error", error);
  });
