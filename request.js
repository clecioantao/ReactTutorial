"use strict";
const axios = require("axios");

const book = {
  title: "The Motorcycle Diaries",
  author: "Ernesto Che Guevara",
  published: "2000-01-01",
};

axios
  .delete("http://localhost:3100/books/655", book)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Error", error);
  });
