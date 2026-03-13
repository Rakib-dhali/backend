const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    messege: "note created successfully",
  });
});

app.get("/notes", (req, res) => {
  // res.send(notes)
  res.status(200).json({
    messege: "notes fetch successfully",
    notes: notes,
  });
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];

  res.status(200).json({
    messege: "note deleted successfully",
  });
});

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const updatedDescription = req.body.description;

  notes[index].description = updatedDescription;

  res.status(200).json({
    messege: "note updated successfully",
  });
});

module.exports = app;
