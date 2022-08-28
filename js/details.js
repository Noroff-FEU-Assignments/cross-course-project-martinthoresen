const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.flowerpower12394.one/wp-json/wc/store/products/" + id;

const jacketContainer = document.querySelector(".jacket-container");
async function getJacket() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const jacket = result;
    console.log(jacket);

    jacketContainer.innerHTML = "";

    function createHtml(jacket) {
      jacketContainer.innerHTML += `<div class="jacket-details">
                                  
                                 <img src="${jacket.images[0].src}">
                                 <h3>${jacket.name}</h3>
                                  <p>$
                                  ${jacket.prices.price / 100}</p>
                                  ${jacket.description}
                                  </a>
                                  <button class="cart-button" data-product="${jacket.id}">Add to Cart</button>
                                  </div>`;
    }

    createHtml(jacket);
  } catch (error) {
    console.log(error);
    const errorMsg = createMessage("error", "There was an error loading the API");
    jacketContainer.innerHTML = errorMsg;
  }
}
getJacket();
