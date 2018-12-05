var express = require("express");
var app = express();

app.use(express.static("C:\\Users\\Laker\\Desktop\\Flashcards"));

app.listen("2000");
console.log("Working on 2000");
