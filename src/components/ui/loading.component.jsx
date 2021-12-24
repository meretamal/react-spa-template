import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Backdrop
      open
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: '#fff' }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
