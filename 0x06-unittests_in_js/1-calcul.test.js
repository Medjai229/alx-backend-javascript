/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculator testing', () => {
  describe('sum testing', () => {
    it('both values already integers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    });

    it('both values are floats with .5 or higher (rounding up)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
    });

    it('both values are floats less than .5 (rounding down)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 2.4), 3);
    });

    it('one value rounds up and the other rounds down', () => {
      assert.strictEqual(calculateNumber('SUM', 1.7, 2.3), 4);
    });

    it('one value is an integer, the other is a float (rounding down)', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 2.1), 4);
    });

    it('one value is an integer, the other is a float (rounding up)', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 2.6), 5);
    });

    it('negative float values rounding down', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -2.3), -3);
    });

    it('negative float values rounding up', () => {
      assert.strictEqual(calculateNumber('SUM', -1.8, -2.6), -5);
    });

    it('mixed sign numbers (positive and negative)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.1, -2.6), -2);
    });

    it('zero values', () => {
      assert.strictEqual(calculateNumber('SUM', 0.2, 0.7), 1);
    });
  });

  describe('subtract testing', () => {
    it('both values already integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 2), 1);
    });

    it('both values are floats with .5 or higher (rounding up)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 1.5), 1);
    });

    it('both values are floats less than .5 (rounding down)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 1.4), 1);
    });

    it('one value rounds up and the other rounds down', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.7, 2.3), 0);
    });

    it('one value is an integer, the other is a float (rounding down)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 2.1), 0);
    });

    it('one value is an integer, the other is a float (rounding up)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 2), 1);
    });

    it('negative float values rounding down', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.4, -1.3), -1);
    });

    it('negative float values rounding up', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.8, -2.6), 1);
    });

    it('mixed sign numbers (positive and negative)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.1, 2.6), -4);
    });

    it('zero values', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.2, 0.7), -1);
    });
  });

  describe('divide testing', () => {
    it('both values already integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('both values are floats with .5 or higher (rounding up)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.5, 1.5), 2);
    });

    it('both values are floats less than .5 (rounding down)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.2, 2.4), 4);
    });

    it('one value rounds up and the other rounds down', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.7, 3.3), 2);
    });

    it('one value is an integer, the other is a float (rounding down)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2.1), 3);
    });

    it('one value is an integer, the other is a float (rounding up)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 2), 1.5);
    });

    it('negative float values rounding down', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4.4, -2.3), 2);
    });

    it('negative float values rounding up', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.8, -2.6), 3);
    });

    it('mixed sign numbers (positive and negative)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.1, 1.6), -0.5);
    });

    it('zero values', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.7, 0.2), 'Error');
    });
  });

  describe('default case', () => {
    it('testing the default case', () => {
      assert.strictEqual(calculateNumber('THING', 5, 3), 0);
    });
  });
});
