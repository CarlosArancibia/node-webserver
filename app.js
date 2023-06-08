const express = require("express");
const app = express();
require("dotenv").config();

const hbs = require("hbs");

const port = process.env.PORT;

// handlebars
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// serve static content
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Node Course",
    name: "Carlos Arancibia",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    title: "Node Course",
    name: "Carlos Arancibia",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    title: "Node Course",
    name: "Carlos Arancibia",
  });
});

// app.get("/elements", (req, res) => {
//   res.sendFile(__dirname + "/public/elements.html");
// });

// app.get("/generic", (req, res) => {
//   res.sendFile(__dirname + "/public/generic.html");
// });

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
