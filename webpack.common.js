 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/js/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
       lang: 'en', // Add the lang attribute
       template: "./src/template.html",
     }),
   ],
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ],
  },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };