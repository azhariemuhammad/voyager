import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import tailwindcss from "tailwindcss";
import postcssPresetEnv from "postcss-preset-env";
import nodeExternals from "webpack-node-externals";

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import type { Configuration } from "webpack";
import { BannerPlugin } from "webpack";

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

const devServer: DevServerConfiguration = {
  static: path.join(__dirname, "build"),
  compress: true,
  port: 3000,
};

const config: Configuration = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "public/client.bundle.js",
  },
  devtool: "inline-source-map",
  plugins: [htmlPlugin, postcssPresetEnv, tailwindcss],
  devServer,
};

const serverConfig: Configuration = {
  entry: "./server/index.ts",
  target: "node",
  devtool: "source-map",
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],
};

export default [config, serverConfig];
