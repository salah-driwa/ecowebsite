module.exports = {
  webpack: (config) => {
    try {
      config.module.rules.push({
        test: /\.riv$/,
        use: {
          loader: "next-rive-loader",
        },
      });
    } catch (error) {
      // Swallow the error and do nothing
    }
    
    return config;
  },
};
