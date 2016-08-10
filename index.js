module.exports = function (src, line, column) {
  var context = '';
  if (src && line >= 1 && line <= src.split('\n').length) {
    var lines = src.split('\n');
    var start = Math.max(line - 3, 0);
    var end = Math.min(lines.length, line + 3);
    var context = lines.slice(start, end).map(function(text, i){
      var curr = i + start + 1;
      var preamble = (curr == line ? '  > ' : '    ')
        + curr
        + '| ';
      var out = preamble + text;
      if (curr === line && column > 0) {
        out += '\n';
        out += Array(preamble.length + column).join('-') + '^';
      }
      return out;
    }).join('\n');
  }

  return context;
}
