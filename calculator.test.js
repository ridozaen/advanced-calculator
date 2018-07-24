const assert = require('assert');

const Calculator = require('./calculator.js');

describe('Test features', () => {
  const calc = new Calculator();
  const data = Object.keys(calc);
  console.log(data);
  it('should have default value for variable', () => {
    assert.deepEqual(calc[data], 1);
  });
  it('should test add method', () => {
    const newCalc = calc.add(2);
    assert.deepEqual(newCalc[data], 3);
  });
  it('should test substract method', () => {
    const substract = calc.substract(1);
    assert.deepEqual(substract[data], 2);
  });
  it('should test multiply method', () => {
    const multiply = calc.multiply(11);
    assert.deepEqual(multiply[data], 22);
  });
  it('should test divide method', () => {
    const divide = calc.divide(2);
    assert.deepEqual(divide[data], 11);
  });
  it('should test square method', () => {
    const square = calc.square();
    assert.deepEqual(square[data], 121);
  });
  it('should test square root method', () => {
    const sqroot = calc.squareRoot();
    assert.deepEqual(sqroot[data], 11);
  });
});
