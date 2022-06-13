const Product = require('../models/Product');

/**
 *
 * @returns list of product
 */
exports.getAllProduct = async () => {
    return await Product.find();
};
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

exports.getProductBySlug = async slug => {
    return (products = await Product.findOne({
        slug: slug,
    }));
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
