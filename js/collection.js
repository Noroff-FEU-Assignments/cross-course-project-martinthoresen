import { productArray } from "./js/components/productList.js";

let cartArray = [];

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.onclick = function (event) {
    cartArray.push(event.target.dataset.product);
    const itemToAdd = productArray.find((item) => item.id === event.target.dataset);
    cartArray.push(itemToAdd);
    console.log(cartArray);
  };
});
