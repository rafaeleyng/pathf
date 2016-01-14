var path = require('path');

function pathf() {
  console.log(process.env.PATH.split(path.delimiter).join('\n'));
}

module.exports = pathf;
