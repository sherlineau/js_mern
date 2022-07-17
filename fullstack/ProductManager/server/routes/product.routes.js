const ProductController = require('../controllers/product.controller')

module.exports = function(app){
    app.get('/api/products', ProductController.getAllProducts)
    app.post('/api/products/new', ProductController.createProduct)
    app.get('/api/products/:id', ProductController.getOneProduct)
}