// Movies for each row
const trending = [
    { title: "Heathers", img: "https://upload.wikimedia.org/wikipedia/en/5/50/Heathers_film_poster.jpg" },
    { title: "Avatar", img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg" },
    { title: "Titanic", img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Titanic_poster.jpg" }
];

const popular = [
    { title: "Stranger Things", img: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" },
    { title: "The Boys", img: "https://image.tmdb.org/t/p/w500/ty5h5SeF0dr28aOmbf5tC6tpLr1.jpg" }
];

const topPicks = [
    { title: "Breaking Bad", img: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png" },
    { title: "Spider-Man: No Way Home", img: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_No_Way_Home_poster.jpg" }
];

// Add movies automatically to page
function loadMovies(rowId, movies) {
    const container = document.getElementById(rowId);
    movies.forEach(movie => {
        const img = document.createElement('img');
        img.src = movie.img;
        img.alt = movie.title;
        container.appendChild(img);
    });
}

// Display all rows
loadMovies('trending', trending);
loadMovies('popular', popular);
loadMovies('topPicks', topPicks);