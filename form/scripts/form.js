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
};

// Counter for the number of reviews completed by the user
if (localStorage.getItem('reviewCount') === null) {
    localStorage.setItem('reviewCount', 0);
}

document.querySelector('form').addEventListener('submit', function() {
    let reviewCount = parseInt(localStorage.getItem('reviewCount'));
    localStorage.setItem('reviewCount', reviewCount + 1);
});
