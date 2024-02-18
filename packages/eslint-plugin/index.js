/*
 * @Author: wly19891018 wly574523605@163.com
 * @Date: 2024-02-18 14:35:13
 * @LastEditors: wly19891018 wly574523605@163.com
 * @LastEditTime: 2024-02-18 15:15:17
 * @FilePath: \前端编码规范⼯程化\plugin-demo\index.js
 * @Description: 自定义eslint插件配置文件
 */
const path = require('path');
const requireAll = require('require-all');

exports.rules = requireAll({
  dirname: path.resolve(__dirname, 'rules'),
})

exports.configs = requireAll({
  dirname: path.resolve(__dirname, 'configs'),
})

exports.processors = {
  'json': {
    processors(test) {
      // 转为js文件
      return [`module.exports=${test}`]
    }
  }
}