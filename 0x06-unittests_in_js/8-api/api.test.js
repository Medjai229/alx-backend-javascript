const { expect } = require('chai');
const request = require('request');

describe('index page', () => {
  const url = 'http://localhost:7865';

  it('should return the status code 200', (done) => {
    request.get(url, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(url, (err, res) => {
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });
});