import React from 'react'
import ContentLayout from '../../components/layout/ContentLayout';
import {
    Table,
    UncontrolledPopover,
    PopoverHeader,
    PopoverBody,
    Button,
    Input
} from 'reactstrap'

const comments = [
    { id: 1, name: 'Truong Quoc Bao', email: 'bao123@gmail.com', comment: 'test comment', productLink: '#', productName: 'Laptop', createAt: '20/05/2022' },
    { id: 2, name: 'Dang Ngoc Liem', email: 'liem123@gmail.com', comment: 'test comment', productLink: '#', productName: 'Laptop', createAt: '20/05/2022' },
    { id: 3, name: 'Tran Quoc Khanh', email: 'khanh123@gmail.com', comment: 'test comment', productLink: '#', productName: 'Laptop', createAt: '20/05/2022' },
]

function Comment() {
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener('click', openPopover(false))
    }, [])
    const openPopover = isOpen => e => {
        setOpen(isOpen);
    }
    return (
        <div>
            <ContentLayout title={"Bình luận"}>
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
                                Bình luận
                            </th>
                            <th>
                                Sản phẩm
                            </th>
                            <th>
                                Đã đăng vào
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments && comments.map((comment, index) => (
                            <tr key={comment.id}>
                                <th className='py-3' scope="row">
                                    {index + 1}
                                </th>
                                <td className='py-3'>
                                    {comment.name}
                                </td>
                                <td className='py-3'>
                                    {comment.email}
                                </td>
                                <td className='py-3'>
                                    {comment.comment}
                                </td>
                                <td className='py-3'>
                                    <a href={comment.productLink}>{comment.productName}</a>
                                </td>
                                <td className='py-3'>
                                    {comment.createAt}
                                </td>
                                <td>
                                    <Button
                                        id="Popover1"
                                        type="button"
                                        color='primary'
                                        outline
                                    >
                                        <i className="bi bi-reply-fill"></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </ContentLayout>
            <div>
                <UncontrolledPopover
                    target="Popover1"
                    isOpen={open}
                    toggle={openPopover(!open)}
                    placement="bottom"
                    onClick={(e) => { e.stopPropagation() }}

                >
                    <PopoverHeader>
                        Trả lời
                    </PopoverHeader>
                    <PopoverBody>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                            rows="6"
                        />
                        <Button className='mt-3 w-100' color='success'>Trả lời</Button>
                    </PopoverBody>
                </UncontrolledPopover>
            </div>
        </div>
    )
}

export default Comment