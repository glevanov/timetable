const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;


let conf = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options : { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [ require('autoprefixer')() ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new CssoWebpackPlugin()
  ]
};

module.exports = (env, options) => {
  let production = options.mode === 'production';

  conf.devtool = production
    ? false
    : 'eval-sourcemap';

  return conf;
};
