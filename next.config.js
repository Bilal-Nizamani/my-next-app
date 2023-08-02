// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// // next.config.js

// module.exports = {
//   images: {
//     domains: ['images.pexels.com'],
//   },
// };

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ...
  postcssLoaderOptions: {
    implementation: require('postcss'),
    plugins: [require('postcss-import')],
  },
  // ...


  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
