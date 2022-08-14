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
  // 이 설정들을 적용하면 ISR이 적용되지 않는다 -> 새로 빌드하는거 아니었나...?
  // async headers() {
  //   return [
  //     {
  //       source: "/rss",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "max-age=0, s-maxage=31536000",
  //         },
  //       ],
  //     },
  // {
  //   source: "/_next/image",
  //   headers: [
  //     {
  //       key: "Cache-Control",
  //       value: "max-age=3600",
  //     },
  //   ],
  // },
  // {
  //   source: "/assets",
  //   headers: [
  //     {
  //       key: "Cache-Control",
  //       value: "max-age=3600",
  //     },
  //   ],
  // },
  // ];
  // },
};

module.exports = nextConfig;
