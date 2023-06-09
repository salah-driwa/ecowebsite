module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.riv$/,
      use: {
        loader: "next-rive-loader",
      },
    });
    return config;
  },
};
