const mongoose = require('mongoose')

const AuthorSchema = new mongoose({
    name: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be at least 3 characters"]
    }
}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema)