/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: [
      "cdn-images-1.medium.com",
      "images.velog.io",
      "blogpfthumb-phinf.pstatic.net",
    ],
  },
};

module.exports = nextConfig;
