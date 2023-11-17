const express=require('express');
const server=express();
const router = require('./router');
server.listen(3000, (error)=> {
    if(error) console.log(error);
    else console.log("server is running");
});