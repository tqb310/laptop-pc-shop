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

cartSchema.methods.concatCart = async function (cart) {
    if (cart.items && cart.items.length) {
        cart.items.forEach((cartItem, index) => {
            const dupItemIndex = this.items.findIndex(
                item =>
                    item.productId.equals(
                        cartItem.productId,
                    ),
            );
            if (dupItemIndex !== -1) {
                this.items[dupItemIndex].qty++;
            } else {
                this.items.push(cartItem);
            }
        });
        this.totalCost += cart.totalCost;
        this.totalQty += cart.totalQty;
        await this.save();
    }
};

module.exports = mongoose.model('cart', cartSchema);
