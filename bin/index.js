#! /usr/bin/env node
const { program } = require('commander');

program
.command('config')
.description('create configuration for react-reset package.')
.action(async () => {
  const { createConfig } = await import('../src/config.js');
  return createConfig();
});

program
.command('reset')
.description('reset the react app to its initial version.')
.action(async () => {
  const reset = await import('../src/reset.js');
  return reset.default();
});

program.parse(process.argv);