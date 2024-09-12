let orderList = [];
let totalPrice = 0;

const addToOrderButtons = document.querySelectorAll('.add-to-order');
const orderListElement = document.getElementById('orderList');
const totalPriceElement = document.getElementById('totalPrice');
const reviewListElement = document.getElementById('reviewList');

addToOrderButtons.forEach(button => {
    button.addEventListener('click', function() {
        const menuItem = this.parentElement;
        const itemName = menuItem.querySelector('p').textContent;
        const itemPrice = parseFloat/*change price from string to int in order to calculate*/(menuItem.getAttribute('data-price'));

        // Add item to order
        orderList.push({ name: itemName, price: itemPrice });
        updateOrder();//updates items on the list
    });
});

function updateOrder() {
    // Clear current order list
    orderListElement.innerHTML = '';

    // Add each item to the DOM
    orderList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        orderListElement.appendChild(li);
    });

    // Update total price
    totalPrice = orderList.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Handle review submission
document.getElementById('submitReview').addEventListener('click', function() {
    const reviewInput = document.getElementById('reviewInput');
    const reviewText = reviewInput.value;

    if (reviewText.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = reviewText;
        reviewListElement.appendChild(li);

        // Clear input after submission
        reviewInput.value = '';
    }
});

// Handle order placement
document.getElementById('placeOrder').addEventListener('click', function() {
    alert(`Order placed! Total: $${totalPrice.toFixed(2)}`);
    // Clear order
    orderList = [];
    updateOrder();
});