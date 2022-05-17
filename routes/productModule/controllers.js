const categoryService = require('../../services/CategoryService');
const productService = require('../../services/ProductService');

exports.pageRender = async (req, res) => {
    console.log(req.params);
    let category = await categoryService.getCategory({
        url: req.params.url,
    });
    let products = [
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
        },
    ];
    let viewed = products.slice(0, 5);
    let productList =
        await productService.getProductByCategoryId(
            category._id,
        );
    res.render('pages/category', {
        category: req.params.category,
        products: productList,
        viewed: viewed,
    });
};
