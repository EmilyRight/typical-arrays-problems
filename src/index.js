
exports.min = function min(array) {
  if (array === undefined) return 0;
  return (array.length? (array.sort((a, b) => a - b))[0]: 0);
}

exports.max = function max(array) {
  if (array === undefined) return 0;
  return (array.length? (array.sort((a, b) => b - a))[0]: 0);
}

exports.avg = function avg(array) {
  if (array === undefined) return 0;
  return (array.length? ((array.reduce((a, b) => a + b)) / array.length): 0);
}
