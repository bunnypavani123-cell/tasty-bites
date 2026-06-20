let cartCount = Number(localStorage.getItem("cartCount")) || 0;

let cartItems =
JSON.parse(localStorage.getItem("cartItems")) || [];

const cartDisplay = document.getElementById("cart-count");

if (cartDisplay) {
    cartDisplay.textContent = `Cart (${cartCount})`;
}

function addItem(itemName) {

    cartItems.push({
    name: itemName,
    price:
        itemName === "Pizza" ? 299 :
        itemName === "Burger" ? 199 :
        249,
    quantity: 1
});

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    cartCount++;

    localStorage.setItem(
        "cartCount",
        cartCount
    );

    if (cartDisplay) {
        cartDisplay.textContent =
        `Cart (${cartCount})`;
    }

    alert(itemName + " added to cart");
}

const clearBtn = document.getElementById("clear-cart");

if (clearBtn) {

    clearBtn.addEventListener("click", () => {

        cartCount = 0;
        cartItems = [];

        localStorage.setItem("cartCount", 0);
        localStorage.setItem("cartItems", "[]");

        if (cartDisplay) {
            cartDisplay.textContent = "Cart (0)";
        }

    });

}

function filterMenu(category) {

    const items = document.querySelectorAll(".item");

    items.forEach(item => {

        if (category === "all") {
            item.style.display = "block";
        }
        else if (item.classList.contains(category)) {
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }

    });

}
function searchFood(){

    const searchText =
    document.getElementById("search-box")
    .value.toLowerCase();

    const items =
    document.querySelectorAll(".item");

    items.forEach(item => {

        const foodName =
        item.querySelector("h3")
        .textContent.toLowerCase();

        if(foodName.includes(searchText)){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }

    });

}