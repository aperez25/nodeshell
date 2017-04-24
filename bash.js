'use strict';

const ourCommands = require('./commands');
const chalk = require('chalk');
const prompt = chalk.blue('\nprompt > ');

// Output a prompt
process.stdout.write(prompt);

// The stdin 'data' event fires after a user types in a line
//pwd function
process.stdin.on('data', function (data) {


  setTimeout(function() {process.stdout.write(prompt)}, 0);
});

function execute(cmdString) {
  const tokens = cmdString.toString().trim().split(' ');
  const cmd = tokens[0];
  const args = tokens.slice(1).join(' ');
    if (ourCommands[cmd]) ourCommands[cmd](args, done);
}

function done(output) {
  process.stdout.write(output + prompt);
}
