const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product options dynamically
window.onload = function() {
    const productNameSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });

    // Display initial review count
    console.log('Initial Review Count:', localStorage.getItem('reviewCount'));
};

// Initialize review count in local storage if not present
if (localStorage.getItem('reviewCount') === null) {
    localStorage.setItem('reviewCount', 0);
}

// Increment review count on form submission
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent form submission for demonstration purposes
    //event.preventDefault();

    let reviewCount = parseInt(localStorage.getItem('reviewCount'), 10);
    localStorage.setItem('reviewCount', reviewCount + 1);

    // Display updated review count
    console.log('Updated Review Count:', localStorage.getItem('reviewCount'));

    // Allow form submission to proceed (remove this line if preventing submission)
    // event.target.submit();
});
