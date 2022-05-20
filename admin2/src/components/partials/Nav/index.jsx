import React from 'react';
import { NavLink } from 'react-router-dom';
// import {  } from 'bootstrap-icons'

const routes = [
    { id: 1, title: 'Người dùng', 'link': '/admin/users', icon: 'bi-person-fill' },
    { id: 2, title: 'Danh mục', 'link': '/admin/categories', icon: 'bi-tag-fill' },
    { id: 3, title: 'Sản phẩm', 'link': '/admin/products', icon: 'bi-bag-fill' },
    { id: 4, title: 'Đơn đặt hàng', 'link': '/admin/orders', icon: 'bi-cart-check-fill' },
    { id: 5, title: 'Bình luận', 'link': '/admin/comments', icon: 'bi-reply-all-fill' },
]

function NavItem({ title, link, icon }) {
    return (
        <NavLink to={link} className={({ isActive }) =>
            ("text-decoration-none d-block px-2 mb-4 " + (isActive ? "text-success bg-light rounded-3" : "text-secondary"))}>
            <div className='d-flex align-items-center'>
                <i className={`bi ${icon} fs-4 py-2 pe-4`}></i>
                <p className='m-0 fw-bold '>{title}</p>
            </div >
        </NavLink>
    )
}

function Nav() {
    return (
        <nav className=''>
            {
                routes && routes.map(route => (
                    <NavItem key={route.id} title={route.title} link={route.link} icon={route.icon} />
                ))
            }
        </nav>
    )
}

export default Nav