'use strict';

// Constructor
var QuantitySelector = function() {
  var addButton = $('.-js-add');
  var substractButton = $('.-js-substract');

  addButton.on('click', function(e) {
    e.preventDefault();
    var qtyContainer = $(this).parent().find('.-qty');
    var currentQty = $(qtyContainer).html();

    if(currentQty < 10) {
      $(qtyContainer).html(parseInt(currentQty) + 1);
      substractButton.removeAttr('disabled');
    } else {
      addButton.attr('disabled', true);
    }
  })

  substractButton.on('click', function(e) {
    e.preventDefault();
    var qtyContainer = $(this).parent().find('.-qty');
    var currentQty = $(qtyContainer).html();

    if(currentQty > 1) {
      $(qtyContainer).html(parseInt(currentQty) - 1);
      addButton.removeAttr('disabled');
    } else {
      substractButton.attr('disabled', true);
    }
  })
};

module.exports = QuantitySelector;
