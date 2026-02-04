// Movies with image, link, year, description
const trending = [
    { title: "Heathers", img: "https://upload.wikimedia.org/wikipedia/en/5/50/Heathers_film_poster.jpg", link: "https://www.youtube.com/embed/9Zi1FkW7sxo", year: "1988", description: "A dark comedy about high school social cliques and murder." },
    { title: "Avatar", img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg", link: "https://www.youtube.com/embed/5PSNL1qE6VY", year: "2009", description: "A paraplegic Marine is sent to Pandora and becomes torn between orders and protecting the alien world." },
    { title: "Titanic", img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Titanic_poster.jpg", link: "https://www.youtube.com/embed/kVrqfYjkTdQ", year: "1997", description: "A love story unfolds on the doomed ship Titanic." }
];

const popular = [
    { title: "Stranger Things", img: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", link: "https://www.youtube.com/embed/b9EkMc79ZSU", year: "2016", description: "A group of kids uncover supernatural mysteries in their town." },
    { title: "The Boys", img: "https://image.tmdb.org/t/p/w500/ty5h5SeF0dr28aOmbf5tC6tpLr1.jpg", link: "https://www.youtube.com/embed/06QK2WKvJ7s", year: "2019", description: "A dark take on superheroes and corporate corruption." }
];

const topPicks = [
    { title: "Breaking Bad", img: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png", link: "https://www.youtube.com/embed/HhesaQXLuRY", year: "2008", description: "A chemistry teacher becomes a meth kingpin." },
    { title: "Spider-Man: No Way Home", img: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_No_Way_Home_poster.jpg", link: "https://www.youtube.com/embed/JfVOs4VSpmA", year: "2021", description: "Spider-Man deals with multiverse chaos after his identity is revealed." }
];

let currentHeroLink = trending[0].link;
let currentMovieDescription = trending[0].description;

// Load movies
function loadMovies(rowId, movies) {
    const container = document.getElementById(rowId);
    container.innerHTML = "";
    movies.forEach(movie => {
        const img = document.createElement('img');
        img.src = movie.img;
        img.alt = movie.title;
        img.title = movie.title;
        img.addEventListener('click', () => {
            // Update hero
            document.getElementById('heroTitle').textContent = movie.title;
            document.getElementById('heroYear').textContent = `${movie.year}`;
            currentHeroLink = movie.link;
            currentMovieDescription = movie.description;
        });
        container.appendChild(img);
    });
}

loadMovies('trending', trending);
loadMovies('popular', popular);
loadMovies('topPicks', topPicks);

// Play button opens video modal
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
document.getElementById('playButton').addEventListener('click', () => {
    videoFrame.src = currentHeroLink + "?autoplay=1";
    videoModal.style.display = "block";
});
document.getElementById('closeVideo').addEventListener('click', () => {
    videoFrame.src = "";
    videoModal.style.display = "none";
});

// Info button opens info modal
const infoModal = document.getElementById('infoModal');
document.getElementById('infoButton').addEventListener('click', () => {
    document.getElementById('infoTitle').textContent = document.getElementById('heroTitle').textContent;
    document.getElementById('infoDesc').textContent = currentMovieDescription;
    infoModal.style.display = "block";
});
document.getElementById('closeInfo').addEventListener('click', () => {
    infoModal.style.display = "none";
});

// Search movies
document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    [trending, popular, topPicks].forEach(arr => {
        arr.forEach(movie => {
            const img = document.querySelector(`img[alt="${movie.title}"]`);
            img.style.display = movie.title.toLowerCase().includes(term) ? "" : "none";
        });
    });
});