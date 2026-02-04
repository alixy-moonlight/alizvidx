// Movies with image + link (clicking poster opens link)
const trending = [
    { title: "Heathers", img: "https://upload.wikimedia.org/wikipedia/en/5/50/Heathers_film_poster.jpg", link: "https://www.youtube.com/watch?v=9Zi1FkW7sxo" },
    { title: "Avatar", img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg", link: "https://www.youtube.com/watch?v=5PSNL1qE6VY" },
    { title: "Titanic", img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Titanic_poster.jpg", link: "https://www.youtube.com/watch?v=kVrqfYjkTdQ" }
];

const popular = [
    { title: "Stranger Things", img: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", link: "https://www.youtube.com/watch?v=b9EkMc79ZSU" },
    { title: "The Boys", img: "https://image.tmdb.org/t/p/w500/ty5h5SeF0dr28aOmbf5tC6tpLr1.jpg", link: "https://www.youtube.com/watch?v=06QK2WKvJ7s" }
];

const topPicks = [
    { title: "Breaking Bad", img: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png", link: "https://www.youtube.com/watch?v=HhesaQXLuRY" },
    { title: "Spider-Man: No Way Home", img: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_No_Way_Home_poster.jpg", link: "https://www.youtube.com/watch?v=JfVOs4VSpmA" }
];

let currentHeroLink = trending[0].link;

// Function to add movies to page
function loadMovies(rowId, movies) {
    const container = document.getElementById(rowId);
    container.innerHTML = "";
    movies.forEach(movie => {
        const img = document.createElement('img');
        img.src = movie.img;
        img.alt = movie.title;
        img.title = movie.title;
        img.addEventListener('click', () => {
            // Change hero to clicked movie
            document.querySelector('.hero h1').textContent = movie.title;
            currentHeroLink = movie.link;
        });
        container.appendChild(img);
    });
}

// Load all rows
loadMovies('trending', trending);
loadMovies('popular', popular);
loadMovies('topPicks', topPicks);

// Play button
document.getElementById('playButton').addEventListener('click', () => {
    window.open(currentHeroLink, "_blank");
});

// Info button
document.getElementById('infoButton').addEventListener('click', () => {
    alert("More info about: " + document.querySelector('.hero h1').textContent);
});

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    [trending, popular, topPicks].forEach(arr => {
        arr.forEach(movie => {
            const img = document.querySelector(`img[alt="${movie.title}"]`);
            if (movie.title.toLowerCase().includes(searchTerm)) {
                img.style.display = "";
            } else {
                img.style.display = "none";
            }
        });
    });
});