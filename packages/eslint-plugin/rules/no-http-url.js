const RULE_NAME = 'no-http-url';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    fixable: null,
    messages: {
      noHttpUrl: '建议 "{{url}}" 转换为 HTTPS',
    },
  },
  create(context) {
    return {
      Literal: function handleRequires(node) {
        if (node.value && typeof node.value === 'string' && node.value.indexOf('http:') === 0) {
          context.report({
            node,
            messageId: 'noHttpUrl',
            data: {
              url: node.value,
            },
          });
        }
      },
    };
  },
};
