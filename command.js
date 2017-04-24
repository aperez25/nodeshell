'use strict';
const chalk = require('chalk');
const fs = require('fs');

var pwd = () => process.stdout.write(process.cwd());

var ls = () => {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    process.stdout.write(files.join('\n'));
});
};

var date = () => process.stdout.write(chalk.magenta(Date()));

// var echo = function(args) {
//   console.log(args.join(' '));
// }

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls
}
