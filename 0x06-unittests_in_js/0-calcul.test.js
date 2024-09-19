/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('adding two rounded numbers', () => {
  it('both values already integers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('both values are floats with .5 or higher (rounding up)', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('both values are floats less than .5 (rounding down)', () => {
    assert.strictEqual(calculateNumber(1.2, 2.4), 3);
  });

  it('one value rounds up and the other rounds down', () => {
    assert.strictEqual(calculateNumber(1.7, 2.3), 4);
  });

  it('one value is an integer, the other is a float (rounding down)', () => {
    assert.strictEqual(calculateNumber(2, 2.1), 4);
  });

  it('one value is an integer, the other is a float (rounding up)', () => {
    assert.strictEqual(calculateNumber(2, 2.6), 5);
  });

  it('negative float values rounding down', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.3), -3);
  });

  it('negative float values rounding up', () => {
    assert.strictEqual(calculateNumber(-1.8, -2.6), -5);
  });

  it('mixed sign numbers (positive and negative)', () => {
    assert.strictEqual(calculateNumber(1.1, -2.6), -2);
  });

  it('zero values', () => {
    assert.strictEqual(calculateNumber(0.2, 0.7), 1);
  });
});
