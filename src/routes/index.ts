import express from "express";
var indexRouter = express.Router();
const bodyParser = require("body-parser");
//const cors = require('cors');
const path = require("path");

//main routing file, assign's all routes
//body parser setup
//cors setup
//let corsOptions = {
//    origin:"http://127.0.0.1:8080",
//    credentials:true,
//}

//indexRouter.use(cors(corsOptions));
indexRouter.use(bodyParser.urlencoded({ extended: false }));
indexRouter.use(bodyParser.json());

//////////INCLUDE ALL ROUTE FILES BELOW\\\\\\\\\\\

export default indexRouter;
