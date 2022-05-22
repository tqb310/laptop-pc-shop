import React from 'react';
import { Input, FormGroup, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

function FormikInput({ form, field, label, ...rest }) {
    return (
        <FormGroup>
            <Label className='fw-bold'>{label}</Label>
            <Input {...field} {...rest} />
            <ErrorMessage component={FormFeedback} name={field.name} />
        </FormGroup>
    )
}

export default FormikInput