import path from "path";

import { merge } from "webpack-merge";
import type { Configuration } from "webpack";
import Dotenv from "dotenv-webpack";

const config: Configuration = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
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
            plugins: [
              "transform-commonjs-es2015-modules",
              "@babel/plugin-transform-runtime",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new Dotenv({
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false,
      path: path.resolve(__dirname, ".env"),
      ignoreStub: false,
    }),
  ],
};

export default merge(config);
