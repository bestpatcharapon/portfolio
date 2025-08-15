/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img2.pic.in.th',
        pathname: '/pic/**',
      },
      {
        protocol: 'https',
        hostname: 'img5.pic.in.th',
        pathname: '/file/**',
      },
    ],
  },
}

export default nextConfig
