/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Old Mutual\'s Registry',
    description: 'A curated list of Old Mutual Workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://mantaray-rk.github.io/kasm-registry/',
    contactUrl: 'https://github.com/mantaray-rk/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
