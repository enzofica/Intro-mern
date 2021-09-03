const express = require('express')
const upload = require('../libs/storage')
const{addProduct, getProduct} = require('../controllers/productCotroller')
const api = express.Router()

api.post('/product', upload.single('image'), addProduct)
api.get('/product', getProduct)

module.exports = api