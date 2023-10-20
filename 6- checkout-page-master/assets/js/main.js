// Variables
const firstDecrement = document.querySelector('.firstDecrement');
const firstIncrement = document.querySelector('.firstIncrement');
const firstQuantity = document.querySelector('.firstQuantity');

const secondDecrement = document.querySelector('.secondDecrement');
const secondIncrement = document.querySelector('.secondIncrement');
const secondQuantity = document.querySelector('.secondQuantity');

const total = document.querySelector('.totalValue');

let firstQuantityValue = 1;
let secondQuantityValue = 1;
let totalQuantity = 148.98;


// Events
firstDecrement.addEventListener('click', () => {
    if (firstQuantityValue > 1) {
        firstQuantityValue--;
        updateFirstQuantity();
        updateTotal();
    }
});

firstIncrement.addEventListener('click', () => {
    firstQuantityValue++;
    updateFirstQuantity();
    updateTotal();
});


secondDecrement.addEventListener('click', () => {
    if (secondQuantityValue > 1) {
        secondQuantityValue--;
        updateSecondQuantity();
        updateTotal();
    }
});

secondIncrement.addEventListener('click', () => {
    secondQuantityValue++;
    updateSecondQuantity();
    updateTotal();
});


// Functions
function updateFirstQuantity() {
    firstQuantity.textContent = firstQuantityValue;
}

function updateSecondQuantity() {
    secondQuantity.textContent = secondQuantityValue;
}

function updateTotal() {
    const totalPrice = (firstQuantityValue * 54.99) + (secondQuantityValue * 74.99);
    total.textContent = `$ ${totalPrice.toFixed(2)}`;
}