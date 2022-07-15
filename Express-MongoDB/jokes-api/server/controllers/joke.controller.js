const Joke = require('./../models/joke.model')

module.exports.testAPI = (req, res) => {
    res.json({Status:'ok'})
}
// get all the jokes from database
module.exports.allJokes = ( req, res ) => {
    Joke.find()
        .then( jokes => res.json(jokes)) 
        .catch( err => res.json(err))
}

// get one using params
module.exports.oneJoke = ( req, res ) => {
    const id = req.params.id
    Joke.findOne({ _id: id })
        .then( oneJoke => res.json(oneJoke)) 
        .catch( err => res.json(err))
}

// gets a random number [size: ] of documents in database
module.exports.randomJoke = ( req, res ) => {
    Joke.aggregate( [ { $sample: {size: 1} } ] )
        .then( jokes => res.json(jokes)) 
        .catch( err => res.json(err))
}

// create a joke
module.exports.addJoke = ( req, res ) => {
    const newJoke = req.body
    Joke.create(newJoke)
        .then( joke => res.json(joke)) 
        .catch( err => res.json(err))
}

// update one by params --> get one + create
module.exports.updateJoke = ( req, res ) => {
    const id = req.params.id
    const updateValue = req.body
    Joke.findOneAndUpdate(
        { _id: id },                        //criteria
        updateValue,                        //updated value
        { new: true, runValidators: true}   //options -> use to run validations on request values
    )
        .then( updatedJoke => res.json(updatedJoke)) 
        .catch( err => res.json(err))
}

// delete one by params
module.exports.deleteJoke = ( req, res ) => {
    Joke.deleteOne( { _id: req.params.id } )
        .then( message => res.json(message)) 
        .catch( err => res.json(err))
}

