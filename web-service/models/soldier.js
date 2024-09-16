const mongoose = require("mongoose");

const Soldier = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    citizinshipID : {
        type: Number,
        nullable: false,
    },
    soldierID: {
        type: Number,
        nullable: false,
    },
    img: {
        type: String,
        nullable: true,
    },
    section: {
        type: String,
        nullable: true,
    },
    platoon: {
        type: String,
        nullable: true,
    },
    company: {
        type: String,
        nullable: true,
    },
    address: {
        type: String,
        nullable: true,
    },
    medicalProfile: {
        type: Number,
        nullable : true,
    }
});

module.exports = mongoose.model("User", User);