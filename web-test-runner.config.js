const { fromRollup } = require('@web/dev-server-rollup')
const rollupPostcss = require('rollup-plugin-postcss')
const postcss = fromRollup(rollupPostcss)

module.exports = {
  watch: true,
  preserveSymlinks: true,
  nodeResolve: true,
  files: [
    './packages/__tests__/tsc/datelib/formatting-api.js',
  ],
  mimeTypes: {
    '**/*.css': 'js', // tell the server to serve css files as js
  },
  plugins: [
    postcss({ inject: true }), // js will inject styles into page
  ],
};
