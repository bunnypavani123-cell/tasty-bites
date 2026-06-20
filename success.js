const cartItems =
JSON.parse(localStorage.getItem("cartItems")) || [];

let totalItems = 0;
let totalPrice = 0;

cartItems.forEach(item => {

    totalItems += item.quantity;

    totalPrice +=
    item.price * item.quantity;

});

const randomId =
Math.floor(Math.random() * 10000);

document.getElementById("order-id")
.textContent =
"Order ID: TB" + randomId;

document.getElementById("items-count")
.textContent =
"Items Ordered: " + totalItems;

document.getElementById("total-amount")
.textContent =
"Total Amount: ₹" + totalPrice;
localStorage.setItem("cartCount", 0);
localStorage.setItem("cartItems", "[]");