
const getAllProductsStatic = (req,res)=>{
    res.status(200).json({ msg:'products testing routes'})
}

const getAllProducts = (req,res)=>{
    res.status(200).json({ msg:'product route'})
}

module.exports = { getAllProducts, getAllProductsStatic }