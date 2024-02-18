'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://www.aaa.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://www.aaa.com';",
      output: "var test = 'http://www.aaa.com';",
      errors: [
        {
          message: '建议 "http://www.aaa.com" 转换为 HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://www.aaa.com' />",
      output: "<img src='http://www.aaa.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: '建议 "http://www.aaa.com" 转换为 HTTPS',
        },
      ],
    },
  ],
});
