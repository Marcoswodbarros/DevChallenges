// Variables
const firstDecrement = document.querySelector('.firstDecrement');
const firstIncrement = document.querySelector('.firstIncrement');
const firstQuantity = document.querySelector('.firstQuantity');
const total = document.querySelector('.totalValue');

let quantity = 1;
let totalQuantity = 148.98;


// Events
firstDecrement.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        updateFirstQuantity();
        updateTotal();
    }
});

firstIncrement.addEventListener('click', () => {
    quantity++;
    updateFirstQuantity();
    updateTotal();
});


// Functions
function updateFirstQuantity() {
    firstQuantity.textContent = quantity;
}

function updateTotal() {
    total.textContent = `$ ${quantity * 54.99}`;
}