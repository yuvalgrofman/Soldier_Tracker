const mongoose = require("mongoose");

const Section = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    soldierIds: {
        type : [mongoose.Schema.Types.ObjectId],
        nullable : true,
    },
    commander: {
        type: String,
        nullable: true,
    },
});

module.exports = mongoose.model("Section", Section);