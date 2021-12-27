const path = require('path');
const withTM = require('next-transpile-modules')([
  'three',
  '@deck.gl/geo-layers',
  '@react-three/drei',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};
module.exports = withTM(nextConfig);
