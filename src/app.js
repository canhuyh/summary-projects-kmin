const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const projectDB = require("./db/project.json");
const serverless = require("serverless-http");
const router = express.Router();

const publicDirectory = path.join(__dirname, "../public");
const viewsDirectory = path.join(__dirname, "../public/template");
const partialsSectionsDirectory = path.join(
  __dirname,
  "../public/template/sections"
);
const partialsComponentsDirectory = path.join(
  __dirname,
  "../public/template/components"
);

hbs.registerPartials(partialsSectionsDirectory);
hbs.registerPartials(partialsComponentsDirectory);

app.use(express.static(publicDirectory));

//setup view engine for express
app.set("view engine", "hbs");

app.set("views", viewsDirectory);

router.get("/", function (request, response) {
  response.render("index", { projectDB });
});

router.get("/test", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from Express.js!</h1>");
  res.end();
});

app.use("/.netlify/functions/server", router);
module.exports.handler = serverless(app);
console.log("LISTENING PORT 3000");
app.listen(process.env.PORT || 3000);
