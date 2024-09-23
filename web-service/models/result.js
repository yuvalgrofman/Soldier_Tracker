const mongoose = require("mongoose");

const Result = new mongoose.Schema({

    testName: {
        type: String,
        nullable: false
    },
    soldierID: {
        type: ObjectId,
        nullable : false
    }, 
    score: {
        type: Number,
        nullable: false,
    }, 
    isCompleted: {
        type: Boolean,
        default: false,
    }
    
});

module.exports = mongoose.model("Result", Result);