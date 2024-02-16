/*
 * @Author: wly19891018 wly574523605@163.com
 * @Date: 2024-02-16 19:48:15
 * @LastEditors: wly19891018 wly574523605@163.com
 * @LastEditTime: 2024-02-16 19:57:10
 * @FilePath: \spec1.0\packages\commitlint-config\index.js
 * @Description: commitlint配置文件
 */
module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  /**
   * rules配置说明:
   * rule由name和配置数组组成，如：'name:[0, 'always', 72]'，
   * 第一位为condition，可选0,1,2，0为disable，1为warning，2为error，
   * 第二位为rule，可选always|never，一般根据官网规则上的rule来，
   *  always代表遵守该规则，never代表遵守该规则的非
   * 第三位为value，部分规则的value只有官网上的特定值可选，不能随便写。
   */
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']],
  },
};
