/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculator testing', () => {
  describe('sum testing', () => {
    it('both values already integers', () => {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });

    it('both values are floats with .5 or higher (rounding up)', () => {
      expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
    });

    it('both values are floats less than .5 (rounding down)', () => {
      expect(calculateNumber('SUM', 1.2, 2.4)).to.equal(3);
    });

    it('one value rounds up and the other rounds down', () => {
      expect(calculateNumber('SUM', 1.7, 2.3)).to.equal(4);
    });

    it('one value is an integer, the other is a float (rounding down)', () => {
      expect(calculateNumber('SUM', 2, 2.1)).to.equal(4);
    });

    it('one value is an integer, the other is a float (rounding up)', () => {
      expect(calculateNumber('SUM', 2, 2.6)).to.equal(5);
    });

    it('negative float values rounding down', () => {
      expect(calculateNumber('SUM', -1.4, -2.3)).to.equal(-3);
    });

    it('negative float values rounding up', () => {
      expect(calculateNumber('SUM', -1.8, -2.6)).to.equal(-5);
    });

    it('mixed sign numbers (positive and negative)', () => {
      expect(calculateNumber('SUM', 1.1, -2.6)).to.equal(-2);
    });

    it('zero values', () => {
      expect(calculateNumber('SUM', 0.2, 0.7)).to.equal(1);
    });
  });

  describe('subtract testing', () => {
    it('both values already integers', () => {
      expect(calculateNumber('SUBTRACT', 3, 2)).to.equal(1);
    });

    it('both values are floats with .5 or higher (rounding up)', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 1.5)).to.equal(1);
    });

    it('both values are floats less than .5 (rounding down)', () => {
      expect(calculateNumber('SUBTRACT', 2.2, 1.4)).to.equal(1);
    });

    it('one value rounds up and the other rounds down', () => {
      expect(calculateNumber('SUBTRACT', 1.7, 2.3)).to.equal(0);
    });

    it('one value is an integer, the other is a float (rounding down)', () => {
      expect(calculateNumber('SUBTRACT', 2, 2.1)).to.equal(0);
    });

    it('one value is an integer, the other is a float (rounding up)', () => {
      expect(calculateNumber('SUBTRACT', 2.6, 2)).to.equal(1);
    });

    it('negative float values rounding down', () => {
      expect(calculateNumber('SUBTRACT', -2.4, -1.3)).to.equal(-1);
    });

    it('negative float values rounding up', () => {
      expect(calculateNumber('SUBTRACT', -1.8, -2.6)).to.equal(1);
    });

    it('mixed sign numbers (positive and negative)', () => {
      expect(calculateNumber('SUBTRACT', -1.1, 2.6)).to.equal(-4);
    });

    it('zero values', () => {
      expect(calculateNumber('SUBTRACT', 0.2, 0.7)).to.equal(-1);
    });
  });

  describe('divide testing', () => {
    it('both values already integers', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });

    it('both values are floats with .5 or higher (rounding up)', () => {
      expect(calculateNumber('DIVIDE', 3.5, 1.5)).to.equal(2);
    });

    it('both values are floats less than .5 (rounding down)', () => {
      expect(calculateNumber('DIVIDE', 8.2, 2.4)).to.equal(4);
    });

    it('one value rounds up and the other rounds down', () => {
      expect(calculateNumber('DIVIDE', 5.7, 3.3)).to.equal(2);
    });

    it('one value is an integer, the other is a float (rounding down)', () => {
      expect(calculateNumber('DIVIDE', 6, 2.1)).to.equal(3);
    });

    it('one value is an integer, the other is a float (rounding up)', () => {
      expect(calculateNumber('DIVIDE', 2.6, 2)).to.equal(1.5);
    });

    it('negative float values rounding down', () => {
      expect(calculateNumber('DIVIDE', -4.4, -2.3)).to.equal(2);
    });

    it('negative float values rounding up', () => {
      expect(calculateNumber('DIVIDE', -8.8, -2.6)).to.equal(3);
    });

    it('mixed sign numbers (positive and negative)', () => {
      expect(calculateNumber('DIVIDE', -1.1, 1.6)).to.equal(-0.5);
    });

    it('zero values', () => {
      expect(calculateNumber('DIVIDE', 0.7, 0.2)).to.equal('Error');
    });
  });

  describe('default case', () => {
    it('testing the default case', () => {
      expect(calculateNumber('THING', 5, 3)).to.equal(0);
    });
  });
});
