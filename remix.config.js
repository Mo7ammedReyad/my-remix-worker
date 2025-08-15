/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_routeConvention: true
  },
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  server: "./server.js",
  serverBuildPath: "build/index.js",
  publicPath: "/build/",
  assetsBuildDirectory: "public/build"
};