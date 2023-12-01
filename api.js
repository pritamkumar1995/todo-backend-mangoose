const express = require('express');
const bodyParser = require('body-parser');
const contactRouter = require('./route/route');

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use('/',contactRouter);


const port = 3000;
app.listen(port, console.log("Server Listening to port: ",port));