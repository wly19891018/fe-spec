/*
 * @Author: wly19891018 wly574523605@163.com
 * @Date: 2024-02-19 19:18:50
 * @LastEditors: wly19891018 wly574523605@163.com
 * @LastEditTime: 2024-02-19 22:54:53
 * @FilePath: \spec1.0\packages\wly-fe-lint\src\lints\stylelint\getStylelintConfig.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fs from 'fs-extra';
import glob from 'glob';
import path from 'path';
import { LinterOptions } from 'stylelint';
import type { Config, PKG, ScanOptions } from '../../types';
import { STYLELINT_IGNORE_PATTERN } from '../../utils/constants';

/**
 * 获取 Stylelint 配置
 */
export function getStylelintConfig(opts: ScanOptions, pkg: PKG, config: Config): LinterOptions {
  const { cwd, fix } = opts;
  if (config.enableStylelint === false) return {};
  const lintConfig: any = {
    fix: Boolean(fix),
    allowEmptyInput: true
  }

  if(config.stylelintOptions) {
    Object.assign(lintConfig, config.stylelintOptions);
  } else {
    // 扫描项目的目录中，有没有lintrc的规范文件，无则使用默认的lint配置
    const lintConfigFiles = glob.sync('.stylelintrc?(.@(js|yaml|yml|json))', { cwd });
    if(lintConfigFiles.length === 0 && !pkg.stylelint){
      lintConfig.config = {
        extends: 'stylelint-config-encode',
      };
    }
    // 根据扫描目录下的stylelintignore文件进行过滤，如果没有，按默认进行过滤
    const ignoreFilePath = path.resolve(cwd, '.stylelintignore');
    if (!fs.existsSync(ignoreFilePath)) {
      lintConfig.ignorePattern = STYLELINT_IGNORE_PATTERN;
    }
  }
  return lintConfig;
}
