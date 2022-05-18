const Category = require('../models/Category');

/**
 *
 * @param {*} option filter. Ex: {name: "1234"}
 * @returns An array of Category
 */
exports.getAllCategory = async (option = {}) => {
    return await Category.find(option);
};

/**
 *
 * @param {*} option filter. Ex: {name: "1234"}
 * @returns A Category
 */
exports.getCategory = async (option = {}) => {
    return await Category.findOne(option);
};

/**
 *
 * @param {*} option option update. Ex: {name: "1234"}
 * @returns New Category
 */
exports.createCategory = async (option = {}) => {
    const newCategory = new Category(option);
    await newCategory.save();
    return newCategory;
};

/**
 *
 * @param {*} id Category id for update
 * @param {*} option option update. Ex: {name: "1234"}
 * @returns Updated Category
 */
exports.updateCategory = async (id, option = {}) => {
    const newCategory = await Category.findOneAndUpdate(
        { _id: id },
        option,
    );
    return newCategory;
};

/**
 *
 * @param {*} id Category id for delete
 */
exports.deleteCategoryById = async id => {
    await Category.findOneAndDelete({ _id: id });
};

/**
 *
 * @param {*} option filter. Ex: {name: "1234"}
 */
exports.deleteCategory = async (option = {}) => {
    await Category.deleteMany(option);
};
