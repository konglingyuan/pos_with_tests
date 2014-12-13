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

// Cart.getPromotionBarcode = function() {
//   var promotion = _.find(loadPromotions(), function(promotion){
//     return promotion;
//   });
//   var promotionsBarcode = promotion.barcodes;
//   var promotionBarcode;
//
//   _.forEach(promotionsBarcode, function(promotionBarcode) {
//     promotionBarcode = promotionBarcode;
//   });
//
//   return promotionBarcode;
//
// };


Cart.prototype.getCartItemsPromotionText = function() {
  var cartItemsText = '';

  var promotion = _.find(loadPromotions(), function(promotion){
    return promotion;
  });

  var promotionsBarcode = promotion.barcodes;

  _.forEach(this.cartItems, function(cartItem) {

    _.forEach(promotionsBarcode, function(promotionBarcode) {
      if(cartItem.item.barcode === promotionBarcode && promotion.type === 'BUY_TWO_GET_ONE_FREE') {
        cartItemsText += '名称：'+ cartItem.item.name +'，数量：'+ parseInt(cartItem.count/3) +
        cartItem.item.unit + '\n' ;
      }
    });
  });

  // _.forEach(this.cartItems, function(cartItem) {
  //   var promotionBarcode = this.getPromotionBarcode();
  //   if(cartItem.item.barcode === promotionBarcode && promotion.type === 'BUY_TWO_GET_ONE_FREE') {
  //     cartItemsText += '名称：'+ cartItem.item.name +'，数量：'+ parseInt(cartItem.count/3) +
  //     cartItem.item.unit + '\n' ;
  //   }
  // });

  return cartItemsText;
};
