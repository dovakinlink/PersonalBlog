module.exports = (webpackConfig) => {
  // FilenameHash
  webpackConfig.output.chunkFilename = '[name].[hash].js'
  // Alias
  webpackConfig.resolve.alias = {
    utils: `${__dirname}/src/utils`
  }

  return webpackConfig
}
