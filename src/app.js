const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

const publicDirectory = path.join(__dirname, "../public");
const viewsDirectory = path.join(__dirname, "../public/template");
const partialsDirectory = path.join(__dirname, "../public/template/sections");

hbs.registerPartials(partialsDirectory);

app.use(express.static(publicDirectory));

//setup view engine for express
app.set("view engine", "hbs");

app.set("views", viewsDirectory);

app.get("/", function (request, response) {
  response.render("index");
});

console.log("LISTENING PORT 3000");
app.listen(process.env.PORT || 3000);
