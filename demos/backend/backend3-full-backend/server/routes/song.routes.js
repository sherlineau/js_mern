const SongController = require('../controllers/song.controller')

module.exports = (app) => {
    app.get("/api/test", SongController.testAPI)
    app.get("/api/songs", SongController.allSongs)
    app.get("/api/songs/:artist", SongController.songsByArtist)
    app.get("/api/songs/:id", SongController.oneSong)
    app.post("/api/songs", SongController.addSong)
    app.post("/api/songs2", SongController.addSong2)
    app.put("/api/songs/:id", SongController.updateSong)
    app.delete("/api/songs/:id", SongController.deleteSong)
}