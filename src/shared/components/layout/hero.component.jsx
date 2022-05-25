import React from 'react';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

export default function Hero({ children, navbar, sx }) {
  return (
    <Container
      sx={[
        {
          w: 1,
          minHeight: navbar
            ? { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' }
            : 1,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Container>
  );
}

Hero.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  children: PropTypes.node,
  navbar: PropTypes.bool,
};

Hero.defaultProps = {
  children: null,
  sx: [],
  navbar: false,
};
