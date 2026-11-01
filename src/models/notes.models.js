
const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    title: String,
    description: String,
    Date: {
        type: Date,
        default: Date.now
    }
})  

const Notes = mongoose.model("Notes", notesSchema)
module.exports = Notes