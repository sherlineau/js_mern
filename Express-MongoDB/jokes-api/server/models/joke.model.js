const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, 'Setup is required'],
            minLength: [5, 'Setup must be at least 5 characters']
        },
        punchline: {
            type: String,
            required: [true, 'Punchline is required'],
            minLength: [5, 'Punchline must be at least 5 characters']
        }
    }, { timestamps: true })

module.exports = mongoose.model('Joke', JokeSchema)