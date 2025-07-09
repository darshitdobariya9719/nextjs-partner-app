import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: [
    //   "dev-assets.channelboost.com",
    //   "d9e5riiwc0eyd.cloudfront.net",
    //   "www.gravatar.com",
    // ], // 👈 add the domain here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-assets.channelboost.com",
      },
      {
        protocol: "https",
        hostname: "d9e5riiwc0eyd.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "www.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "channelboost.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
