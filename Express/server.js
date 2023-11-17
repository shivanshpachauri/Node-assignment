const express=require('express');
const server=express();
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({extended: false}));
// 
const router = require('./router');
const bodyParser = require('body-parser');

// this with product value with req.body
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

server.use(router);
 server.listen(3000, (error)=> {
    if(error) console.log(error);
    else console.log("server is running");
});