import express from "express"
import * as NotesController from "../controller/notes";

const router = express.Router();

router.get("/", NotesController.getNotes );

router.post("/", NotesController.createNote);

export default router