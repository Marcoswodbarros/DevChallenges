// Variables
const firstDecrement = document.querySelector('.firstDecrement');
const firstIncrement = document.querySelector('.firstIncrement');
const firstQuantity = document.querySelector('.firstQuantity');

let quantity = 1;


// Events
firstDecrement.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        updateFirstQuantity();
    }
});

firstIncrement.addEventListener('click', () => {
    quantity++;
    updateFirstQuantity();
});


// Functions
function updateFirstQuantity() {
    firstQuantity.textContent = quantity;
}