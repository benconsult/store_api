const Product = require('../models/product')

const getAllProductsStatic = async (req,res)=>{
   const products = await Product.find({company:'marcos'})
    res.status(200).json({products, nbHits:Product.length})
}

const getAllProducts = async (req,res)=>{
    const {featured, company} = req.query
    const queryObject = {}
    //if featured exists
    if(featured){
        queryObject.featured = featured == 'true'? true : false
    }
//if company exists in the query
    if(company){
        queryObject.company = company
    }
    console.log(queryObject)
    const products = await Product.find(queryObject)
    res.status(200).json({ products, nbHits: products.length})
}

module.exports = { getAllProducts, getAllProductsStatic }