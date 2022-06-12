const mongoose = require('mongoose');
const ProductService = require('../services/ProductService');

const cartSchema = new mongoose.Schema(
    {
        items: [
            {
                productId: {
                    type: mongoose.SchemaTypes.ObjectId,
                    ref: 'Product',
                },
                qty: {
                    type: Number,
                    default: 0,
                },
            },
        ],
        totalQty: {
            type: Number,
            default: 0,
            required: true,
        },
        totalCost: {
            type: Number,
            default: 0,
            required: true,
        },
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true },
);

cartSchema.methods.addProduct = function (product) {
    ProductService.getProductById(product.productId).then(
        productDetail => {
            this.items.push(product);
            this.totalQty += product.qty;
            this.totalCost +=
                product.qty * productDetail.discountedPrice;
            this.save();
        },
    );
};

cartSchema.methods.concatCart = function (cart) {
    if (cart.items && cart.items) {
    }
};

module.exports = mongoose.model('cart', cartSchema);
