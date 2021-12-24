const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api/'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },
};
