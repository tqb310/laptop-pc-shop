const Product = require('../models/Product');

/**
 *
 * @param {*} categoryId find by category id. if there is no id, it will find all products
 * @returns list of product
 */
exports.getProductByCategoryId = async (
    categoryId = null,
) => {
    return (products = await Product.find(
        categoryId ? { category_id: categoryId } : {},
    ));
};

exports.getProductById = async id => {
    return (products = await Product.findById(id));
};

/**
 *
 * @param {*} categoryId Category id that product belong to
 * @param {*} product
 */
exports.addProductToCategory = async (
    categoryId,
    product,
) => {
    Product.create({
        category_id: categoryId,
        ...product,
    });
};

exports.updateProduct = async (id, option) => {
    Product.findByIdAndUpdate(id, option);
};
