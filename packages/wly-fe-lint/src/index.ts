/*
 * @Author: wly19891018 wly574523605@163.com
 * @Date: 2024-02-18 20:45:29
 * @LastEditors: wly19891018 wly574523605@163.com
 * @LastEditTime: 2024-02-18 23:22:46
 * @FilePath: \spec1.0\packages\wly-fe-lint\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import initAction from './actions/init';
import type { InitOptions } from './types';

type IInitOptions = Omit<InitOptions, 'checkVersionUpdate'>;

export const init = async (options: IInitOptions) => {
  return await initAction({
    ...options,
    checkVersionUpdate: false,
  });
};