const mongoose = require('mongoose')

const TeamManagerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true, 'Player Name is required'],
        minlength: [2, 'Player name must be at least 2 characters long']
    },
    preferredPosition: {
        type: String,
    },
    game1: {
        type: String
    },
    game2: {
        type: String
    },
    game3: {
        type: String
    }
}, {timestamps: true})

const TeamManager = mongoose.model("TeamManager", TeamManagerSchema)
module.exports = TeamManager