const ourCommands = require('./command.js');
const chalk = require('chalk');
const prompt = chalk.blue('\nprompt > ');
// Output a prompt
process.stdout.write(prompt);

// The stdin 'data' event fires after a user types in a line
//pwd function
process.stdin.on('data', function (data) {
  const cmd = data.toString().trim().split(' ');
  if (ourCommands[cmd]) ourCommands[cmd]();
  else process.stderr.write(chalk.red('command not found: ') + cmd);
  // process.stdout.write('You typed: ' + cmd);
  setTimeout(function() {process.stdout.write(prompt)}, 0);
});
