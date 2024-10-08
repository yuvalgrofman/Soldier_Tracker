const mongoose = require("mongoose");

const Soldier = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    citizenshipID : {
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
    },
    rightHanded: {
        type: Boolean,
        nullable: true,
    },
    packal: {
        type: String,
        nullable: true,
    },
    religion: {
        type: String,
        nullable: false,
    },
    sensitivities: {
        type: String,
        nullable: true,
    },
    exception: {
        type: Number,
        default: 0,
        nullable: false,
    }
});

module.exports = mongoose.model("Soldier", Soldier);