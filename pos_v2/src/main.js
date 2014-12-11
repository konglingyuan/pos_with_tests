function printInventory(barcodes){
  var items = Item.findItems(barcodes);

  var cartItems = CartItem.getCartItems(items, barcodes);

  var cart = new Cart();
  cart.cartItems = cartItems;

  var inventory = new Inventory(cart);
  console.log(inventory.toString());
}
