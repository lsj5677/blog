/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // 사용하고자 하는 도메인 URL
        hostname: "images.unsplash.com",
      },
    ],
  },
};
export default nextConfig;
