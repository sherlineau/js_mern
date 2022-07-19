const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be positive"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [3, "Description must be at least 3 characters"]
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema )
