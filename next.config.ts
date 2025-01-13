import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import type { NextConfig } from "next";

const setupPlatform = async () => {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
};

if (process.env.NODE_ENV === 'development') {
  setupPlatform();
}

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
