document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.getElementById('last-modified');
    lastModified.textContent = document.lastModified;

    const navToggle = document.createElement('button');
    navToggle.textContent = '☰';
    navToggle.classList.add('nav-toggle');
    document.querySelector('header').appendChild(navToggle);

    navToggle.addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('visible');
    });
});
