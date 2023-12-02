require("dotenv").config();

const express = require('express');
const cors = require("cors");

const connectDB = require("./config/db");
const contactRouter = require('./route/route');
const errorHandler = require("./middlewares/error");

//Connect to DB
connectDB();

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/',contactRouter);

app.use(errorHandler);


app.listen(port, console.log("Server Listening to port: ",port));

process.on("unhandledRejection", (error, promise) => {
    console.log(`Logged Error: ${error}`);
    server.close(() => process.exit(1));
  });