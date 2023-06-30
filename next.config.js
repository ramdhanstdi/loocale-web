/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "http://localhost:5000",
      "localhost",
      "https://loocale.id",
      "https://api.loocale.id",
      "https://drive.google.com",
      "drive.google.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.loocale.id",
      },
      {
        protocol: "https",
        hostname: "loocale.id",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
