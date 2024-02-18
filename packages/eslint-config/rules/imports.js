/**
 * 本文件的规则由 eslint-plugin-import 提供
 * 与 eslint-plugin-import 推荐配置对齐
 * @see https://github.com/import-js/eslint-plugin-import
 * @see https://github.com/import-js/eslint-plugin-import/blob/main/config/recommended.js
 */

module.exports = {
  plugins: [
    'import',
  ],
  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    /**
     * Static analysis
     */

    // ensure imports point to files/modules that can be resolved
    // 确保导入指向可以解析的文件/模块
    'import/no-unresolved': 'error',

    // ensure named imports coupled with named exports
    // 确保导入导出的名称相匹配
    'import/named': 'error',

    // ensure default import coupled with default export
    // 确保默认导入与默认导出相匹配
    'import/default': 'error',

    // ensure imported namespaces contain dereferenced properties as they are dereferenced
    // 确保导入的不关联的命名空间之间不关联
    'import/namespace': 'error',

    /**
     * Helpful warnings
     */

    // disallow invalid exports, e.g. multiple defaults
    // 不允许不标准的导出，如多个默认值
    'import/export': 'error',

    // import 一个文件时，禁止 default import 的名字跟文件内的命名 export 相同
    'import/no-named-as-default': 'error',

    // 访问 default export 的属性时，如果该文件有与属性同名的命名 export，则给出警告
    'import/no-named-as-default-member': 'warn',

    // disallow use of jsdoc-marked-deprecated imports
    // 禁止使用jsdoc标记已启用的导入
    'import/no-deprecated': 'off',

    // Forbid the use of extraneous packages
    // 禁止使用无关的包
    'import/no-extraneous-dependencies': 'off',

    // Forbid mutable exports
    // 禁止可变的导出
    'import/no-mutable-exports': 'off',

    /**
     * Module systems
     */

    // Report potentially ambiguous parse goal (script vs. module)
    // 报告潜在的不明确的解析目标(脚本vs模块)
    'import/unambiguous': 'off',

    // disallow require()
    // 不允许使用require()
    'import/no-commonjs': 'off',

    // disallow AMD require/define
    // 不允许使用AMD require或define
    'import/no-amd': 'warn',

    // No Node.js builtin modules
    // 无Node.js内置模块
    'import/no-nodejs-modules': 'off',

    /**
     * Style guide
     */

    // import 语句需要放到模块的最上方
    // @unessential
    'import/first': 'error',

    // 不要用多个 import 引入同一模块
    'import/no-duplicates': 'error',

    // disallow namespace imports
    // 不允许命名空间导入
    'import/no-namespace': 'off',

    // Ensure consistent use of file extension within the import path
    // 确保在导入路径中使用相吻合的扩展名
    'import/extensions': 'off',

    // import 语句的排序
    'import/order': ['off', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'never',
    }],

    // 在最后一个 import / require 语句后保留一个空行
    'import/newline-after-import': 'warn',

    // 当模块内只有一个 export 时，使用 default export
    'import/prefer-default-export': 'off',

    // Restrict which files can be imported in a given folder
    // 限制在给定文件夹中可以导入哪些文件
    'import/no-restricted-paths': 'off',

    // Forbid modules to have too many dependencies
    // 禁止模块有太多的依赖项
    'import/max-dependencies': ['off', { max: 10 }],

    // Forbid import of modules using absolute paths
    // 禁止使用绝对路径导入模块
    'import/no-absolute-path': 'off',

    // Forbid require() calls with expressions
    // 禁止使用表达式调用require()
    'import/no-dynamic-require': 'off',

    // prevent importing the submodules of other modules
    // 禁止导入其他模块的子模块
    'import/no-internal-modules': ['off', {
      allow: [],
    }],

    // Forbid Webpack loader syntax in imports
    // 禁止在导入中使用Webpack loader语法
    'import/no-webpack-loader-syntax': 'off',

    // Prevent unassigned imports
    // importing for side effects is perfectly acceptable, if you need side effects.
    // 防止未分配的导入
    // 如果您需要副作用，那么为副作用导入是完全可以接受的。
    'import/no-unassigned-import': 'off',

    // 禁止 import { default as foo } from './foo.js'
    // 应写成 import foo from './foo.js'
    'import/no-named-default': 'off',

    // Reports if a module's default export is unnamed
    // 如果模块的默认导出未命名，进行报告
    'import/no-anonymous-default-export': ['off', {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],

    // This rule enforces that all exports are declared at the bottom of the file.
    // 该规则强制在文件底部声明所有导出。
    'import/exports-last': 'off',

    // Prefer named exports to be grouped together in a single export declaration
    // 在单一的导出声明中，成组的提升到一个导出中
    'import/group-exports': 'off',

    // forbid default exports. this is a terrible rule, do not use it.
    // 禁止默认导出。这是一个可怕的规则，不要使用它
    'import/no-default-export': 'off',

    // 不要产生自引用
    'import/no-self-import': 'error',

    // 不要产生循环引用
    'import/no-cycle': ['error', { maxDepth: Infinity }],

    // Ensures that there are no useless path segments
    // 确保没有无用的路径
    'import/no-useless-path-segments': 'off',

    // dynamic imports require a leading comment with a webpackChunkName
    // 动态导入需要一个带webpackChunkName的前导注释
    'import/dynamic-import-chunkname': ['off', {
      importFunctions: [],
      webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
    }],

    // Use this rule to prevent imports to folders in relative parent paths.
    // 使用此规则可以防止导入文件夹到相对父路径中。
    'import/no-relative-parent-imports': 'off',
  },
};
