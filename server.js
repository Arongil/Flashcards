var express = require("express");
var app = express();

app.use(express.static("C:\\Users\\laker\\Desktop\\Laker\\Programs\\Flashcards"));

app.listen("2000");
console.log("Working on 2000");
