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
    armyID: {
        type: Number,
        nullable: false,
    },
    img: {
        type: String,
        nullable: true,
    },
    section: {
        type: String,
        nullable: false,
    },
    platoon: {
        type: String,
        nullable: false,
    },
    company: {
        type: String,
        nullable: false,
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

module.exports = mongoose.model("Soldier", Soldier);