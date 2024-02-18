const rule = require('../../rules/no-js-in-ts-project');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-js-in-ts-project', rule, {
  valid: [
    // ts文件
    {
      filename: 'index.ts',
      code: '',
    },
    // 默认白名单
    {
      filename: '.stylelintrc.js',
      code: '',
    },
    // 合并白名单
    {
      filename: 'config.js',
      options: [
        {
          whiteList: ["config.js"],
          autoMerge: true
        }
      ],
      code: ''
    },
    // ts文件
    {
      filename: 'home.ts',
      code: '',
    },
  ],

  invalid: [
    // 使用传入白名单
    {
      filename: '.stylelintrc.js',
      options: [
        {
          whiteList: ["config.js"],
          autoMerge: false
        }
      ],
      code: '',
      errors: [
        {
          message: 'The ".stylelintrc.js" is not recommended in TS project',
        },
      ],
    },
    // 不符合白名单的js文件
    {
      filename: 'home.js',
      code: '',
      errors: [
        {
          message: 'The "home.js" is not recommended in TS project',
        },
      ],
    },
  ],
});
