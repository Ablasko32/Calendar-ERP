const path = require("path");

module.exports = {
  entry: "./public/js/calendar.js", // Your entry point
  output: {
    filename: "bundle.js", // The name of the bundled file
    path: path.resolve(__dirname, "public/js"), // The output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to all JavaScript files
        exclude: /node_modules/, // Exclude dependencies in node_modules
        use: {
          loader: "babel-loader", // Use Babel to transpile JavaScript
          options: {
            presets: ["@babel/preset-env"], // Use the env preset to compile modern JavaScript
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"], // Resolve these file extensions
  },
  mode: "development", // Change to 'production' for optimized builds
};
