function printInventory(inputs) {
  var inputsArray = Split.splitBarcodes(inputs);

  var items = Item.findItems(inputsArray);

  var cartItems = CartItem.getCartItems(items);

  var cart = new Cart();
  cart.cartItems = cartItems;

  var inventory = new Inventory(cart);
  console.log(inventory.toString());
}
