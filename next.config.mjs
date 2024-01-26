/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "youtu.be",
        protocol: "https",
      },
      {
        hostname: "i.ytimg.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
