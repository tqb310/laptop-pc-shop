//[GET] '/'
exports.getHomePage = (req, res, next) => {
    let products = [
        {
            imgLink:
                'https://bizweb.dktcdn.net/100/329/122/products/laptop-msi-prestige-14-a11sc-203vn.png?v=1642654754000',
            title: 'Laptop MSI Prestige 14 A11SC-203VN (i7-1195G7, GTX 1650 4GB, Ram 16GB DDR4, SSD 512GB, 14 Inch IPS FHD)',
            discountedPrice: 24290000,
            originalPrice: '33,900,000',
        },
        {
            imgLink:
                'https://bizweb.dktcdn.net/100/329/122/products/laptop-msi-prestige-14-a11sc-203vn.png?v=1642654754000',
            title: 'Laptop MSI Prestige 14 A11SC-203VN (i7-1195G7, GTX 1650 4GB, Ram 16GB DDR4, SSD 512GB, 14 Inch IPS FHD)',
            discountedPrice: 24290000,
            originalPrice: '33,900,000',
        },
        {
            imgLink:
                'https://bizweb.dktcdn.net/100/329/122/products/laptop-msi-prestige-14-a11sc-203vn.png?v=1642654754000',
            title: 'Laptop MSI Prestige 14 A11SC-203VN (i7-1195G7, GTX 1650 4GB, Ram 16GB DDR4, SSD 512GB, 14 Inch IPS FHD)',
            discountedPrice: 24290000,
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
    res.render('pages/home', {
        promotedProducts: products,
    });
};
