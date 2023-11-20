let groceryItems = [
    { name: 'Apple', category: 'Fruits', price: 1.0, quantity: 6 },
    { name: 'Banana', category: 'Fruits', price: 0.5, quantity: 10 },
    { name: 'Carrot', category: 'Vegetables', price: 0.8, quantity: 8 },
    { name: 'Milk', category: 'Dairy', price: 2.0, quantity: 2 },
    { name: 'Eggs', category: 'Dairy', price: 1.5, quantity: 12 }
];

let groceryList = document.getElementById("groceryList");
let totalCostElement = document.getElementById("totalCost");
let totalQuantityElement = document.getElementById("totalQuantity");

function displayGroceryItems() {
    groceryList.innerHTML = "";

    let totalCost = 0;
    let totalQuantity = 0;

    groceryItems.forEach(function(item) {
        // let item = groceryItems.key;

        let itemDiv = document.createElement("div");

        itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}):
        $${item.price} - ${item.quantity} units`;

        groceryList.append(itemDiv);

        totalCost += item.price * item.quantity;
        totalQuantity += item.quantity;
    })

    //The toFixed(2) method formats the number to two decimals
    totalCostElement.textContent = totalCost.toFixed(2);

    totalQuantityElement.textContent = totalQuantity;
}

function isolateCategory(category) {
    groceryList.innerHTML = "";

    let filteredItems = groceryItems.filter((item) => item.category === category );

    filteredItems.forEach(function(item) {
        let itemDiv = document.createElement("div");

        itemDiv.innerHTML = `<b>${item.name}</b>
        (${item.category}): $${item.price} - ${item.quantity} units`;

        groceryList.append(itemDiv);
    })
}

function showAllCategories() {
    displayGroceryItems();
}

function orderItemsByCost(){
    groceryItems.sort((a, b) => b.price - a.price)
    displayGroceryItems();
}

function addItemPrompt() {
    let name = prompt("Name of the item:");
    let category = prompt("Category of the item:");
    let price = prompt("What is the price?");
    let quantity = prompt("What is the quantity?");

    if (name == "" || category == ""  || price == ""  || quantity == ""){
        return alert("A piece of information is missing!");
    }

    let priceValue = parseFloat(price);

    let quantityValue = parseInt(quantity);

    if ( priceValue == isNaN || quantityValue == isNaN) {
        return alert("Not a valid numeric value!");
    }

    const newItem = {
        name: name,
        category: category,
        price: price,
        quantity: quantityValue
    }
    groceryItems.push(newItem);

    displayGroceryItems();
}

displayGroceryItems();



