const mongoose = require("mongoose");

const Result = new mongoose.Schema({

    soldier: {
        type: ObjectId,
        nullable : false
    }, 
    result: {
        type: Number,
        nullable: false,
    }, 
    completed: {
        type: Boolean,
        nullable: false,
    }
    
});

module.exports = mongoose.model("Result", Result);