const express = require('express');
const bodyParser = require('body-parser');
const contactRouter = require('./route/route');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors);
app.use(express.json());
app.use('/',contactRouter);


const port = 3000;
app.listen(port, console.log("Server Listening to port: ",port));