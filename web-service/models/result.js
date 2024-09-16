const mongoose = require("mongoose");

import { soldier } from "./section";

const result = new mongoose.Schema({

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

module.exports = mongoose.model("User", User);