/** @type {import('@remix-run/dev').AppConfig} */
export default {
  future: {},
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  server: "./server.ts",
  serverBuildPath: "build/server",
  publicPath: "/build/",
  assetsBuildDirectory: "public/build"
};
