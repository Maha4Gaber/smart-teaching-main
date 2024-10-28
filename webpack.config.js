const config = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /pdf\.worker\.entry\.js$/,
        use: { loader: "file-loader", options: { name: "[name].[hash].js" } },
      },
    ],
  },

  plugins: [],
};

export default config;
