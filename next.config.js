/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/about': { page: '/about' },
    }
  },
  trailingSlash: true,
}

module.exports = nextConfig