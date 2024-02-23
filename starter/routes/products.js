const express = require('express')
const router = express.Router()

//import controller methods
const {getAllProducts, getAllProductsStatic } = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)

module.exports = router