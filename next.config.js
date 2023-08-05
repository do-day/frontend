/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'doday.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
      {
        source: '/signup',
        destination: '/',
        permanent: true,
      },
      {
        source: '/my/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/admin/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
