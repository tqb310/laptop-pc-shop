import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Table, Button } from 'reactstrap';
import AddProductForm from '../../../components/shared/AddProductForm';
// import StatusPaper from '../../../components/shared/StatusPaper';

const products = [
    { id: 1, name: 'Laptop Gaming Asus ROG Strix G17 G713RW-LL157W', unitPrice: '35,000,000', quantity: 1, total: '35,000,000', createAt: '20/05/2022', deliveryStatus: false },
    { id: 2, name: 'Laptop Gaming Asus ROG Zephyrus G15 GA503RW', unitPrice: '35,000,000', quantity: 1, total: '35,000,000', createAt: '20/05/2022', deliveryStatus: false },
]

function AddProduct() {
    // const params = useParams();
    const navigate = useNavigate();
    const goBack = () => {
        navigate('..');
    }
    return (
        <div>
            <Button color='dark' onClick={goBack}>Trở lại</Button>
            <div className='bg-white mt-4 rounded-3 overflow-hidden p-4'>
                <AddProductForm />
            </div>
        </div>
    )
}

export default AddProduct