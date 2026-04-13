import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  allowedDevOrigins: [
    '192.168.0.42',
    // Add other IPs as needed
  ]
  
};



export default nextConfig;
