const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  performance : {
    hints : false
  },        
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, './'),
    filename: 'dist/bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'dist/images/[name].[ext]'
          } 
        }]
      },
      { 
        test: /\.less$/,
        use: [ 
            'style-loader',
            'css-loader', 
            'less-loader'
        ],
      },
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html'
    }),
  ]
};
