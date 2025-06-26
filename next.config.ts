import type { NextConfig } from "next";
import { tr } from "zod/v4/locales";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
