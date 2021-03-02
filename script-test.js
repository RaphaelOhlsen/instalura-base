const shell = require('shelljs');

console.log('Script-Test');
shell.exec('git diff --name-only branch-scripts-testes..main');
