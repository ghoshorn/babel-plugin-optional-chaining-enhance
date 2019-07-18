const pluginTester = require('babel-plugin-tester')
const plugin = require('../lib/index.js')
const path = require('path');
pluginTester({
  plugin: plugin.default,
  pluginName: 'babel-plugin-optional-chaining-enhance',
  fixtures: path.resolve(__dirname, 'fixtures'),
})
