"use strict";
const max = +process.argv[2];
let FizzBuzz = function*() {
	let current = 0, value;
	while (++current <= max) {
		value = current;
		if (current % 5 === 0 && current % 3 === 0) {
			value = 'FizzBuzz';
		} else if (current % 5 === 0) {
			value = 'Buzz';
		} else if (current % 3 === 0) {
			value = 'Fizz';
		}
		yield value;
	}
}();

for (var n of FizzBuzz) {
	console.log(n);
}