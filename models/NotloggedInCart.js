import ProductService from '../services/ProductService';

class NotLoggedInCartModel {
    constructor(cart) {
        this.items = cart.items || [];
        this.totalCost = cart.totalCost || 0;
        this.totalQty = cart.totalQty || 0;
    }

    get getItems() {
        const products = this.items.map(async item => {
            const product =
                await ProductService.getProductById(
                    item.productId,
                );
            return product;
        });

        return Promise.all(products);
    }

    concatCart(cart) {
        if (cart) {
            this.items = this.items.concat(cart.items);
            this.totalCost += cart.totalCost;
            this.totalQty += cart.totalQty;
        }
    }

    async add(product) {
        this.items.push(product);

        const productInDB =
            await ProductService.getProductById(
                product.productId,
            );
        this.totalCost +=
            product.qty * productInDB.discountedPrice;
        this.totalQty += product.qty;
    }

    delete(productId) {
        const index = this.items.findIndex(
            item => item.productId === productId,
        );

        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}

module.exports = NotLoggedInCartModel;
