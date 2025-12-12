import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
    // Optimize images for better performance
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  // Enable compression
  compress: true,
  // Reduce bundle size
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  // Add headers for better caching
  async headers() {
    return [
      {
        source: "/data/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
