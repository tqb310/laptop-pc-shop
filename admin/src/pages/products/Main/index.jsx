import React from 'react'
import ContentLayout from '../../../components/layout/ContentLayout';
import { Row, Col, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import './index.css';

const products = [
    { id: 1, title: 'Laptop Gaming Asus ROG Strix G17 G713RW-LL157W (Ryzen 7 6800H, RTX 3070 Ti 8GB, Ram 16GB DDR5, SSD 1TB, 17.3 Inch IPS 240Hz WQHD)', imgLink: 'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-rog-strix-g17-g713rw-ll157w.png?v=1652065532257', price: '54,990,000' },
    { id: 2, title: 'Laptop Gaming Asus ROG Zephyrus G15 GA503RW-LN100W (Ryzen 7 6800H, RTX 3070 Ti 8GB, Ram 32GB DDR5, SSD 1TB, 15.6 Inch IPS 240Hz WQHD)', imgLink: 'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-asus-rog-zephyrus-g15-ga503rw-ln100w.png?v=1652435877497', price: '60,990,000' },
    { id: 3, title: 'Laptop Gaming Asus ROG Zephyrus G15 GA503RW-LN100W (Ryzen 7 6800H, RTX 3070 Ti 8GB, Ram 32GB DDR5, SSD 1TB, 15.6 Inch IPS 240Hz WQHD)', imgLink: 'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-asus-rog-zephyrus-g15-ga503rw-ln100w.png?v=1652435877497', price: '60,990,000' },
    { id: 4, title: 'Laptop Gaming Asus ROG Zephyrus G15 GA503RW-LN100W (Ryzen 7 6800H, RTX 3070 Ti 8GB, Ram 32GB DDR5, SSD 1TB, 15.6 Inch IPS 240Hz WQHD)', imgLink: 'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-asus-rog-zephyrus-g15-ga503rw-ln100w.png?v=1652435877497', price: '60,990,000' },
    { id: 5, title: 'Laptop Gaming Asus ROG Zephyrus G15 GA503RW-LN100W (Ryzen 7 6800H, RTX 3070 Ti 8GB, Ram 32GB DDR5, SSD 1TB, 15.6 Inch IPS 240Hz WQHD)', imgLink: 'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-asus-rog-zephyrus-g15-ga503rw-ln100w.png?v=1652435877497', price: '60,990,000' },
    { id: 6, title: 'Laptop Gaming Asus ROG Strix G17 G713RW-LL157W (Ryzen 7 6800H, RTX 3070 Ti 8GB, Ram 16GB DDR5, SSD 1TB, 17.3 Inch IPS 240Hz WQHD)', imgLink: 'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-rog-strix-g17-g713rw-ll157w.png?v=1652065532257', price: '54,990,000' },
    { id: 7, title: 'Laptop Gaming Asus ROG Strix G17 G713RW-LL157W (Ryzen 7 6800H, RTX 3070 Ti 8GB, Ram 16GB DDR5, SSD 1TB, 17.3 Inch IPS 240Hz WQHD)', imgLink: 'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-rog-strix-g17-g713rw-ll157w.png?v=1652065532257', price: '54,990,000' },
    { id: 8, title: 'Laptop Gaming Asus ROG Strix G17 G713RW-LL157W (Ryzen 7 6800H, RTX 3070 Ti 8GB, Ram 16GB DDR5, SSD 1TB, 17.3 Inch IPS 240Hz WQHD)', imgLink: 'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-rog-strix-g17-g713rw-ll157w.png?v=1652065532257', price: '54,990,000' },
    { id: 9, title: 'Laptop Gaming Asus ROG Strix G17 G713RW-LL157W (Ryzen 7 6800H, RTX 3070 Ti 8GB, Ram 16GB DDR5, SSD 1TB, 17.3 Inch IPS 240Hz WQHD)', imgLink: 'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-rog-strix-g17-g713rw-ll157w.png?v=1652065532257', price: '54,990,000' },
    { id: 10, title: 'Laptop Gaming Asus ROG Strix G17 G713RW-LL157W (Ryzen 7 6800H, RTX 3070 Ti 8GB, Ram 16GB DDR5, SSD 1TB, 17.3 Inch IPS 240Hz WQHD)', imgLink: 'https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-rog-strix-g17-g713rw-ll157w.png?v=1652065532257', price: '54,990,000' },
]

function ProductItem({ title, imgLink, price }) {
    return (
        <div className='border p-2 shadow'>
            <figure>
                <img src={imgLink} alt={title} width="100%" />
            </figure>
            <p className='product-item__title text-secondary p-1'>{title}</p>
            <small className='fw-bold px-1'>{price}VND</small>
            <div className="product-item__actions d-flex mt-3">
                <Button color='primary' outline className='flex-grow-1'>Sửa</Button>
                <Button color='danger' outline className='flex-grow-1 ms-2'>Xóa</Button>
            </div>
        </div>
    )
}

function Products() {
    const navigate = useNavigate();
    const handleClick = e => {
        navigate('add');
    }
    return (
        <div>
            <ContentLayout title={"Sản phẩm"} btnLabel="Thêm sản phẩm" handleClick={handleClick}>
                <Row sm={4} className='g-3'>
                    {products && products.map((product, index) => (
                        <Col>
                            {<ProductItem title={product.title} imgLink={product.imgLink} price={product.price} />}
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-end'>
                    <Pagination>
                        <PaginationItem>
                            <PaginationLink
                                first
                                href="#"
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                previous
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                next
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                last
                            />
                        </PaginationItem>
                    </Pagination>
                </Row>
            </ContentLayout>
        </div>
    )
}

export default Products