/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["static.wikia.nocookie.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
// module.exports = {
//   images: {
//     formats: ["image/avif", "image/webp"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "assets.vercel.com",
//         port: "",
//         pathname: "/image/upload/**",
//       },
//     ],
//   },
// };
