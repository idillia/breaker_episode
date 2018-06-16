const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: [
      './src/app.jsx',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          }
        }
      },
      {
        test: /(\.css)$/,
        use: [
          {loader: 'style-loader'},
          {loader:'css-loader'},
        ]
      },
      {
        test: /\.(css|scss)$/, 
        use: [
          MiniCssExtractPlugin.loader,  
          {loader: 'css-loader'}, 
          {loader: 'postcss-loader', options: {plugins: function () {return [require('precss'), require('autoprefixer')];}}}, 
          {loader: 'sass-loader', options: {includePaths: [path.join(__dirname, 'src/assets/styles')]}}]
      },  
      {test: /\.(eot|svg|ttf|woff|woff2)$/, use:[{loader: 'file-loader?name=public/fonts/[name].[ext]'}]},
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: [{
          loader: 'url-loader?',
          options: {
            limit: 'limit=100000&name=[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: '[name].css'})
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all' },
        styles: {
          name: 'mystyles',
          test: /\.(css|sass|scss)$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
};
 
module.exports = config;