require("./index");

// Import modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Init server
const server = express();

server.use(express.json());
server.use(cors());

const PORT = process.env.PORT || 6000;

console.log("establishing server...");

server.listen(PORT, () => {
  console.log(`server is established on port => ${PORT}`);
});

// Init database

console.log("establishing database...");

mongoose.connect(
  process.env.DB_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("database is esbalished.");
  }
);
