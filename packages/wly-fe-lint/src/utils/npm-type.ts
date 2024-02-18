/*
 * @Author: wly19891018 wly574523605@163.com
 * @Date: 2024-02-18 21:48:08
 * @LastEditors: wly19891018 wly574523605@163.com
 * @LastEditTime: 2024-02-18 21:53:19
 * @FilePath: \spec1.0\packages\wly-fe-lint\src\utils\npm-type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { sync as commandExistSync } from 'command-exists';

const promise: Promise<'npm' | 'pnpm'> = new Promise((resolve) => {
  if (!commandExistSync('pnpm')) return resolve('pnpm');
  resolve('pnpm');
})

export default promise;