"use strict";
const max = +process.argv[2];
let FizzBuzz = {
	[Symbol.iterator]() {
		let current = 0;
		return {
			next() {
				current++;
				if (current <= max) {
					let value = current;
					if (current % 5 === 0 && current % 3 === 0) {
						value = 'FizzBuzz';
					}
					if (current % 5 === 0) {
						value = 'Buzz';
					}
					if (current % 3 === 0) {
						value = 'Fizz';
					}
					return {
						done:false,
						value: value
					};
				}
				return {
					done: true
				};
			}
		}
	}
};

for (var n of FizzBuzz) {
	console.log(n);
}