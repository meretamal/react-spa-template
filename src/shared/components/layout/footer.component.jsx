import React from 'react';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography align="center" variant="h6" gutterBottom>
        React SPA Starter
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Typography align="center" variant="h6">
            Moisés Retamal
          </Typography>
        </Grid>
        <Grid item>
          <Link href="https://github.com/meretamal" color="textPrimary">
            <GitHubIcon />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
