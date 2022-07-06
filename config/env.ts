/*
 * @Description:
 * @Author: YUSHIJIE
 * @Date: 2022-07-06 15:49:44
 * @LastEditTime: 2022-07-06 15:57:09
 * @LastEditors: YUSHIJIE
 * @Usage:
 */
import * as fs from 'fs';
import * as path from 'path';

const isProd = process.env.NODE_ENV === 'production';

function parseEnv() {
  const localEnv = path.resolve('.env');
  const prodEnv = path.resolve('.env.prod');

  if (!fs.existsSync(localEnv)) {
    throw new Error('[Error] 缺少环境配置相关文件，请检查~');
  }

  const filePath = isProd && fs.existsSync(prodEnv) ? prodEnv : localEnv;

  return { path: filePath };
}

export default parseEnv();
