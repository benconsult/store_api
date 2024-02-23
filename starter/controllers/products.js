
const getAllProductsStatic = async (req,res)=>{
    throw new Error('tesing async error')
    res.status(200).json({ msg:'products testing routes'})
}

const getAllProducts = async (req,res)=>{
    res.status(200).json({ msg:'product route'})
}

module.exports = { getAllProducts, getAllProductsStatic }