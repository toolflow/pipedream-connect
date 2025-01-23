const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "connect-react.umd.js",
    library: {
      name: "connect-react",
      type: "umd",
    },
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "@emotion/react": "@emotion/react",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
