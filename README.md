# test

## file structure

### pages

- `main`

### components

- `foo`

### libs

- (none)

### images

- `images`
- `images/cdnurl.json`
- `images/history.json`

## how to start

### 初始化项目配置

- `package.json`: 个人信息、项目地址、关键字等
- `REM_UNIT` 配置：`src/main.js:1`、`gulpfile.js:14`
- `BASE_DPR` 配置：`gulpfile.js:13`

### 工程流程

- `tnpm install -g or-awp`: 安装 awp 发布工具
- `tnpm install`
- `gulp images`: 图片去重上传
- `gulp bundle`: 本地打包
- `gulp watch`: watch 本地打包
- `gulp build`: 运行 htmlone 打成一个请求到 `dist` 目录
- `awp`: 发布上线
