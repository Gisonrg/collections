var numbers = process.argv.slice(2);
var result = numbers.reduce(function(pre, current) {
  return Number(pre) + Number(current);
});
console.log(result);
