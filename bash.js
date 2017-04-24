var cmds = require('./command.js');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
//pwd function
process.stdin.on('data', function (data) {
  var args = data.toString().trim().split(' ');
  var cmd = args[0];  // remove the newline
  args = args.slice(1);
  if (cmd === 'pwd') cmds.pwd(args);
  if (cmd === 'ls') cmds.ls(args);
  if (cmd === 'echo') cmds.echo(args);
  if (cmd === 'date') console.log(cmds.date());
  // process.stdout.write('You typed: ' + cmd);
  setTimeout(function() {process.stdout.write('\nprompt > ')}, 0);
});
