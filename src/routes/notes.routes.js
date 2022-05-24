const express = require("express");
const router = express.Router();

// Controller
const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote,
  renderCarrito,
} = require("../controllers/notes.controller");
//NO SE USARÁ
// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Note
router.get("/notes/add", isAuthenticated, renderNoteForm);


router.post("/notes/new-note", isAuthenticated, createNewNote);

// Get All Notes
router.get("/notes", isAuthenticated, renderNotes); //Ruta despues de que inicia sesión

// Edit Notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);

router.put("/notes/edit-note/:id", isAuthenticated, updateNote);

// Delete Notes
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

module.exports = router;
