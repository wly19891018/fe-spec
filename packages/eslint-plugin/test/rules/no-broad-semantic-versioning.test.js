'use strict';

const rule = require('../../rules/no-broad-semantic-versioning');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-broad-semantic-versioning.test', rule, {
  valid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'wly-fe-eslint-plugin': '^0.0.5' },
      })}`,
    },
    {
      filename: 'package.js',
      code: 'var t = 1',
    },
  ],

  invalid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'wly-fe-eslint-plugin': '*' },
      })}`,
      errors: [
        {
          message: '"wly-fe-eslint-plugin"不推荐使用版本号为"*"的版本',
        },
      ],
    },
  ],
});
