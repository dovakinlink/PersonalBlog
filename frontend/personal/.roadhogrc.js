
let modulesProxy = {}
let host = "http://localhost:3000"

modulesProxy["/api"]={
  "target": `${host}/api`,
  "changeOrigin": true,
  "pathRewrite": {"^/api": ""}
}

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
  },
  "proxy": modulesProxy
}
