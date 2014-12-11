function Inventory(cart) {
  this.cart = cart;
}

Inventory.prototype.toString = function() {
  var dateDigitToString = function (num) {
    return num < 10 ? '0' + num : num;
  };
  
  var currentDate = new Date(),
    year = dateDigitToString(currentDate.getFullYear()),
    month = dateDigitToString(currentDate.getMonth() + 1),
    date = dateDigitToString(currentDate.getDate()),
    hour = dateDigitToString(currentDate.getHours()),
    minute = dateDigitToString(currentDate.getMinutes()),
    second = dateDigitToString(currentDate.getSeconds()),
    formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;

  return '***<没钱赚商店>购物清单***\n' +
    '打印时间：' + formattedDateString + '\n' +
    '----------------------\n' +
    this.cart.getCartItemsInventoryText() +
    '----------------------\n' +
    '挥泪赠送商品：\n' +
    this.cart.getCartItemsPromotionText() +
    '----------------------\n' +
    '总计：' + (this.cart.getTotalAmount().toFixed(2) - this.cart.getSaveAmount().toFixed(2)) + '(元)\n' +
    '节省：'+ this.cart.getSaveAmount().toFixed(2) +'(元)\n' +
    '**********************';
};
