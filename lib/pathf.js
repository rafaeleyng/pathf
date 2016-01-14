function pathf() {
  var path = process.env.PATH;
  console.log(path.split(':').join('\n'));
}

module.exports = pathf;
