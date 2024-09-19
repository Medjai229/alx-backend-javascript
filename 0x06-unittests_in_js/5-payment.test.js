/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/no-hooks */
const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');

describe('payment testing', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should log the correct message for total 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct message for total 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
