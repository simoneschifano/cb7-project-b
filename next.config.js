/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
  @import "./src/styles/variables/colors.scss";
  @import "./src/styles/variables/helpers.scss";
  `,
  },
};

module.exports = nextConfig;
