const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://<username>:<password>@<wow>.pfvqylq.mongodb.net/flashcards", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a data schema
const notesSchema = {
  title: String,
  content: String,
};

const Note = mongoose.model("Note", notesSchema);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "/index.html"));
});

// Add a new route to handle dynamic JavaScript files
app.get("/js/sets.js", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "sets.js"));
});

app.get("/js/hide.js", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "hide.js"));
});

app.get("/js/script.js", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "script.js"));
});

//app.post
app.post("/", function (req, res) {
  let newNote = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  newNote.save();
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
