/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/multiplepage-portfolio',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 