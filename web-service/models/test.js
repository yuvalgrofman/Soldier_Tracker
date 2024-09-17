const mongoose = require("mongoose");

const Test = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    // HIGH/LOW
    type: {
        type: String,
        nullable : false,
    },
    pass: {
        type: Number,
        nullable: false,
    },
    excellent: {
        type: Number,
        nullable: true,
    },
    results: {
        type: [ObjectId],
        nullable: true,
    }
});

module.exports = mongoose.model("Test", Test);