import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Must be a valid email').required('Required'),
  password: Yup.string()
    .min(6, 'Your password must be at least 6 characters long')
    .required('Required'),
});

export default function SignInForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      // onSubmit={(values) => doSomething(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form>
          <TextField
            sx={{ my: 1 }}
            label="Email"
            name="email"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email && touched.email}
            helperText={errors.email && touched.email ? errors.email : null}
            fullWidth
          />
          <TextField
            sx={{ my: 1 }}
            label="Password"
            name="password"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={errors.password && touched.password}
            helperText={
              errors.password && touched.password ? errors.password : null
            }
            type="password"
            fullWidth
          />
          <Button
            sx={{ my: 1 }}
            variant="contained"
            size="large"
            onClick={handleSubmit}
          >
            Sign up
          </Button>
        </Form>
      )}
    </Formik>
  );
}
