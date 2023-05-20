const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@mui/material"]);

const nextConfig = {
  reactStrictMode: true,
  env: {
    SPORT_CORE_URL: process.env.SPORT_CORE_URL,
  },
};

module.exports = withPlugins([withTM], nextConfig);
