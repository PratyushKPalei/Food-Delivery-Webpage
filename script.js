// script.js

let cart = [];

// Function to add items to the cart
function addToCart(itemName, price) {
    cart.push({ itemName, price });
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartDisplay = document.getElementById('cart-display');
    cartDisplay.innerHTML = ''; // Clear existing cart content
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.itemName} - $${item.price.toFixed(2)}`;
        cartDisplay.appendChild(cartItem);
    });

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to handle checkout (simple alert for demo purposes)
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to the cart before checking out.");
    } else {
        alert("Thank you for your order! Your total is " + document.getElementById('total-price').textContent);
        cart = [];  // Clear cart after checkout
        updateCart(); // Update the cart display after checkout
    }
}
