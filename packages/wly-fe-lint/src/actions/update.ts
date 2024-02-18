/*
 * @Author: wly19891018 wly574523605@163.com
 * @Date: 2024-02-18 21:46:50
 * @LastEditors: wly19891018 wly574523605@163.com
 * @LastEditTime: 2024-02-18 22:41:10
 * @FilePath: \spec1.0\packages\wly-fe-lint\src\actions\update.ts
 * @Description: 检验更新
 */
import npmType from '../utils/npm-type';
import { PKG_NAME, PKG_VERSION } from '../utils/constants';
import log from '../utils/log'
import ora from 'ora';
import { execSync } from 'child_process';

/**
 * 检查最新版本号
 */
const checkLatestVersion = async (): Promise<string | null> => {
  const npm = await npmType;
  const latestVersion = execSync(`${npm} view ${PKG_NAME} version`).toString('utf-8').trim();
  if (latestVersion === PKG_VERSION) return null;
  const compareArr = PKG_VERSION.split('.').map(Number);
  const beCompareArr = latestVersion.split('.').map(Number);
  // x.y.z
  for (let i = 0; i < compareArr.length; i++) {
    if (compareArr[i] > beCompareArr[i]){
      return null;
    } else if (compareArr[i] < beCompareArr[i]){
      return latestVersion;
    }
  }
}

/**
 * 检查包的版本
 * @param install - 自动安装最新包
 */
export default async (install = true) => {
  const checking = ora(`[${PKG_NAME}] 正在检查最新版本...`);
  checking.start();

  try {
    const npm = await npmType;
    const latestVersion = await checkLatestVersion();
    checking.stop();

    if (latestVersion && install) {// 存在新版本时进行安装
      const update = ora(`[${PKG_NAME}] 存在新版本，将升级至 ${latestVersion}`);

      update.start();

      execSync(`${npm} i -g ${PKG_NAME}`);// 开启子进程进行安装

      update.stop();
    } else if (latestVersion) {// 存在新版本但不安装
      // 进行提示
      log.warn(
        `最新版本为 ${latestVersion}，本地版本为 ${PKG_VERSION}，请尽快升级到最新版本。\n你可以执行 ${npm} install -g ${PKG_NAME}@latest 来安装此版本\n`,
      );
    } else if (install) {
      log.info(`当前没有可用的更新`);
    }
  } catch (e) {
    checking.stop();
    log.error(e);
  }
};
