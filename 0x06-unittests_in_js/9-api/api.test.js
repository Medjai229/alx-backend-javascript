const { expect } = require('chai');
const request = require('request');

describe('index page', () => {
  const url = 'http://localhost:7865/';

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

describe('cart page', () => {
  const url = 'http://localhost:7865/';

  it('should return the status code 200', (done) => {
    request.get(url + 'cart/123', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the status code 404', (done) => {
    request.get(url + 'cart/abc', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(url + 'cart/123', (err, res) => {
      expect(res.body).to.equal('Payment methods for cart 123');
      done();
    });
  });
});