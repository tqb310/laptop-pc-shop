import React from 'react';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import { FormikInput, FormikSelect } from '../FormikField';
import { Row, Col, Input, FormGroup, Label, FormFeedback, Button } from 'reactstrap'

const initialValue = {
    category_id: '',
    name: '',
    url: '',
    detail: '',
    amount: 0,
    image: null,
    brand: '',
    model: '',
    configuration: {
        CPU: '',
        RAM: '',
        VGA: '',
        disk: '',
        monitor: '',
        OS: '',
        battery: '',
        weight: '',
        size: '',
        insurance: '',
    },
    discountedPrice: 0,
    originalPrice: 0,
}

function AddProductForm() {
    return (
        <Formik initialValues={initialValue}>
            {
                ({ values }) => {
                    console.log(values);
                    return (
                        <Form >
                            <Row>
                                <Col sm={4}>
                                    <FastField name='name' component={FormikInput} type='text' label="Tên sản phẩm" />
                                </Col>
                                <Col sm={4}>
                                    <FastField name='category_id' component={FormikSelect} label="Danh mục" items={[{ key: 'Asus', value: '0' }, { key: 'Dell', value: '1' },]} />
                                </Col>
                                <Col sm={4}>
                                    <FastField name='brand' component={FormikInput} type="text" label="Nhà sản xuất" />
                                </Col>
                                <Col sm={4}>
                                    <FastField name='model' component={FormikInput} type="text" label="Model" />
                                </Col>
                                <Col sm={2}>
                                    <FastField name='amount' component={FormikInput} type="number" label="Số lượng" />
                                </Col>
                                <Col sm={2}>
                                    <FastField name='url' component={FormikInput} type="url" label="Slug" />
                                </Col>
                                <Col sm={2}>
                                    <FastField name='originalPrice' component={FormikInput} type="number" label="Giá" />
                                </Col>
                                <Col sm={2}>
                                    <FastField name='discountedPrice' component={FormikInput} type="number" label="Giảm giá (%)" />
                                </Col>
                            </Row>
                            <Row sm={5}>
                                <Col>
                                    <FastField name='configuration.CPU' component={FormikInput} type="text" label="CPU" />
                                </Col>
                                <Col>
                                    <FastField name='configuration.RAM' component={FormikInput} type="text" label="RAM" />
                                </Col>
                                <Col>
                                    <FastField name='configuration.VGA' component={FormikInput} type="text" label="VGA" />
                                </Col>
                                <Col>
                                    <FastField name='configuration.disk' component={FormikInput} type="text" label="Ổ cứng" />
                                </Col>
                                <Col>
                                    <FastField name='configuration.monitor' component={FormikInput} type="text" label="Màn hình" />
                                </Col>
                                <Col>
                                    <FastField name='configuration.OS' component={FormikInput} type="text" label="Hệ điều hành" />
                                </Col>
                                <Col>
                                    <FastField name='configuration.battery' component={FormikInput} type="text" label="Pin" />
                                </Col>
                                <Col>
                                    <FastField name='configuration.weight' component={FormikInput} type="text" label="Khối lượng" />
                                </Col>
                                <Col>
                                    <FastField name='configuration.size' component={FormikInput} type="text" label="Kích thước" />
                                </Col>
                                <Col>
                                    <FastField name='configuration.insurance' component={FormikInput} type="text" label="Bảo hành" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <FastField name="image">
                                        {({ form, field }) => {
                                            const handleChange = e => {
                                                form.setFieldValue('image', e.currentTarget.files[0]);
                                            }
                                            return (
                                                <FormGroup>
                                                    <Label className='fw-bold'>Chọn ảnh sản phẩm</Label>
                                                    <Input name={field.name} type="file" onChange={handleChange} accept='image/*' />
                                                    <ErrorMessage component={FormFeedback} name={field.name} />
                                                </FormGroup>
                                            )
                                        }}
                                    </FastField>
                                </Col>
                                {values.image && <Col sm={4}>
                                    <img src={URL.createObjectURL(values.image)} alt="Hinh anh san pham" width={300} className='rounded-3' />
                                </Col>}
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <FastField name='detail' type='textarea' label='Mô tả' component={FormikInput} rows={3} />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2} className='offset-8'><Button type='submit' className='w-100' color='success'>Thêm</Button></Col>
                                <Col sm={2} className=''><Button type='reset' className='w-100' color='danger'>Hủy</Button></Col>
                            </Row>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default AddProductForm