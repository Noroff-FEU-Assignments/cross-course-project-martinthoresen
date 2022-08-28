let url = "https://api.flowerpower12394.one/wp-json/wc/store/products";
const jacketContainer = document.querySelector(".jacket-container");

async function getJacket() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const jackets = result;
    console.log(jackets);

    jacketContainer.innerHTML = "";

    for (let i = 0; i < jackets.length; i++) {
      function createHtml(jackets) {
        jacketContainer.innerHTML += `<div class="jackets">
                                <a href="details.html?id=${jackets[i].id}">
                               <img src="${jackets[i].images[0].src}">
                               <h3>${jackets[i].name}</h3>
                                <p>$
                                ${jackets[i].prices.price / 100}</p>
                                </a>
                                <button class="cart-button" data-product="${jackets[i].id}">Add to Cart</button>
                                </div>`;
      }

      createHtml(jackets);
    }
  } catch (error) {
    console.log(error);
    const errorMsg = createMessage("error", "There was an error loading the API");
    jacketContainer.innerHTML = errorMsg;
  }
}
getJacket();

// Shopping Cart --------

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
