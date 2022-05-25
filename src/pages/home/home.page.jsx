import React from 'react';
import Typography from '@mui/material/Typography';
import Hero from '@/components/layout/hero.component';

export default function HomePage() {
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
      <Typography
        variant="h2"
        component="h1"
        textAlign="center"
        sx={{ color: 'primary.main' }}
      >
        React SPA Starter
      </Typography>
      <Typography variant="h4" textAlign="center">
        A React template with all the cool things you need
      </Typography>
    </Hero>
  );
}
