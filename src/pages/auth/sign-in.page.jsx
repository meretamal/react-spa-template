import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Hero from '@/components/layout/hero.component';

const validationSchema = Yup.object({
  email: Yup.string().email('Must be a valid email').required('Required'),
  password: Yup.string()
    .min(6, 'Your password must be at least 6 characters long')
    .required('Required'),
});

export default function SignInPage() {
  return (
    <Hero navbar>
      <Breadcrumbs sx={{ my: 4 }}>
        <Link color="inherit" to="/" component={RouterLink}>
          Home
        </Link>
        <Typography color="text.primary">Sign in</Typography>
      </Breadcrumbs>
      <Typography variant="h3" component="h1" sx={{ color: 'primary.main' }}>
        Sign in
      </Typography>
      <Box sx={{ my: 2 }}>
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
      </Box>
      <Typography variant="body1">
        Don&apos;t have an account?{' '}
        <Link to="/sign-up" component={RouterLink}>
          Sign up
        </Link>
      </Typography>
    </Hero>
  );
}
