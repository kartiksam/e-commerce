//cors module to pass data from backend to frontend or diff ports thats why or express .json to pass req bodies
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DefaultData = require("./defaultData");
//if there created a func and then exports thgat then write const functionname =require(./db/conn) then func()
require("./db/conn");
const Products = require("./models/productSchema");
const cors = require("cors");
const router = require("./routes/router");
app.use(express.json());
app.use(cors());
app.use(router);
const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});
DefaultData();
