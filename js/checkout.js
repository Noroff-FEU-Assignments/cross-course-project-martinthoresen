const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let total = 0;
cartItems.forEach(function (cartElement) {
  total += cartElement.price;
  cartContainer.innerHTML += `<div class="item">
    <img src="${cartElement.image}" alt="${cartElement.name}" />
    <p>${cartElement.name}</p>
    <p>$${cartElement.price}</p>
  </div>`;
});
totalContainer.innerHTML = `Total: $${total}`;
