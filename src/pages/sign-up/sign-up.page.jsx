import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '@/shared/components/layout/hero.component';
import SignUpForm from './components/sign-up-form.component';

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
        <SignUpForm />
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
