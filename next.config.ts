import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  allowedDevOrigins: [
    '192.168.0.42',
  ],

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },

  compress: true,
};



export default nextConfig;
