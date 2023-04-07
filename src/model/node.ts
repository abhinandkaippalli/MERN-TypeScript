import { Schema } from "mongoose";

const nodeSchema = new Schema({
    tittle: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
},{timestamps: true})