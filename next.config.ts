import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/addischarge",
  assetPrefix: "/addischarge",
  trailingSlash: true,
};

export default nextConfig;
