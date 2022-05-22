import React from 'react';
import { Input, FormGroup, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

function FormikSelect({ form, field, label, items, ...rest }) {
    return (
        <FormGroup>
            <Label className='fw-bold'>{label}</Label>
            <Input {...field} {...rest} type="select">
                {items && items.map((item, index) => (
                    <option key={index} value={item.value}>{item.key}</option>
                ))}
            </Input>
            <ErrorMessage component={FormFeedback} name={field.name} />
        </FormGroup>
    )
}

export default FormikSelect