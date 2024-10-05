const mongoose = require("mongoose");

let soldierStatus = new mongoose.Schema({
    soldierId: {
        type: Number,
        nullable: false,
    },
    completed : {
        type: Boolean,
        nullable: false,
    },
});

// Platoon = מחלקה
const Activity = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    soldiers : { 
        type: [soldierStatus],
        nullable : false,
    },
});

module.exports = mongoose.model("Activity", Activity);