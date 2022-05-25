import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '@/shared/components/layout/hero.component';

export default function NotFoundPage() {
  return (
    <Hero
      navbar
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" textAlign="center">
        <Box
          component="span"
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          404
        </Box>{' '}
        ERROR
      </Typography>
      <Typography variant="h5" textAlign="center">
        The page you are looking for does not exist
      </Typography>
      <Link to="/" component={RouterLink} sx={{ my: 2 }}>
        <Typography variant="h6">Go to home</Typography>
      </Link>
    </Hero>
  );
}
