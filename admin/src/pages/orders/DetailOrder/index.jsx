import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Table, Button } from 'reactstrap';
import StatusPaper from '../../../components/shared/StatusPaper';

const products = [
    { id: 1, name: 'Laptop Gaming Asus ROG Strix G17 G713RW-LL157W', unitPrice: '35,000,000', quantity: 1, total: '35,000,000', createAt: '20/05/2022', deliveryStatus: false },
    { id: 2, name: 'Laptop Gaming Asus ROG Zephyrus G15 GA503RW', unitPrice: '35,000,000', quantity: 1, total: '35,000,000', createAt: '20/05/2022', deliveryStatus: false },
]

function DetailOrder() {
    const params = useParams();
    const navigate = useNavigate();
    const goBack = () => {
        navigate('..');
    }
    return (
        <div>
            <Button color='dark' onClick={goBack}>Trở lại</Button>
            <div className='bg-white mt-4 rounded-3 overflow-hidden'>
                <div className='bg-success py-3 px-4 d-flex text-white'>
                    <div className=''>
                        <p>
                            <i className="bi bi-calendar3"></i>
                            <span className='ms-1'>20/05/2022</span>
                            <span className='ms-2'>5:55 PM</span>
                        </p>
                        <p className='m-0'>
                            Mã đơn hàng:
                            <span> {params.orderId}</span>
                        </p>
                    </div>
                    <div className='ms-auto'>
                        Change status
                    </div>
                </div>
                <div className='py-3 px-4 d-flex justify-content-between p-3'>
                    <div className='d-flex'>
                        <div className='bg-success align-self-start me-3 rounded-circle text-white text-center' style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
                            <i className="bi bi-person"></i>
                        </div>
                        <div>
                            <h6>Khách hàng</h6>
                            <p className='m-0'>Trần Quốc Khánh</p>
                            <a href='mailto:khanh123@gmail.com'>khanh123@gmail.com</a>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='bg-success align-self-start me-3 rounded-circle text-white text-center' style={{ width: '40px', height: '40px', lineHeight: '40px' }}><i className="bi bi-truck"></i></div>
                        <div>
                            <h6>Phương thức giao hàng</h6>
                            <p>Giao hàng nhanh</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='bg-success align-self-start me-3 rounded-circle text-white text-center' style={{ width: '40px', height: '40px', lineHeight: '40px' }}><i className="bi bi-geo-alt"></i></div>
                        <div>
                            <h6>Địa chỉ nhận</h6>
                            <p>Phường Linh Trung - TP.Thủ Đức </p>
                        </div>
                    </div>
                </div>
                <div className='p-3 d-flex'>
                    <Table size='lg' className='border'>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Sản phẩm
                                </th>
                                <th>
                                    Đơn giá (VND)
                                </th>
                                <th>
                                    Số lượng
                                </th>
                                <th className='text-end'>
                                    Tổng phí (VND)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.map((user, index) => (
                                <tr key={user.id}>
                                    <th className='py-3' scope="row">
                                        {index + 1}
                                    </th>
                                    <td className='py-3'>
                                        {user.name}
                                    </td>
                                    <td className='py-3'>
                                        {user.unitPrice}
                                    </td>
                                    <td className='py-3'>
                                        {user.quantity}
                                    </td>
                                    <td align='right' className='py-3'>
                                        {user.total}
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={5} align="right">
                                    <p><span className='fw-bold'>Phí vận chuyển: </span><span style={{ minWidth: '200px', display: 'inline-block' }}>30,000 đ</span></p>
                                    <p><span className='fw-bold'>Tổng cộng: </span><span style={{ minWidth: '200px', display: 'inline-block' }}>70,030,000 đ</span></p>
                                    <p><span className='fw-bold'>Trạng thái thanh toán: </span><span style={{ minWidth: '200px', display: 'inline-block' }}><StatusPaper title={"Đã thanh toán"} isRounded status={"success"} /></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className='ms-4 w-25 bg-light align-self-start py-2 px-3 border'>
                        <Button color='dark' className='w-100'>Đánh dấu đã giao</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailOrder