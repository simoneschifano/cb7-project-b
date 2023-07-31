/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
  @import "./src/styles/variables/colors.scss";
  `,
  },
};

module.exports = nextConfig;
