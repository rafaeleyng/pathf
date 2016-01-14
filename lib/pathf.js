var path = require('path');

function pathf() {
  console.log(process.env.PATH.split(':').join('\n'));
}

module.exports = pathf;
