const path = require('path');
const { ESLINT_MODES } = require('@craco/craco');

module.exports = {
  webpack: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },
  eslint: {
    mode: ESLINT_MODES.file,
  },
};
