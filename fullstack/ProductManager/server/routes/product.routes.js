const ProductController = require('../controllers/product.controller')

// TODO create CRUD routes
module.exports = (app) => {
    app.get('/api', ProductController.index)
    app.get('/api/products', ProductController.getAllProducts)
    app.get('/api/products/:id', ProductController.getOneProduct)
    app.post('/api/products', ProductController.newProduct)
    app.put('/api/products/:id', ProductController.updateProduct)
    app.delete('/api/products/:id', ProductController.deleteProduct)
}
