const Author = require("../models/author.model")

// test api connections
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World",
    })
}

// get all authors
module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then((authors) => res.json(authors))
        .catch((err) => res.status(400).json(err));
}

// get one with params
module.exports.getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

// create -> add to database
module.exports.newAuthor = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

// update one using params
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

// delete one using params
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(message => res.json(message))
        .catch(err => res.status(400).json(err))
}