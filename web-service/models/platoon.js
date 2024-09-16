const mongoose = require("mongoose");

// Platoon = מחלקה
import { section } from "./section";

const platoon = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    sections : {
        type : [ObjectId],
        nullable : false,
    },
    commander: {
        type: String,
        nullable: false,
    },
    company : {
        type: String,
        nullable: false,
    },
});

module.exports = mongoose.model("User", User);