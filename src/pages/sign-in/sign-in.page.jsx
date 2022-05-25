import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '@/shared/components/layout/hero.component';
import SignInForm from './components/sign-in-form.component';

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
        <SignInForm />
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
