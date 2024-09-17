const mongoose = require("mongoose");

const Company = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    platoonIds : {
        type : [ObjectId], // platoons
        nullable : false,
    },
    commander: {
        type: String,
        nullable: false,
    },
});

module.exports = mongoose.model("Company", Company);