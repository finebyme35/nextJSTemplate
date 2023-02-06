/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  // assetPrefix: isProd ? "/dashboard/" : "",
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
}

module.exports = nextConfig
