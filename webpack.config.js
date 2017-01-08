// http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/

var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          loader: "babel-loader",

          // Skip any files outside of your project's `src` directory
          include: [
            path.resolve(__dirname, "src"),
          ],

          // Only run `.js` and `.jsx` files through Babel
          test: /\.jsx?$/,

          // Options to configure babel with
          query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react'],
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        }
      ]
    }
};
