// const devServerEsbuild = require("@web/dev-server-esbuild");

module.exports = {
  watch: true,
  preserveSymlinks: true,
  nodeResolve: true,
  rootDir: "./",
  files: [
    // "./*/__tests__/src/**/*.ts"
    "./packages/__tests__/tsc/datelib/formatting-api.js"
  ]
  // plugins: [
  //   devServerEsbuild.esbuildPlugin({ ts: true })
  // ]
};
