import React from 'react'
import ContentLayout from '../../../components/layout/ContentLayout';
import { Table, Button } from 'reactstrap';
import StatusPaper from '../../../components/shared/StatusPaper';
import { useNavigate } from 'react-router-dom';

const users = [
    { id: 1, name: 'Truong Quoc Bao', email: 'bao123@gmail.com', total: '35,000,000', paid: true, createAt: '20/05/2022', deliveryStatus: false },
    { id: 2, name: 'Dang Ngoc Liem', email: 'liem123@gmail.com', total: '35,000,000', paid: false, createAt: '20/05/2022', deliveryStatus: false },
    { id: 3, name: 'Tran Quoc Khanh', email: 'khanh123@gmail.com', total: '35,000,000', paid: false, createAt: '20/05/2022', deliveryStatus: true },
]

function MainOrder() {
    const navigate = useNavigate();
    const navigateToDetail = orderId => e => {
        navigate(orderId.toString());
    }
    return (
        <>
            <ContentLayout title={"Đơn hàng"}>
                <Table striped size='lg'>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Khách hàng
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Ngày lập
                            </th>
                            <th>
                                Tổng phí (VND)
                            </th>
                            <th>
                                Trạng thái thanh toán
                            </th>
                            <th>
                                Trạng thái giao hàng
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user, index) => (
                            <tr key={user.id}>
                                <th className='py-3' scope="row">
                                    {index + 1}
                                </th>
                                <td className='py-3'>
                                    {user.name}
                                </td>
                                <td className='py-3'>
                                    {user.email}
                                </td>
                                <td className='py-3'>
                                    {user.createAt}
                                </td>
                                <td className='py-3'>
                                    {user.total}
                                </td>
                                <td className='py-3'>
                                    <StatusPaper title={user.paid ? 'Đã thanh toán' : 'Chưa thanh toán'} isRounded status={user.paid ? 'success' : 'danger'} />
                                </td>
                                <td className='py-3'>
                                    <StatusPaper title={user.deliveryStatus ? 'Đã giao' : 'Chưa giao'} status={user.deliveryStatus ? 'successDeliveried' : 'dangerDeliveried'} />
                                </td>
                                <td className='py-3'>
                                    <Button color='primary' outline onClick={navigateToDetail(user.id)}>
                                        <i class="bi bi-pencil-fill"></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </ContentLayout>
        </>
    )
}

export default MainOrder