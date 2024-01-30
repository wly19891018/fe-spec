'use strict';

const markdownlintConfig = require('../index.json');
const assert = require('assert').strict;

assert.strictEqual(markdownlintConfig(), 'Hello from markdownlint-config');
console.info('markdownlint-config tests passed');
