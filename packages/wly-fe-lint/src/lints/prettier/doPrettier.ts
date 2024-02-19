/*
 * @Author: wly19891018 wly574523605@163.com
 * @Date: 2024-02-19 19:18:50
 * @LastEditors: wly19891018 wly574523605@163.com
 * @LastEditTime: 2024-02-19 22:00:58
 * @FilePath: \spec1.0\packages\wly-fe-lint\src\lints\prettier\doPrettier.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fg from 'fast-glob';
import { readFile, writeFile } from 'fs-extra';
import { extname /* 后缀名 */, join } from 'path';
import prettier from 'prettier';
import { ScanOptions } from '../../types';
import { 
  PRETTIER_FILE_EXT, // 扫描文件扩展名
  PRETTIER_IGNORE_PATTERN //扫描忽略的文件或文件目录
} from '../../utils/constants';

export interface DoPrettierOptions extends ScanOptions {}

export async function doPrettier(options:DoPrettierOptions) {
  let files: string[] = [];
  if(options.files) {
    files = options.files.filter((name) => {
      return PRETTIER_FILE_EXT.includes(extname(name))
    });
  } else {
    const pattern = join(
      options.include,
      `**/*.{${PRETTIER_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: PRETTIER_IGNORE_PATTERN,
    });
  }

  await Promise.all(files.map(formatFile))
}

async function formatFile(filepath:string) {
  // prettier 处理
  const text = await readFile(filepath, 'utf-8');
  const options = await prettier.resolveConfig(filepath);
  const formatted = prettier.format(text, {...options, filepath})
  await writeFile(filepath, formatted, 'utf-8');
}