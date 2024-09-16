/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "api.microlink.io",
    ],
  },
};

export default nextConfig;
