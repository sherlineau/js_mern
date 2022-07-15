const Song = require("./../models/song.model")

module.exports.testAPI = (req, res) => {
    res.json({Status:'ok'})
}

// get all
module.exports.allSongs = (req, res) => {
    Song.find()
        .then( songs => res.json(songs) )
        .catch( err => res.json(err) )
}

module.exports.songsByArtist = ( req, res) => {
    // needs to be exact match -> tiesto != Tiesto
    Song.find({artist: req.params.artist})
        .then(songs => res.json(songs))
        .catch(err => res.json(err))
}

// get one
module.exports.oneSong = (req, res) => {
    const id = req.params.id
    Song.findOne({ _id: id })
        .then( oneSong => res.json(oneSong) )
        .catch( err => res.json(err) )
}

// create
module.exports.addSong = (req, res) => {
    const newSong = req.body
    Song.create(newSong)
        .then( song => res.json(song) )
        .catch( err => res.json(err) ) 
}

module.exports.addSong2 = ( req, res ) => {
    // instantiate a song 
    const newSong = new Song(req.body)
    //sets artist to justin bieber after song has been created
    // overrides req.body artist
    newSong.artist = "Justin Bieber"
    // need to save it
    newSong.save()
        .then(song=>res.json(song))
        .catch(err=>res.json(err))
}

// update -- get one + create
module.exports.updateSong = (req, res) => {
    //grab id from params
    const id = req.params.id
    const updateValue = req.body
    // update: criteria, updatedValue, options
    Song.findOneAndUpdate( 
        { _id: id },                        //criteria
        updateValue,                        //updatedValue
        { new: true, runValidators: true }  //options
        )
        .then(updatedSong => res.json(updatedSong))
        .catch( err => res.json(err) ) 
}

module.exports.deleteSong = (req, res) => {
    Song.deleteOne( {_id: req.params.id} )
        .then(message => res.json(message))
        .catch( err => res.json(err) ) 
}


