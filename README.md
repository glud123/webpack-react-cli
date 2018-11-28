## Webpack-React-CLI
> react 项目基础脚手架

### 基本功能 

- 单页应用（SPA）
- react 路由
- react-redux
- 按需加载
- less

### 基本命令

- 安装依赖

```
npm install
```

- 运行开发环境

```
npm run dev
```

- 代码构建

```
npm run build
```

### 目录结构说明

```
webpack-react-cli/
├── README.md                   
├── app.js                      //项目入口文件
├── config                      // webpack 配置文件夹
│   ├── webpack.common.js       // webpack 主要配置
│   ├── webpack.dev.js          // webpack 开发配置
│   └── webpack.product.js      // webpack 生产配置
├── index.html                  // 项目 HTML 模板
├── package.json                // 项目依赖清单
├── postcss.config.js           // postcss 配置
├── src                         // 项目开发文件夹
│   ├── assets                  // 静态资源文件夹
│   │   └── images              // 静态资源图片
│   │       └── favicon.ico     // favicon 图标
│   ├── components              // 公共组件文件夹    
│   │   └── Loading             // 示例公共组件 Loading
│   │       ├── index.js        // Loading 组件 js
│   │       └── index.less      // Loading 组件 less
│   ├── pages                   // 项目页面文件夹
│   │   ├── Home                // 示例页面 首页 
│   │   │   ├── index.js        // 首页 js
│   │   │   └── index.less      // 首页 less
│   │   └── Page1               // 示例页面 Page1
│   │       ├── index.js        // Page1 js
│   │       └── index.less      // Page1 less
│   ├── routes.js               // 项目路由
│   ├── store                   // 项目 store 文件夹 (请了解 react-redux)
│   │   ├── Home                // Home 页面 store
│   │   │   ├── action-type.js  // Home 页面 action-type 
│   │   │   ├── action.js       // Home 页面 action
│   │   │   └── reducer.js      // Home 页面 reducer
│   │   ├── Page1               // Page1 页面 store
│   │   │   ├── action-type.js  // Page1 页面 action-type
│   │   │   ├── action.js       // Page1 页面 action
│   │   │   └── reducer.js      // Page1 页面 reducer
│   │   ├── index.js            // store 
│   │   └── renameActionType.js // 为页面定义的 action-type 进行重命名，保证 action-type 唯一性
│   └── utils                   // 项目公共方法文件夹
└── webpack.config.js           // webpack 配置 入口文件
```