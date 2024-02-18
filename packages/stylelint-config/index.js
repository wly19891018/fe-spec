/*
 * @Author: wly19891018 wly574523605@163.com
 * @Date: 2024-02-17 11:41:09
 * @LastEditors: wly19891018 wly574523605@163.com
 * @LastEditTime: 2024-02-17 20:25:04
 * @FilePath: \spec1.0\packages\stylelint-config\index.js
 * @Description: stylelint配置规则
 */
module.exports = {
  // 默认严重性
  defaultSeverity: "warning",
  // 插件集
  plugins: ['stylelint-scss'],
  // 规则
  rules: {
    /**
     * Possible errors
     * @link https://stylelint.io/user-guide/rules/#possible-errors
     */
    /**
     * 不允许未知规则
     * 已知规则，如：@charset @media 等可以使用
     */
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // 禁止空块
    'block-no-empty': null,
    // 禁止无效的十六进制颜色。可使用3、4、6、8位，内容为0~F的颜色码
    // 4位颜色码最后1位代表透明度、8位颜色码最后2位代表透明度
    'color-no-invalid-hex': true,
    // 禁止空注释。
    'comment-no-empty': true,
    // 禁止单块内容中出现重复属性
    'declaration-block-no-duplicate-properties': [
      true,
      {
        // 连续出现的同属性不同值可以忽略，方便实现浏览器兼容
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    // 禁止重写属性在简写属性之前
    'declaration-block-no-shorthand-property-overrides': true,
    // 禁止在字体族中使用重复的名称。
    'font-family-no-duplicate-names': true,
    // 作clac运算时，运算符前后不能没有空格
    'function-calc-no-unspaced-operator': true,
    // 禁止linear-gradient函数中使用不规范的方向值
    'function-linear-gradient-no-nonstandard-direction': true,
    // 禁止@keyframes声明中使用!important，在许多浏览器中该!important声明是无效的
    'keyframe-declaration-no-important': true,
    // 媒体查询时，禁止使用未知的媒体特性名称。
    'media-feature-name-no-unknown': true,
    // 禁止低权重选择器出现在高权重选择器之后
    'no-descending-specificity': null,
    // 禁止重复的@import规则
    'no-duplicate-at-import-rules': true,
    // 禁止重复的选择器
    'no-duplicate-selectors': true,
    // 禁止空源，内容为空，或只有\t\t和\n的文件，只有注释的不认为是空源
    'no-empty-source': null,
    // 禁止多余的分号
    'no-extra-semicolons': true,
    // 禁止无效的双斜杠注释。
    'no-invalid-double-slash-comments': true,
    // 禁止未知属性。
    'property-no-unknown': true,
    // 禁止使用未知的伪类选择器。
    'selector-pseudo-class-no-unknown': [
      true,
      {
        // 忽略检查的伪类
        ignorePseudoClasses: ['global', 'local', 'export'],
      },
    ],
    // 禁止使用未知的伪元素选择器。
    'selector-pseudo-element-no-unknown': true,
    // 禁止在字符串中使用换行符
    'string-no-newline': true,
    // 禁止使用未知的单位
    'unit-no-unknown': [
      true,
      {
        // 忽略检查的单位
        ignoreUnits: ['rpx'],
      },
    ],

    /**
     * Stylistic issues
     * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
     */
    // 缩进值
    indentation: 2,
    // 在多行块的右大括号之前需要换行
    'block-closing-brace-newline-before': 'always-multi-line',
    // 在单行块的右大括号之前需要一个空格
    'block-closing-brace-space-before': 'always-single-line',
    // 在多行块的左大括号之后需要一个换行符
    'block-opening-brace-newline-after': 'always-multi-line',
    // 选择器和 `{` 之间保留一个空格
    'block-opening-brace-space-before': 'always',
    // 在单行块的左大括号之后需要一个空格
    'block-opening-brace-space-after': 'always-single-line',
    // 十六进制值统一使用小写字母
    'color-hex-case': 'lower',
    // 使用尽可能短的十六进制值，eg：#ffffff书写为#fff。
    'color-hex-length': 'short',
    // 注释内容和注释符之间留有一个空格
    'comment-whitespace-inside': 'always',
    // 属性名和 `:` 之前无空格
    'declaration-colon-space-before': 'never',
    // `:` 和属性值之间保留一个空格
    'declaration-colon-space-after': 'always',
    // 属性声明应单独成行
    'declaration-block-single-line-max-declarations': 1,
    // 【强制】所有声明都应该以分号结尾，不能省略
    'declaration-block-trailing-semicolon': [
      'always',
      {
        // 严重等级为error
        severity: 'error',
      },
    ],
    // 长度值为 0 时，省略掉长度单位
    'length-zero-no-unit': [
      true,
      {
        // 忽略检查自定义属性中长度为零的单位
        ignore: ['custom-properties'],
      },
    ],
    // 单行代码最多不要超过 100 个字符
    'max-line-length': 100,
    // 不要使用 `id` 选择器
    'selector-max-id': 0,
    // 在使用 `,` 分隔的属性值中，`,` 之后保留一个空格
    'value-list-comma-space-after': 'always-single-line',

    /**
     * stylelint-scss rules
     * @link https://www.npmjs.com/package/stylelint-scss
     */
    // 要求//注释后有空格
    'scss/double-slash-comment-whitespace-inside': 'always',
  },
  // 忽略检查的文件:js、jsx、ts、tsx
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx']
}