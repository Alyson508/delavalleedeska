/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'picsum.photos', 'res.cloudinary.com'],
  },
  // 🚀 Indique que ton code est dans /src
  distDir: '.next',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

module.exports = nextConfig