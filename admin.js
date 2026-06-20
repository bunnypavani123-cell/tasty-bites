let foods =
JSON.parse(localStorage.getItem("foods")) || [];

displayFoods();

function addFood(){

    const name =
    document.getElementById("food-name").value;

    const price =
    document.getElementById("food-price").value;

    foods.push({
        name:name,
        price:price
    });

    localStorage.setItem(
        "foods",
        JSON.stringify(foods)
    );

    displayFoods();
}

function displayFoods(){

    const list =
    document.getElementById("food-list");

    list.innerHTML = "";

    foods.forEach((food,index)=>{

        const li =
        document.createElement("li");

        li.innerHTML = `
            ${food.name} - ₹${food.price}

            <button onclick="deleteFood(${index})">
                Delete
            </button>
        `;

        list.appendChild(li);

    });

}

function deleteFood(index){

    foods.splice(index,1);

    localStorage.setItem(
        "foods",
        JSON.stringify(foods)
    );

    displayFoods();

}
displayOrders();

function displayOrders(){

    const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

    const orderList =
    document.getElementById("orders-list");

    if(!orderList) return;

    orderList.innerHTML = "";

    orders.forEach((order,index)=>{

        const li =
        document.createElement("li");

        let itemList = "";

if(order.items){

    order.items.forEach(item => {

        itemList += `
            ${item.name} x ${item.quantity}
            <br>
        `;

    });

}

li.innerHTML = `
    <strong>Order #${index + 1}</strong>
    <br><br>

    Customer: ${order.customer}
    <br><br>

    <strong>Items:</strong>
    <br>

    ${itemList}

    <br>

    <strong>Total: ₹${order.total}</strong>

    <hr>
`;

        orderList.appendChild(li);

    });

}
displayStats();

function displayStats(){

    const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

    let totalRevenue = 0;

    orders.forEach(order => {

        totalRevenue += Number(order.total);

    });

    document.getElementById("total-orders")
    .textContent = orders.length;

    document.getElementById("total-revenue")
    .textContent = "₹" + totalRevenue;

}
function clearOrders(){

    localStorage.removeItem("orders");

    location.reload();

}