# Root Calculate

> Root Calculate is a program for calculating complex square roots and more! You can calculate the square root of any degree and break it down into prime factors.

## Installation

Use the [npm](https://www.npmjs.com/) to install Root Calculate.

```bash
$ npm install root-calculate
```

## Usage
#### ES6 Modules

```javascript
import squareRoot, {rootOfGrade, primeFactors} from 'root-calculate'

console.log(squareRoot(4)) // 2
console.log(squareRoot(8)) // "2√2"
console.log(rootOfGrade(3, 32)) // { result: 2, root: 4 }
console.log(primeFactors(480) // [2, 2, 2, 2, 2, 3, 5]

```
#### Node.js
```javascript
const rootCalculate = require('root-calculate')

console.log(rootCalculate(4)) // 2
console.log(rootCalculate(8)) // "2√2"
console.log(rootCalculate.rootOfGrade(3, 32)) // { result: 2, root: 4 }
console.log(rootCalculate.primeFactors(480) // [2, 2, 2, 2, 2, 3, 5]

```

## Errors
```javascript
console.log(rootOfGrade('3', 32)) // Error: Grade and number must be integer number! (return {})
console.log(primeFactors('480') // Error: Number must be integer! (return [])
console.log(primeFactors(480.5) // Error: Number must be integer! (return [])

```

## Contact
If you found a bug, or have an idea to improve my program, please contact me at: [szulcus.pl](https://szulcus.pl/)

## License
[ISC](https://choosealicense.com/licenses/isc/)