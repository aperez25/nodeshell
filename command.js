var fs = require('fs');

module.exports = {
  pwd: function() {
    console.log(process.cwd());
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + '\n');
      })
      });
  },
  date: function() {
    var date = new Date(); // needs to be formatted
    return date.toISOString();
  },
  echo: function(args) {
    console.log(args.join(' '));
  }
}

