![](https://github.com/huzzbuzz/little-a-dashboard/blob/master/screenshot/logo-black.png) 
# Little A Dashboard           

[![DUB](https://img.shields.io/dub/l/vibe-d.svg)]()
![](https://img.shields.io/badge/language-javascript-orange.svg)
[![](https://travis-ci.org/huzzbuzz/little-a-dashboard.svg?branch=master)](https://travis-ci.org/huzzbuzz/little-a-dashboard)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

a little material-design dashboard build upon reactjs, ant design, dva.js.      
基于 react.js, ant design, dva.js 开发的类 material 风格的 dashboard。:laughing: :laughing: :laughing:         

### [Live Demo（演示）](http://huzzbuzz.coding.me/little-a-dashboard)       

> 技术栈：react、react-router、ant design、dva、roadhog...

## Quick Start 开始   


#### Clone 

    git clone https://github.com/huzzbuzz/little-a-dashboard.git

#### Install 

    cd little-a-dashboard
    npm i or yarn install

#### Run    
> before run this，you might need to installed roadhog cli with `npm i roadhog -g`
```bash
npm start
``` 
> it will automatically open http://localhost:8000

#### Build 
```bash
npm run build
``` 
> it will builds the app for production to the dist folder. your app is ready to be deployed.


## Already Done 特性
- [x] 类 material-ui 风格
- [x] 登录、退出、锁屏（模拟）
- [x] 主页及其他示例页
- [x] 菜单折叠、简单换肤
- [x] redux 完整使用示例
- [x] 动态路由，按需加载
- [x] 打包后，Filename Hash

## Further Plan 计划
- [x] Automatically select the menu based on the url
- [x] Responsive Sidebar
- [ ] Full RESTful API

## Screenshot 截图

#### Dashboard
![](https://github.com/huzzbuzz/little-a-dashboard/blob/master/screenshot/dashboard.gif)

#### Login
![](https://github.com/huzzbuzz/little-a-dashboard/blob/master/screenshot/login.gif)


#### Lock
![](https://github.com/huzzbuzz/little-a-dashboard/blob/master/screenshot/lock.gif)


#### alert
![](https://github.com/huzzbuzz/little-a-dashboard/blob/master/screenshot/alert.gif)


#### Charts
![](https://github.com/huzzbuzz/little-a-dashboard/blob/master/screenshot/charts.gif)


#### Table
![](https://github.com/huzzbuzz/little-a-dashboard/blob/master/screenshot/table.gif)


#### Sidebar
![](https://github.com/huzzbuzz/little-a-dashboard/blob/master/screenshot/sidebar.gif)


#### Responsive Sidebar
![](https://github.com/huzzbuzz/little-a-dashboard/blob/master/screenshot/responsive-sidebar.gif)


#### Setting
![](https://github.com/huzzbuzz/little-a-dashboard/blob/master/screenshot/setting.gif)


## Acknowledgements 致谢 

- [Ant Design](https://github.com/ant-design/ant-design)
- [Creative Tim](https://github.com/creativetimofficial)
- [Angular Material Dashboard](https://github.com/wangdicoder/angular-material-dashboard)
- [Antd Admin](https://github.com/zuiidea/antd-admin)


## Project Structure 结构

```bash
├── /dist/           # 打包输出
├── /mock/           # mock数据
├── /public/         # 公共文件
├── /src/            # 项目源码
│ ├── /components/  # UI组件
│ ├── /models/      # 数据模型
│ ├── /routes/      # 路由组件
│ │ └── app.js      # 入口
│ ├── /services/    # 数据接口
│ ├── /themes/      # 项目样式
│ ├── /utils/       # 工具函数
│ │ ├── config.js    # 项目配置
│ │ └── request.js   # 异步请求函数
│ ├── route.js      # 路由配置
│ ├── index.js      # 入口文件
│ └── index.html     
├── package.json     # 项目信息
├── .roadhogrc.js    # roadhog配置
├── .roadhogrc.mock.js # roadhog mock
├── theme.config.js  # 更改 ant 主题
└── webpack.config.js
```

## License

MIT

如果你喜欢，请 star 支持一下吧 :kissing_closed_eyes: :stuck_out_tongue_winking_eye:
