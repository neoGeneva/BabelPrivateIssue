module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts"],
  },
  entry: {
    test: "./test.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/typescript"],
          plugins: ["@babel/transform-classes"],
        },
      },
    ],
  },
};
