let cart = {};

function addToCart(product) {
  if (cart[product]) {
    cart[product]++;
  } else {
    cart[product] = 1;
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let totalPrice = 0;
  for (const [product, quantity] of Object.entries(cart)) {
    const price = getPrice(product);
    const itemTotal = price * quantity;
    totalPrice += itemTotal;
    const li = document.createElement("li");
    li.textContent = `${quantity} x ${product} - $${itemTotal.toFixed(2)}`;
    cartItems.appendChild(li);
  }
  const checkoutButton = document.querySelector("#cart button");
  checkoutButton.textContent = `Checkout - Total: $${totalPrice.toFixed(2)}`;
}

function checkout() {
  alert("Thank you for shopping with us!");
  cart = {};
  updateCart();
}

function getPrice(product) {
  switch (product) {
    case "tomato":
      return 1.5;
    case "carrot":
      return 2.0;
    // Add prices for more products here
    default:
      return 0;
  }
}
