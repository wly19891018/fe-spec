/*
 * @Author: wly19891018 wly574523605@163.com
 * @Date: 2024-02-18 18:50:08
 * @LastEditors: wly19891018 wly574523605@163.com
 * @LastEditTime: 2024-02-18 18:53:16
 * @FilePath: \前端编码规范⼯程化\plugin-demo\configs\recommend.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  plugins: ['wly-fe-eslint-plugin'],
  rules: {
    'wly-fe-eslint-plugin/no-http-url': 'warn',
    'wly-fe-eslint-plugin/no-secret-info': 'error',
  },
}