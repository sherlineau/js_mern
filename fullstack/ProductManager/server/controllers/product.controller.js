const { Product } = require('../models/product.model')

// testing backend connection
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

// CREATE- Post a product to database
module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body
    Product.create({ title, price, description })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

// READ - get all products from database
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

// READ - get ONE product from database
module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

// UPDATE one product
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

// DELETE one product
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}