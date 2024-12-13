/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost', 'bonuskingdoms.com']
  },
  output: 'standalone',
  distDir: '.next',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    })
    return config
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=60'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig