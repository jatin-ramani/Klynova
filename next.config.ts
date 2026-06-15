import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themes.envytheme.com",
        pathname: "/startp/**",
      },
    ],
  },
};

export default nextConfig;
