/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['gsap']);
const nextConfig = {
  experimental: {
    appDir: true,
  },
};
module.exports = withTM();
module.exports = nextConfig;
