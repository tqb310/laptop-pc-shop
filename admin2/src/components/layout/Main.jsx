import React from 'react';
import Nav from '../partials/Nav';
import Header from '../partials/Header';
import Logo from '../../assets/images/logo.png';
import { Route, Routes, Navigate } from 'react-router-dom';
import Products from '../../pages/products/Main';
import Categories from '../../pages/categories';
import Users from '../../pages/users';
import AddProduct from '../../pages/products/Add';
import Comments from '../../pages/comments';
import DetailOrder from '../../pages/orders/DetailOrder';
import MainOrder from '../../pages/orders/Main';

function MainLayout() {
    return (
        <div>
            <div className='d-flex'>
                <div style={{ minWidth: '300px' }} className="p-3 border-end shadow-sm min-vh-100">
                    <figure className="bg-success rounded-3 p-3">
                        <img src={Logo} alt="Logo" width="100%" />
                    </figure>
                    <Nav />
                </div>
                <div className='flex-grow-1'>
                    <div>
                        <Header />
                    </div>
                    <div className='bg-light p-4 main__content'>
                        <Routes>
                            <Route path='/admin/users' element={<Users />} />
                            <Route path='/admin/categories' element={<Categories />} />
                            <Route path='/admin/products'>
                                <Route index element={<Products />} />
                                <Route path='add' element={<AddProduct />} />
                                <Route path='*' element={<Navigate to={'/admin/products'} />} />
                            </Route>
                            <Route path='/admin/orders' >
                                <Route index element={<MainOrder />} />
                                <Route path=":orderId" element={<DetailOrder />} />
                                <Route path="*" element={<Navigate to={"/admin/orders"} />} />
                            </Route>
                            <Route path='/admin/comments' element={<Comments />} />
                            <Route path='*' element={<Navigate to={'/admin/users'} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MainLayout