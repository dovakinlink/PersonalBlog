export default {
  "entry": "src/index.js",
  "theme": "./theme.config.js",
  "env": {
      "development": {
        "extraBabelPlugins": [
          "transform-runtime",
  		    ["import", { "libraryName": "antd", "style": true }],
        ]
      },
      "production": {
        "extraBabelPlugins": [
          "transform-runtime",
  		    ["import", { "libraryName": "antd", "style": true}],
        ]
      }
  }
}
