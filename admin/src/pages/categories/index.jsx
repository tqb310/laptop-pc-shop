import React from 'react'
import { Input, FormGroup, Form, Label, Button, Table } from 'reactstrap'

const categories = [
    { id: 1, categoryName: 'laptop', slug: 'laptop', },
    { id: 2, categoryName: 'Máy tính để bàn', slug: 'may-tinh-de-ban', },
]

function Categories() {
    return (
        <div>
            <div className='d-flex'>
                <h4>Danh mục</h4>
            </div>
            <div className='p-3 bg-white mt-3 shadow-sm'>
                <div className='d-flex'>
                    <FormGroup className='w-25 ms-auto' >
                        <Input type='text' placeholder='Tìm kiếm danh mục...' />
                    </FormGroup>
                </div>
                <div className='d-flex'>
                    <div className='px-4' style={{ width: '40%' }}>
                        <h6>Thêm danh mục</h6>
                        <Form>
                            <FormGroup>
                                <Label>Tên</Label>
                                <Input type='text' placeholder='Tên danh mục...' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Đường dẫn</Label>
                                <Input type='text' placeholder='Đường dẫn...'>Đường dẫn</Input>
                            </FormGroup>
                            <Button color='success'>Thêm danh mục</Button>
                        </Form>
                    </div>
                    <div className='flex-grow-1 px-4'>
                        <Table striped size='lg'>
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        Tên danh mục
                                    </th>
                                    <th>
                                        Đường dẫn
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories && categories.map((category, index) => (
                                    <tr key={category.id}>
                                        <th className='py-3' scope="row">
                                            {index + 1}
                                        </th>
                                        <td className='py-3'>
                                            {category.categoryName}
                                        </td>
                                        <td className='py-3'>
                                            {category.slug}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories