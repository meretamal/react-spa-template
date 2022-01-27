import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleType } from '@store/modules/theme/theme.slice';

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const type = useSelector((state) => state.theme.type);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            React SPA Starter
          </Typography>
          <Box>
            <Button color="inherit" onClick={() => navigate('/sign-up')}>
              Sign up
            </Button>
            <Tooltip title="Toggle light/dark theme">
              <IconButton
                color="inherit"
                aria-label="toggle-theme"
                onClick={() => dispatch(toggleType())}
              >
                {type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
