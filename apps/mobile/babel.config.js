// The hoisted preset cannot auto-detect Expo Router from this workspace package.
const { expoRouterBabelPlugin } = require("babel-preset-expo/build/expo-router-plugin");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [expoRouterBabelPlugin],
  };
};
