const AuthorController = require('../controllers/authors.controllers')

module.exports = function (app) {
    app.get('/api', AuthorController.index)
    app.get('/api/authors', AuthorController.getAllAuthors)
    app.get('/api/authors/:id', AuthorController.getOneAuthor)
    app.post('/api/authors', AuthorController.newAuthor)
    app.put('/api/authors/:id', AuthorController.updateAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}