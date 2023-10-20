// Functions
function decrement(quantDisplay) {
    const quantity = parseInt(quantDisplay.textContent);
    if (quantity > 1) {
        quantDisplay.textContent = quantity - 1;
    }
}

function increment(quantDisplay) {
    const quantity = parseInt(quantDisplay.textContent);
    quantDisplay.textContent = quantity + 1;
}


// Variables
const decrementButtons = document.querySelectorAll(".decrement");
const incrementButtons = document.querySelectorAll(".increment");
const quantityDisplays = document.querySelectorAll(".quantity");


// Events
decrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => decrement(quantityDisplays[index]));
});

incrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => increment(quantityDisplays[index]));
});
