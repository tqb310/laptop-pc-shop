import React from 'react'
import { Input, FormGroup } from 'reactstrap'


function ContentLayout({ title, btnLabel, children, handleClick }) {

    return (
        <div>
            <div className='d-flex'>
                <h4>{title}</h4>
                {btnLabel && <button className="btn btn-success ms-auto" onClick={handleClick}>{btnLabel}</button>}
            </div>
            <div className='p-3 bg-white mt-4'>
                <div className='d-flex'>
                    <FormGroup className='w-50' >
                        <Input type='text' placeholder='Tìm kiếm...' />
                    </FormGroup>
                    <FormGroup className='ms-auto'>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option selected>
                                Chọn danh mục
                            </option>
                            <option>
                                Laptop
                            </option>
                            <option>
                                PC/ Máy bộ
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Input>
                    </FormGroup>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContentLayout