const cartItems =
JSON.parse(localStorage.getItem("cartItems")) || [];

const cartList =
document.getElementById("cart-items");

const totalItems =
document.getElementById("total-items");

let totalPrice = 0;

cartItems.forEach((item, index) => {

    const li = document.createElement("li");

    li.innerHTML = `

    <h3>
    ${item.name === "Pizza" ? "🍕" :
        item.name === "Burger" ? "🍔" :
        "🍝"}
        ${item.name}
    </h3>

    <p>Price: ₹${item.price}</p>

    <p>
        Quantity:

        <button onclick="decreaseQty(${index})">-</button>

        <span>${item.quantity}</span>

        <button onclick="increaseQty(${index})">+</button>
    </p>

    <p>
        Subtotal:
        ₹${item.price * item.quantity}
    </p>

    <hr>

`;

    cartList.appendChild(li);

    totalPrice += item.price * item.quantity;

});

let totalQuantity = 0;

cartItems.forEach(item => {
    totalQuantity += item.quantity;
});

totalItems.textContent =
`Total Items: ${totalQuantity}`;

const priceHeading =
document.createElement("h3");

priceHeading.textContent =
`Total Price: ₹${totalPrice}`;

document.querySelector(".cart-page")
.appendChild(priceHeading);

const clearBtn =
document.getElementById("clear-cart");

if(clearBtn){

    clearBtn.addEventListener("click", () => {

        localStorage.setItem("cartCount",0);
        localStorage.setItem("cartItems","[]");

        location.reload();

    });

}
function increaseQty(index){

    cartItems[index].quantity++;

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    let totalCount = 0;

    cartItems.forEach(item => {
        totalCount += item.quantity;
    });

    localStorage.setItem(
        "cartCount",
        totalCount
    );

    location.reload();
}

function decreaseQty(index){

    if(cartItems[index].quantity > 1){
        cartItems[index].quantity--;
    }
    else{
        cartItems.splice(index, 1);
    }

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    // Update cart count
    let totalCount = 0;

    cartItems.forEach(item => {
        totalCount += item.quantity;
    });

    localStorage.setItem(
        "cartCount",
        totalCount
    );

    location.reload();
}