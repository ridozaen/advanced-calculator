const Calculator = require('./calculator.js');

// execute function on calculator.js in here

const myCalculator = new Calculator();

myCalculator
  .add(2)
  .substract(1)
  .multiply(2)
  .square()
  .squareRoot()
  .power(2)
  .multiply(myCalculator.phi);

// custom console
console.log(`result: ${myCalculator.getResult()}`);
