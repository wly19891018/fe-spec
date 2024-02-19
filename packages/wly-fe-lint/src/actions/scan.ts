/*
 * @Author: wly19891018 wly574523605@163.com
 * @Date: 2024-02-19 19:12:01
 * @LastEditors: wly19891018 wly574523605@163.com
 * @LastEditTime: 2024-02-19 20:53:32
 * @FilePath: \spec1.0\packages\wly-fe-lint\src\actions\scan.ts
 * @Description: 扫描文档
 */

import fs from 'fs-extra';
import path, { resolve } from 'path';
import { doESLint, doMarkdownlint, doPrettier, doStylelint } from '../lints';
import type { Config, PKG, ScanOptions, ScanReport, ScanResult } from '../types';
import { PKG_NAME } from '../utils/constants';

export default async (options: ScanOptions): Promise<ScanReport> => {
  const { cwd, fix, outputReport, config: scanConfig} = options;
  
  const readConfigFile = (pth: string) => {
    const localPath = path.resolve(cwd, pth);
    return fs.existsSync(localPath) ? require(localPath) : {};
  }
  const pkg: PKG = readConfigFile('package.json');
  const config: Config = scanConfig || readConfigFile(`${PKG_NAME}.config.js`);
  let results: ScanResult[] = [];
  const runErrors: Error[] = [];

  // 如果配置了修复选项，先修复再检查
  
  if (fix && config.enablePrettier !== false) {
    // handler prettier
    try {
      doPrettier(options);
    } catch(e) {
      runErrors.push(e);
    }
  }
  
  if (config.enableESLint !== false) {
    // handler eslint
    try {
      const eslintResults = await doESLint({ ...options, pkg, config });
      results = results.concat(eslintResults);
    } catch(e) {
      runErrors.push(e);
    }
  }
  
  if (config.enableMarkdownlint !== false) {
    // handler markdownlint
    try {
      const markdownlintResults = await doMarkdownlint({ ...options, pkg, config });
      results = results.concat(markdownlintResults);
    } catch(e) {
      runErrors.push(e);
    }
  }
  
  if (config.enableStylelint !== false) {
    // handler stylelint
    try {
      const stylelintResults = await doStylelint({ ...options, pkg, config });
      results = results.concat(stylelintResults);
    } catch(e) {
      runErrors.push(e);
    }
  }

  // 生成报告报告文件
  if (outputReport) {
    const reportPath = path.resolve(process.cwd(), `./${PKG_NAME}-report.json`);
    fs.outputFile(reportPath, JSON.stringify(results, null, 2), () => {});
  }
  return {
    results,
    errorCount: results.reduce((count, { errorCount }) => count + errorCount, 0),
    warningCount: results.reduce((count, { warningCount }) => count + warningCount, 0),
    runErrors,
  };
}