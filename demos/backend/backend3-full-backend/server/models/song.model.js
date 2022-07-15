const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    // fieldName: make value an object to set up validations
    // {
    //      type: datatype,
    //      required: [true, "the message you want displayed"],
    // }
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be at least 3 characters"]
    },
    artist: {
        type: String,
        required: [true, "Artist is required"],
        minLength: [3,"Artist must be at least 3 characterse"]
    },
    rating: {
        type: Number,
        min: [0, "Rating must be positive"],
        max: [10, "Rating must be less than 10"]
    }
}, {timestamps: true});

// self joined
/*
const UserSchema = new mongoose.Schema ( {
    fName: String,
    lName: String,
    email: String,
    password: String
    friends = [UserSchema]   //array of different collection schemas
    bankAccounts = [BankSchema]
})
*/
module.exports = mongoose.model('Song', SongSchema);