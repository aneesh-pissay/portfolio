import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    domains: ["lh3.googleusercontent.com", "noirly-calculator.aneesh-pissay.in"],
  },
};

export default nextConfig;
