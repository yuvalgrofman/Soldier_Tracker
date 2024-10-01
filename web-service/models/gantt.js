const mongoose = require("mongoose");

const Gantt = new mongoose.Schema({
    subject: {
        type: String,
        nullable: false,
    },
    link: {
        type: String,
        nullable: false,
    },
    week: {
        type: Number,
        nullable: false,
    },
    company: {
        type: String,
        nullable: false,
    },
    sunday: {
        type: String,
        nullable: true,
    },
    monday: {
        type: String,
        nullable: true,
    },
    tuesday: {
        type: String,
        nullable: true,
    },
    wednesday: {
        type: String,
        nullable: true,
    },
    thursday: {
        type: String,
        nullable: true,
    },
    friday: {
        type: String,
        nullable: true,
    },
    saturday: {
        type: String,
        nullable: true,
    },
});

module.exports = mongoose.model("Gantt", Gantt);