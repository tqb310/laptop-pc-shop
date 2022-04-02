const Category = require('../models/Category')

exports.addProductToCategory = async (categoryId, product)=>{
    const category = await Category.findById(categoryId)
    if(!category) return false;
    category.product.push(product)
    return true
}