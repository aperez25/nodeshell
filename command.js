'use strict';
const fs = require('fs');

var pwd = (args, done) => done(process.cwd());

var ls = (args, done) => {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    done(files.join('\n'));
});
}

var echo = (args, done) => {
  const output = args
  .split(' ')
  .map(function(arg){
    return (arg[0] === '$') ? process.env[arg.slice(1)] : arg;
  })
  .join(' ');
  done(output);
}

var date = (args, done) => done(chalk.magenta(Date()));

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo
}
