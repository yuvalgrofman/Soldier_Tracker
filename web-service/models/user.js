const mongoose = require("mongoose");

const User = new mongoose.Schema({
    username: {
        type: String,
        nullable: true,
    },

    password: {
        type: String,
        nullable: true,
    },
});

module.exports = mongoose.model("User", User);