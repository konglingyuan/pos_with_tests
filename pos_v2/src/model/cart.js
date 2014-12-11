function Cart() {
  this.cartItems = [];
}

Cart.prototype.getTotalAmount = function() {
  var totalAmount = 0;
  _.forEach(this.cartItems, function(cartItem) {
    var subtotal = cartItem.getSubtotal();
    totalAmount += subtotal;
  });
  return totalAmount;
};

Cart.prototype.getSaveAmount = function() {
  var saveAmount = 0;
  _.forEach(this.cartItems, function(cartItem) {
    var save = cartItem.getSave();
    saveAmount += save;
  });
  return saveAmount;
};

Cart.prototype.getCartItemsInventoryText = function() {
  var cartItemsText = '';

  _.forEach(this.cartItems, function(cartItem) {
    cartItemsText += cartItem.toInventoryText();
  });

  return cartItemsText;
};

Cart.prototype.getCartItemsPromotionText = function() {
  var cartItemsText = '';

  _.forEach(this.cartItems, function(cartItem) {
    cartItemsText += cartItem.toPromotionText();
  });

  return cartItemsText;
};
