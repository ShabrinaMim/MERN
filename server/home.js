const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config({path : "./config.env"});
require("./db/connection.js");


//creating middleware
const mymiddleware = function(req, res, next) {
    console.log("inside middleware");
    next();
}
//mymiddleware();


const portnumber = process.env.PORT;

app.get("/", function(req, res) {
    res.send("Home Page");
});
app.get("/about-page", mymiddleware, function(req, res) {
    res.send("about Page");
});
app.get("/contact-page", function(req, res) {
    res.send("contact Page");
});
app.get("/singin-page", function(req, res) {
    res.send("singin Page");
});
app.get("/signup-page", function(req, res) {
    res.send("signup Page");
});


app.listen(portnumber, function() {
    console.log("Server Running");
});