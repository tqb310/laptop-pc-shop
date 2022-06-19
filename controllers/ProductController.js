const productService = require('../services/ProductService');

//[GET] '/product/:slug'
exports.getProductPage = async (req, res, next) => {
    // console.log(req.params.slug);
    let product = await productService.getProductBySlug(
        req.params.slug,
    );
    // console.log(product);
    res.render('pages/product', {
        slug: req.params.slug,
        product: product,
    });
};
