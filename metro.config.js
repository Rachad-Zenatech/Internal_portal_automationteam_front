// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Setup alias resolving for @/*
config.resolver.extraNodeModules = {
  ...(config.resolver.extraNodeModules || {}),
  "@": path.resolve(__dirname, "src"),
};

// Set Metro port to 8092
config.server = {
  ...config.server,
  port: 8092,
};

module.exports = config;
