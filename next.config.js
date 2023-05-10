/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    minimumCacheTTL: 60,
  },
  images: {
    domains: ['images.contentstack.io', 'ddragon.leagueoflegends.com', 'www.leagueoflegends.com'],
  },
}

module.exports = nextConfig
