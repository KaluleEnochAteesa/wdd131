document.addEventListener('DOMContentLoaded', function() {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = document.lastModified;
    }

    const remedies = JSON.parse(localStorage.getItem('remedies')) || [];

    const tableBody = document.querySelector('#remedies-table tbody');

    remedies.forEach(function(remedy) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td data-label="Remedy Name">${remedy.remedyName}</td>
            <td data-label="Ingredients">${remedy.ingredients}</td>
            <td data-label="Preparation Method">${remedy.preparation}</td>
            <td data-label="Ailment Healed">${remedy.ailment}</td>
            <td data-label="Developer's Details">${remedy.developer}</td>
            <td data-label="Scientific Approval">${remedy.approvalStatus}</td>
            <td data-label="Receiving Royalties">${remedy.royalties ? "Yes" : "No"}</td>
        `;

        tableBody.appendChild(row);
    });

    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
