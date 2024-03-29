const TerserPlugin = require("terser-webpack-plugin");
const env = process.env.NODE_ENV;

module.exports = {
  configureWebpack: (config) => {
    if (env === "production") {
      // Terser config
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: undefined,
              warnings: false,
              parse: {},
              compress: { drop_console: true },
              mangle: true, // Note `mangle.properties` is `false` by default.
              module: false,
              output: { comments: false },
              toplevel: false,
              nameCache: null,
              ie8: false,
              keep_classnames: undefined,
              keep_fnames: false,
              safari10: false,
            },
          }),
        ],
      };
    }
  },
};
