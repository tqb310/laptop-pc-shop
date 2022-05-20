import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Input, Button } from 'reactstrap';

const products = [
    { id: 1, name: 'Laptop Gaming Asus ROG Strix G17 G713RW-LL157W', unitPrice: '35,000,000', quantity: 1, total: '35,000,000', createAt: '20/05/2022', deliveryStatus: false },
    { id: 2, name: 'Laptop Gaming Asus ROG Zephyrus G15 GA503RW', unitPrice: '35,000,000', quantity: 1, total: '35,000,000', createAt: '20/05/2022', deliveryStatus: false },
]

function AddProduct() {
    const params = useParams();
    const navigate = useNavigate();
    const goBack = () => {
        navigate('..');
    }
    return (
        <div>
            <h4></h4>
        </div>
    )
}

export default AddProduct