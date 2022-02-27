const path = require('path');
const { ESLINT_MODES } = require('@craco/craco');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  eslint: {
    mode: ESLINT_MODES.file,
  },
};
