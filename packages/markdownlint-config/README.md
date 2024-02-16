<!--
 * @Author: wly19891018 wly574523605@163.com
 * @Date: 2024-02-16 15:15:40
 * @LastEditors: wly19891018 wly574523605@163.com
 * @LastEditTime: 2024-02-16 16:03:13
 * @FilePath: \spec1.0\packages\markdownlint-config\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# wly19891018-fe-markdownlint-config

> wly19891018 文档 规范

支持配套的 [markdownlint 可共享配置](https://www.npmjs.com/package/markdownlint#optionsconfig)。

## 安装

需要先行安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
npm install wly19891018-fe-markdownlint-config markdownlint --save-dev
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
	"extends": "wly19891018-fe-markdownlint-config"
}
```
