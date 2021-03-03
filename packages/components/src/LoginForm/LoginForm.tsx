import React, { ReactElement } from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import FormControl from '@material-ui/core/FormControl';

import * as SF from './LoginForm.style';


interface MyFormValues {
  firstName: string
  lastName: string
  email: string
  payment: number
}

interface FormErrors {
  email?: string
}

const LoginForm = (): ReactElement => {

  const initialValues: MyFormValues = { 
    firstName: '',
    lastName: '',
    email: '',
    payment: 0
  };

  return (
    <SF.StyledPaper elevation={6}>
      <SF.StyledFormWrapper>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors: FormErrors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address'
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            // isSubmiting,
  
          }) => (
            <Form translate="en" onSubmit={handleSubmit}>
              <SF.StyledTextField
              type="email"
              name="email"
              variant="outlined"
              id="outlined-basic"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              />
              
              <SF.StyledTextField
              type="text"
              variant="outlined"
              id="outlined-basic"
              name="firstName"
              label="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              />

              <SF.StyledTextField
              type="text"
              variant="outlined"
              id="outlined-basic"
              name="lastName"
              label="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              />

              <SF.StyledTextField
              type="number"
              variant="outlined"
              id="outlined-basic"
              name="payment"
              label="Payment"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.payment}
              />
            </Form>
          )}
        </Formik>
        <SF.StyledButton variant="contained">
          Click to Pay
        </SF.StyledButton>
      </SF.StyledFormWrapper>
    </SF.StyledPaper>
  )
}


export { LoginForm }
