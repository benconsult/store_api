const Product = require('../models/product')

const getAllProductsStatic = async (req,res)=>{
   const products = await Product.find({company:'marcos'})
    res.status(200).json({products, nbHits:Product.length})
}

const getAllProducts = async (req,res)=>{
    const {featured} = req.query
    const queryObject = {}
    if(featured){
        //set a new property in queryObject, object.property
        queryObject.featured = featured == 'true'? true : false
    }
    console.log(queryObject)
    const products = await Product.find(queryObject)
    res.status(200).json({ products, nbHits:Product.length})
}

module.exports = { getAllProducts, getAllProductsStatic }