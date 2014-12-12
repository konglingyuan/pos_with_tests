function CartItem(item, count) {
  this.item = item;
  this.count = count || 0 ;
}

CartItem.getCartItems = function(items) {
  var cartItems = [];
  var count = 1;
  _.forEach(items, function(item) {
    console.log(item.count);
    var cartItem = _.find(cartItems, function(cartItem) {
      return cartItem.item.barcode === item.item.barcode;
    });
    if (cartItem) {
      cartItem.count++;
    } else {
      if(item.count) {
        count = parseInt(item.count);
        cartItems.push(new CartItem(item.item, count));
      } else {
        cartItems.push(new CartItem(item.item, 1));
      }
    }
  });

  //console.log(cartItems);
  return cartItems;
};

CartItem.prototype.getSubtotal = function() {
  return this.item.price * this.count;
};

CartItem.prototype.getSave = function() {
  return this.item.price * (parseInt(this.count/3));
};

CartItem.prototype.toInventoryText = function() {
  return '名称：' + this.item.name +
         '，数量：' + this.count + this.item.unit +
         '，单价：' + this.item.price.toFixed(2) +
         '(元)，小计：' + (this.getSubtotal() - this.getSave()).toFixed(2) +
         '(元)\n';
};

CartItem.prototype.toPromotionText = function() {
  return '名称：'+ this.item.name +'，数量：'+ parseInt(this.count/3) +
         this.item.unit + '\n' ;
};
