/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      "kadinle.com",
      "66.29.142.115",
      "media.kadinle.com",
      "lh3.googleusercontent.com",
      "png.pngtree.com",
      "*",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "kadinle.com",
      },  
      {
        protocol: "https",
        hostname: "cratic-home.com",
      },
      {
        protocol: "http",
        hostname: "cratic-home.com",
      },
      {
        protocol: "https",
        hostname: "cratic-home.com",
      },
      {
        protocol: "https",
        hostname: "cratic-home.com/api",
      },
      {
        protocol: "https",
        hostname: "kadinle.com/media/*",
      },
      { protocol: "https", hostname: "**" },

    ],
  },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.js"
);

module.exports = withNextIntl(nextConfig);
