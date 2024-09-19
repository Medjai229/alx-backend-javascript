/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('payment testing', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', totalAmount, totalShipping)).to.be.true;

    spy.restore();
  });
});
