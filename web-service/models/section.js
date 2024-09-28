const mongoose = require("mongoose");

const Section = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    soldierIds: {
        type : Number,
        nullable : true,
    },
    commander: {
        type: String,
        nullable: false,
    },
});

module.exports = mongoose.model("Section", Section);