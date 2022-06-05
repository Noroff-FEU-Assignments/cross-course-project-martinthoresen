import { productArray } from "/js/components/productList.js";

const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.onclick = function (event) {
    const itemToAdd = productArray.find((item) => item.id === event.target.dataset.product);
    cartArray.push(itemToAdd);
    console.log(cartArray);
    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});

function showCart(cartItems) {
  cartList.innerHTML = "";
  let total = 0;
  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    cartList.innerHTML += `<div class="cart-item">
      <img src="${cartElement.image}" alt="${cartElement.name}" class="cart-image">
      <h4>${cartElement.name}</h4>
      
      `;
  });
  totalContainer.innerHTML = `Total: $${total}`;
}
