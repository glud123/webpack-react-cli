## Webpack-React-CLI
> react 项目基础脚手架

### 基本功能 

- react 路由
- react-redux
- 按需加载

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
├── app.js
├── config
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.product.js
├── index.html
├── package.json
├── postcss.config.js
├── src
│   ├── assets
│   │   └── images
│   │       └── favicon.ico
│   ├── components
│   │   └── Loading
│   │       ├── index.js
│   │       └── index.less
│   ├── pages
│   │   ├── Home
│   │   │   ├── index.js
│   │   │   └── index.less
│   │   └── Page1
│   │       ├── index.js
│   │       └── index.less
│   ├── routes.js
│   ├── store
│   │   ├── Home
│   │   │   ├── action-type.js
│   │   │   ├── action.js
│   │   │   └── reducer.js
│   │   ├── Page1
│   │   │   ├── action-type.js
│   │   │   ├── action.js
│   │   │   └── reducer.js
│   │   ├── index.js
│   │   └── renameActionType.js
│   └── utils
└── webpack.config.js
```