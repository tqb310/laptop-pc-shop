import React from 'react'
import ContentLayout from '../../components/layout/ContentLayout';
import { Table } from 'reactstrap';

const users = [
    { id: 1, uname: 'bao123', name: 'Truong Quoc Bao', email: 'bao123@gmail.com', role: 'Quản trị' },
    { id: 2, uname: 'liem123', name: 'Dang Ngoc Liem', email: 'liem123@gmail.com', role: 'Quản trị' },
    { id: 3, uname: 'khachhang123', name: 'Tran Quoc Khanh', email: 'khanh123@gmail.com', role: 'Khách hàng' },
]

function User() {
    return (
        <>
            <ContentLayout title={"Người dùng"} btnLabel="Thêm người dùng" >
                <Table striped size='lg'>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Tên đăng nhập
                            </th>
                            <th>
                                Tên người dùng
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Vai trò
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user, index) => (
                            <tr key={user.id}>
                                <th className='py-3' scope="row">
                                    {index + 1}
                                </th>
                                <td className='py-3'>
                                    {user.uname}
                                </td>
                                <td className='py-3'>
                                    {user.name}
                                </td>
                                <td className='py-3'>
                                    {user.email}
                                </td>
                                <td className='py-3'>
                                    {user.role}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </ContentLayout>
        </>
    )
}

export default User