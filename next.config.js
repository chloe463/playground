/** @type {import('next').NextConfig} */
module.exports = {
  productionBrowserSourceMaps: true,
  webpack: (config, _options) => {
    return config;
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    reactRemoveProperties: {
      properties: 
        process.env.NODE_ENV === "production" ? ['^data-cy$'] : []
    }
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    serverActions: true,
  },
};
