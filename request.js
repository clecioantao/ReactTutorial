"use strict";
const axios = require("axios");

const book = {
  title: "111111111",
  author: "2222222222222222n",
  published: "2000-01-01",
};

axios
  .post("http://localhost:3100/books", book)
  .then((response) => {
    console.log("Response", response.data);
  })
  .catch((error) => {
    console.error("Error", error);
  });
