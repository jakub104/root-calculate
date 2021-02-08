const isPrime = require('prime-number')
const primeNumberList = require('prime-number/list')
primeNumberList.unshift(2, 3)

primeFactors = (num) => {
	if (!Number.isInteger(num)) {
		console.log('Error: Number must be integer!');
		return [];
	}
	else {
		let number = num;
		let index = 0;
		const primeFactors = []
		while (number) {
			if (isPrime(number)) {
				primeFactors.push(number)
				return primeFactors
			}
			else {
				if (Number.isInteger(number / primeNumberList[index])) {
					number = number / primeNumberList[index]
					primeFactors.push(primeNumberList[index])
				}
				else {
					index += 1
				}
			}
		}
	}
}

rootOfGrade = (gra, num) => {
	if (!Number.isInteger(gra) || !Number.isInteger(num)) {
		console.log('Error: Grade and number must be integer number!');
		return {};
	}
	else {
		const primes = primeFactors(num)
		const grade = gra;
		let primesObject = {}
		const resultPrimes = []
		let result = 0
		let root = 0
		primes.forEach(keys => {
			primesObject[keys] = ++primesObject[keys] || 1;
		})
		Object.entries(primesObject).forEach(entry => {
			if (entry[1] >= grade) {
				const key = entry[0]
				let value = entry[1]
				while (value >= grade) {
					resultPrimes.push(Number(key))
					value -= grade
				}
				primesObject[key] = value
			}
		})
		resultPrimes.forEach(prime => {
			if (!result) {
				result = prime
			}
			else {
				result = result * prime
			}
		})
		Object.entries(primesObject).forEach(entry => {
			if (entry[1]) {
				for (let i = 0; i < Number(entry[1]); i++) {
					if (!root) {
						root = Number(entry[0])
					}
					else {
						root = root * Number(entry[0])
					}
				}
			}
		})
		return {
			result,
			root
		}
	}
}

squareRoot = (num) => {
	let {result, root} = rootOfGrade(2, num)
	if (root >= 2) {
		if (result) {
			result = `${result}√${root}`
		}
		else {
			result = `√${root}`
		}
	}
	return result
}

module.exports = squareRoot
module.exports.primeFactors = primeFactors
module.exports.rootOfGrade = rootOfGrade
