import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Hero from '@components/layout/hero.component';

const validationSchema = Yup.object({
  email: Yup.string().email('Must be a valid email').required('Required'),
  password: Yup.string()
    .min(6, 'Your password must be at least 6 characters long')
    .required('Required'),
  confirmPassword: Yup.string()
    .min(6, 'Your password must be at least 6 characters long')
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  acceptConditions: Yup.bool().oneOf(
    [true],
    'You must agree to the terms and conditions',
  ),
});

export default function SignUpPage() {
  return (
    <Hero navbar>
      <Breadcrumbs sx={{ my: 4 }}>
        <Link color="inherit" to="/" component={RouterLink}>
          Home
        </Link>
        <Typography color="text.primary">Sign up</Typography>
      </Breadcrumbs>
      <Typography variant="h3" component="h1" sx={{ color: 'primary.main' }}>
        Sign up
      </Typography>
      <Box sx={{ my: 2 }}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            acceptConditions: false,
          }}
          validationSchema={validationSchema}
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
              <TextField
                sx={{ my: 1 }}
                label="Confirm your password"
                name="confirmPassword"
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                error={errors.confirmPassword && touched.confirmPassword}
                helperText={
                  errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : null
                }
                type="password"
                fullWidth
              />
              <FormGroup sx={{ my: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.acceptConditions}
                      onChange={handleChange}
                      name="acceptConditions"
                    />
                  }
                  label="I agree to the terms and conditions"
                />
                {errors.acceptConditions && touched.acceptConditions ? (
                  <FormHelperText
                    error={errors.acceptConditions && touched.acceptConditions}
                  >
                    {errors.acceptConditions}
                  </FormHelperText>
                ) : null}
              </FormGroup>
              <Button variant="contained" size="large" onClick={handleSubmit}>
                Sign up
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Typography variant="body1">
        Already have an account?{' '}
        <Link to="/sign-in" component={RouterLink}>
          Sign in
        </Link>
      </Typography>
    </Hero>
  );
}
