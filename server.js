const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(" ", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB Atlas");
});

const notesSchema = new mongoose.Schema({
  front: String,
  back: String,
});
const Note = mongoose.model("Note", notesSchema);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/client.js", function (req, res) {
  res.sendFile(path.join(__dirname, "client.js"));
});

app.get("/notes", function (req, res) {
  Note.find({}, function (err, notes) {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving flashcards");
    } else {
      res.json(notes);
    }
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
