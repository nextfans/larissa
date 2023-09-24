/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['media.graphassets.com', 'ipdata.co', 'firebasestorage.googleapis.com', 'files.stripe.com'],
  },
  swcMinify: true
}

module.exports = nextConfig
