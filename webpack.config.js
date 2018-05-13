'use strict';

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }],
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        },
      },
      {
        test: /\.html$/,
        use: {
            loader: "html-loader"
        },
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
      historyApiFallback: true,
      contentBase: './',
      watchOptions: {
          ignored: "/node_modules/",
          aggregateTimeout: 300,
          poll: 1000
      }
  }
};
