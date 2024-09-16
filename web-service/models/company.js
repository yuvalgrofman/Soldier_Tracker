const mongoose = require("mongoose");

import { section } from "./section";

const section = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    platoons : {
        type : [section],
        nullable : false,
    },
    commander: {
        type: String,
        nullable: false,
    },
});

module.exports = mongoose.model("User", User);