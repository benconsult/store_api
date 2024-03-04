const Product = require('../models/product')

const getAllProductsStatic = async (req,res)=>{
   //const products = await Product.find({})
   //const products = await Product.find({featured:true})
   const products = await Product.find({company:'marcos'})
    res.status(200).json({products, nbHits:Product.length})
}

const getAllProducts = async (req,res)=>{
    res.status(200).json({ msg:'product route'})
}

module.exports = { getAllProducts, getAllProductsStatic }