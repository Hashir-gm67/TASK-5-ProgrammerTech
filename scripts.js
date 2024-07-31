document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('orderForm');
    const closeBtn = document.getElementById('close-btn');

    // Handle form submission
    orderForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const pizzaType = document.getElementById('pizzaType').value;
        const quantity = document.getElementById('quantity').value;
        const address = document.getElementById('address').value;

        alert(`Order Submitted!\nPizza Type: ${pizzaType}\nQuantity: ${quantity}\nAddress: ${address}`);
        
        // Optionally, send data to a server or API here

        // Close the form after submission
        orderForm.style.display = 'none';
    });

    // Close the order form when "Close" button is clicked
    closeBtn.addEventListener('click', function () {
        orderForm.style.display = 'none';
    });
});
