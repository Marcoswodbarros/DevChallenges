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
let shipping = 19;
let totalQuantity = 129.98;

let clickCount = 0;


// Events
firstDecrement.addEventListener('click', () => {
    if (firstQuantityValue > 1) {
        firstQuantityValue--;
        updateFirstQuantity();
        updateTotal();

        clickCount++;
        if (clickCount >= 2) {
            firstDecrement.style.userSelect = 'none';
        }
    }
});

firstIncrement.addEventListener('click', () => {
    firstQuantityValue++;
    updateFirstQuantity();
    updateTotal();

    clickCount++;
        if (clickCount >= 2) {
            firstIncrement.style.userSelect = 'none';
        }
});


secondDecrement.addEventListener('click', () => {
    if (secondQuantityValue > 1) {
        secondQuantityValue--;
        updateSecondQuantity();
        updateTotal();

        clickCount++;
        if (clickCount >= 2) {
            secondDecrement.style.userSelect = 'none';
        }
    }
});

secondIncrement.addEventListener('click', () => {
    secondQuantityValue++;
    updateSecondQuantity();
    updateTotal();

    clickCount++;
        if (clickCount >= 2) {
            secondIncrement.style.userSelect = 'none';
        }
});


// Functions
function updateFirstQuantity() {
    firstQuantity.textContent = firstQuantityValue;
}

function updateSecondQuantity() {
    secondQuantity.textContent = secondQuantityValue;
}

function updateTotal() {
    const totalPrice = ((firstQuantityValue * 54.99) + (secondQuantityValue * 74.99) + shipping);
    total.textContent = `$ ${totalPrice.toFixed(2)}`;
}
