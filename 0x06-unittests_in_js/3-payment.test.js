const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('payment testing', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should call Utils.calculateNumber with the correct arguments', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
  });
});
