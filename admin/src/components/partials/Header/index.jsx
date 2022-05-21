import React from 'react';
// import { Input } from 'reactstrap';
import './index.css';

function Header() {
    return (
        <header className='header border-bottom shadow-sm d-flex align-items-center px-4'>
            <div className='w-25'>
                {/* <Input className='form-input' type="text" placeholder="Tìm kiếm..." /> */}
            </div>
            <div className='header__profile ms-auto d-flex align-items-center'>
                <div className='header__profile-avatar rounded-circle border border-success'><i className={`bi bi-person-fill fs-5 text-success`}></i></div>
                <div className="header__profile-name ms-2">
                    <i className="bi bi-caret-down-fill text-secondary ms-1"></i>
                </div>
            </div>
        </header>
    )
}

export default Header