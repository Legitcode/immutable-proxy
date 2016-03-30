module.exports = {
  output: {
    library: 'ImmutableProxy',
    libraryTarget: 'umd'
  },
  externals: [
    {
      'ImmutableProxy': 'ImmutableProxy'
    }
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  node: {
    Buffer: false
  }
}