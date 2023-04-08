import { RequestHandler } from "express";
import NoteModel from "../model/note";

export const getNotes: RequestHandler = async (req, res, next) => {
    try {
        //throw Error("Errorrrr")
        const notes = await NoteModel.find().exec()
        res.status(200).json(notes)
    } catch (error) {
        next(error);
    }
}