const mongoose = require("mongoose");
const company = require("./company");

const Section = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    soldiers: {
        type : [ObjectId],
        nullable : true,
    },
    commander: {
        type: String,
        nullable: false,
    },
});

module.exports = mongoose.model("Section", Section);