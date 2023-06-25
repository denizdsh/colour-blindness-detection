/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dh5nu1zga/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
