const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const Result = new mongoose.Schema({

    testLink: {
        type: String,
        nullable: false
    },
    soldierID: {
        type: Schema.Types.ObjectId,
        nullable : false
    }, 
    score: {
        type: Number,
        default: 0,
        nullable: false,
    }, 
    isCompleted: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        default: "FAILED",
        nullable: false,
    }
    
});

module.exports = mongoose.model("Result", Result);