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

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Add more temple objects here...
        {
            templeName: "Las Vegas Nevada",
            location: "Las Vegas, Nevada ,United States",
            dedicated: "1989, December, 18",
            area: 80350,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/las-vegas-nevada-temple/las-vegas-nevada-temple-35604-main.jpg"
        }
    ];

    // Function to create temple cards
    const createTempleCards = (temples) => {
        const main = document.querySelector('main');
        main.innerHTML = ''; // Clear existing content

        temples.forEach(temple => {
            const figure = document.createElement('figure');
            figure.innerHTML = `
                <figcaption>
                    <h2>${temple.templeName}</h2>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area} sq ft</p>
                </figcaption>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="210">
            `;
            main.appendChild(figure);
        });
    };

    // Initial display of all temples
    createTempleCards(temples);

    // Filter functions
    const filterOld = () => createTempleCards(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900));
    const filterNew = () => createTempleCards(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
    const filterLarge = () => createTempleCards(temples.filter(temple => temple.area > 90000));
    const filterSmall = () => createTempleCards(temples.filter(temple => temple.area < 10000));
    const filterAll = () => createTempleCards(temples);

    // Event listeners for navigation
    document.querySelector('nav ul').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const filter = event.target.textContent.toLowerCase();
            switch (filter) {
                case 'old':
                    filterOld();
                    break;
                case 'new':
                    filterNew();
                    break;
                case 'large':
                    filterLarge();
                    break;
                case 'small':
                    filterSmall();
                    break;
                case 'home':
                    filterAll();
                    break;
            }
        }
    });
});
