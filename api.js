const express = require('express');
const contactRouter = require('./route/route');

const app = express();

app.use(express.json());


app.use('/',contactRouter);


const port = 3000;
app.listen(port, console.log("Server Listening to port: ",port));