const path = require('path');
const babelPresetEnv = require('@babel/preset-env');

module.exports = {
  entry: './tests/utils/test-server.js',
  target: 'node',
  output: {
    filename: 'bundled-server.js',
    path: path.resolve('tests/dist'),
  },
  mode: 'production',
  bail: false,
  resolve: {
    modules: ['node_modules'],
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [babelPresetEnv.default],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              publicPath: '../images/',
              name: '[name].[ext]?[contenthash]',
            },
          },
        ],
      },
    ],
  },
};
