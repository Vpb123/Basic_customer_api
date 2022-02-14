const express = require("express");


const app= express();
const fs= require("fs");

const router = require("./routers/routers.js")(app,fs);

const server = app.listen(8000, ()=>{
    console.log(`Listening on port ${server.address().port}`);
});