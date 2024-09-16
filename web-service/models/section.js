const mongoose = require("mongoose");

const Section = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    soldiers: {
        type : [ObjectId],
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

module.exports = mongoose.model("Section", Section);