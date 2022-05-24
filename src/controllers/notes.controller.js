const notesCtrl = {};

// Models
const Note = require("../models/Note");

notesCtrl.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};




notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id })
    .sort({ date: "desc" })
    .lean();
  res.render("notes/all-notes", { notes });
};



module.exports = notesCtrl;
