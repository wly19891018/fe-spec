<!--
 * @Author: wly19891018 wly574523605@163.com
 * @Date: 2024-02-18 18:53:56
 * @LastEditors: wly19891018 wly574523605@163.com
 * @LastEditTime: 2024-02-18 18:59:58
 * @FilePath: \前端编码规范⼯程化\plugin-demo\README.md
 * @Description: 自定义eslint插件
-->
# wly-fe-eslint-plugin

## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
$ npm install wly-fe-eslint-plugin eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ['wly-fe-eslint-config'],
  rules: {
    'wly-fe-eslint-plugin/no-secret-info': 'error',
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: 'plugin:wly-fe-eslint-plugin/recommended',
};
```

## 支持的规则

- [`no-broad-semantic-versioning`](https://wly19891018.github.io/fe-spec/plugin/no-broad-semantic-versioning.html) 不要指定宽泛的版本范围
- [`no-http-url`](https://wly19891018.github.io/fe-spec/plugin/no-http-url.html) 使用 HTTPS 协议头的 URL，而不是 HTTP
- [`no-js-in-ts-project`](https://wly19891018.github.io/fe-spec/plugin/no-js-in-ts-project.html) 不要在 TS 项目中使用 JS
- [`no-secret-info`](https://wly19891018.github.io/fe-spec/plugin/no-secret-info.html) 不要在代码中直接设置 `password` `token` and `secret` 信息
