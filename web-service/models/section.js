const mongoose = require("mongoose");

import { soldier } from "./soldier";

const Section = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    soldiers: {
        type : [soldier],
        nullable : false,
    },
    commander: {
        type: String,
        nullable: false,
    },
    platoon: {
        type: String,
        nullable: false,
    },
});

module.exports = mongoose.model("User", User);