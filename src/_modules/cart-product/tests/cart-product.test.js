'use strict';

var CartProduct = require('../cart-product');

describe('CartProduct View', function() {

  beforeEach(function() {
    this.cartProduct = new CartProduct();
  });

  it('Should run a few assertions', function() {
    expect(this.cartProduct);
  });

});
