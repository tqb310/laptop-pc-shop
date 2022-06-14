const ProductService = require('../../services/ProductService');
exports.homeRender = async (req, res) => {
    let promotedProducts = [
        {
            imgLink:
                'https://bizweb.dktcdn.net/100/329/122/products/laptop-msi-prestige-14-a11sc-203vn.png?v=1642654754000',
            title: 'Laptop MSI Prestige 14 A11SC-203VN (i7-1195G7, GTX 1650 4GB, Ram 16GB DDR4, SSD 512GB, 14 Inch IPS FHD)',
            discountedPrice: '24,290,000',
            originalPrice: '33,900,000',
            discount: 25,
        },
        {
            imgLink:
                'https://bizweb.dktcdn.net/100/329/122/products/laptop-hp-probook-430-g8-614k9pa.png?v=1649239194000',
            title: 'Laptop HP Probook 430 G8 614K9PA (i5-1135G7, Iris Xe Graphics, Ram 8GB, SSD 256GB, 13.3 Inch IPS FHD)',
            discountedPrice: '24,290,000',
            originalPrice: '33,900,000',
        },
        {
            imgLink:
                'https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-lenovo-yoga-slim-7-pro-14ihu5-o-82nh00aevn.png?v=1651221446000',
            title: 'Laptop MSI Prestige 14 A11SC-203VN (i7-1195G7, GTX 1650 4GB, Ram 16GB DDR4, SSD 512GB, 14 Inch IPS FHD)',
            discountedPrice: '24,290,000',
            originalPrice: '33,900,000',
        },
        {
            imgLink:
                'https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-lenovo-yoga-slim-7-pro-14ihu5-o-82nh00aevn.png?v=1651221446000',
            title: 'Laptop MSI Prestige 14 A11SC-203VN (i7-1195G7, GTX 1650 4GB, Ram 16GB DDR4, SSD 512GB, 14 Inch IPS FHD)',
            discountedPrice: '24,290,000',
            originalPrice: '33,900,000',
        },
        {
            imgLink:
                'https://bizweb.dktcdn.net/100/329/122/products/laptop-msi-prestige-14-a11sc-203vn.png?v=1642654754000',
            title: 'Laptop MSI Prestige 14 A11SC-203VN (i7-1195G7, GTX 1650 4GB, Ram 16GB DDR4, SSD 512GB, 14 Inch IPS FHD)',
            discountedPrice: '24,290,000',
            originalPrice: '33,900,000',
        },
        {
            imgLink:
                'https://bizweb.dktcdn.net/100/329/122/products/laptop-msi-prestige-14-a11sc-203vn.png?v=1642654754000',
            title: 'Laptop MSI Prestige 14 A11SC-203VN (i7-1195G7, GTX 1650 4GB, Ram 16GB DDR4, SSD 512GB, 14 Inch IPS FHD)',
            discountedPrice: '24,290,000',
            originalPrice: '33,900,000',
            discount: 15,
        },
    ];

    let product = await ProductService.getAllProduct();
    let productList = product.map(p => {
        return {
            imgLink: p.image[0],
            title: p.name,
            discountedPrice: p.discountedPrice,
            originalPrice: p.originalPrice,
            discount: 15,
            slug: p.slug,
            id: p._id,
        };
    });
    console.log(product);

    res.render('pages/home', {
        promotedProducts: productList,
    });
};
