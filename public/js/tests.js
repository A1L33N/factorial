var factorial = require('./factorial.js');
var expect = require('chai').expect;

describe('factorial', function(){
  it('returns 1 for factorial of 0', function() {
    expect(factorial(0)).to.equal(1);
  });
  it('returns 120 for factorial of 5', function() {
    expect(factorial(5)).to.equal(120);
  });
});
