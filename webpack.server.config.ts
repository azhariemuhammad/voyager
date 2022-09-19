import path from "path";
import { merge } from "webpack-merge";
import sharedConfig from "./webpack.shared.config";
import nodeExternals from "webpack-node-externals";

import type { Configuration } from "webpack";
import { BannerPlugin } from "webpack";

const serverConfig: Configuration = {
  entry: "./server/index.ts",
  target: "node",
  devtool: "source-map",
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "build/server"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                exportOnlyLocals: true,
                exportLocalsConvention: "camelCase",
                localIdentName: "[local]_[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [],
};

export default merge(sharedConfig, serverConfig);
