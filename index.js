// Database packages
const express = require("express");
const iplocation = require("iplocation").default;
var address = require('address');
 
// default interface 'eth' on linux, 'en' on osx.
console.log(address.ip());   // '192.168.0.2'

 

// Database variables
const app = express()
    port = 2000;

const homepage = require('./controller/homepage.js');

app
    .use("/static", express.static("static"))
    .set("view engine", "pug")
    .get("/", homepage);

// iplocation(address.ip(), [], (error, res) => {
 
//     console.log(res);
 
// });

app.listen(port);