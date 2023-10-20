const decrementButton = document.querySelector(".firstDecrement");
const incrementButton = document.querySelector(".firstIncrement");
const quantityDisplay = document.querySelector(".firstQuant");

let quantity = 1;

decrementButton.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;

        updateQuantityDisplay();
    }
});

incrementButton.addEventListener('click', () => {
    quantity++;

    updateQuantityDisplay();
});

function updateQuantityDisplay () {
    quantityDisplay.textContent = quantity;
}