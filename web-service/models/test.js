const mongoose = require("mongoose");

const test = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    type: {
        type: String,
        nullable : false,
    },
     
});

module.exports = mongoose.model("User", User);