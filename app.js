// Public domain movies
const trending = [
  { title: "Night of the Living Dead", img: "https://upload.wikimedia.org/wikipedia/en/7/7a/Night_of_the_Living_Dead_%281968_film%29.jpg", link: "https://archive.org/download/NightOfTheLivingDead1968_201/NightOfTheLivingDead1968_512kb.mp4", year:"1968", description:"A group of people hide in a farmhouse from zombies." },
  { title: "Plan 9 from Outer Space", img: "https://upload.wikimedia.org/wikipedia/en/f/fd/Plan_9_from_Outer_Space_poster.jpg", link:"https://archive.org/download/Plan9FromOuterSpace/Plan9FromOuterSpace_512kb.mp4", year:"1959", description:"Aliens resurrect the dead to stop humans from creating a doomsday weapon." }
];

const popular = [
  { title:"The Little Shop of Horrors", img:"https://upload.wikimedia.org/wikipedia/en/5/5e/LittleShopOfHorrorsPoster.jpg", link:"https://archive.org/download/LittleShopOfHorrors/LittleShopOfHorrors.mp4", year:"1960", description:"A nerdy florist raises a plant that feeds on human blood." }
];

const topPicks = []; // Add more if you like

let currentHeroLink = trending[0].link;
let currentMovieDescription = trending[0].description;

// Load movies into rows
function loadMovies(rowId, movies){
    const container = document.getElementById(rowId);
    container.innerHTML = "";
    movies.forEach(movie => {
        const img = document.createElement('img');
        img.src = movie.img; img.alt = movie.title;
        img.addEventListener('click', () => {
            // Update hero
            document.getElementById('heroTitle').textContent = movie.title;
            document.getElementById('heroYear').textContent = movie.year;
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
const videoPlayer = document.getElementById('videoPlayer');
const closeVideo = document.getElementById('closeVideo');

document.getElementById('playButton').addEventListener('click', () => {
    videoPlayer.src = currentHeroLink;
    videoPlayer.play();
    videoModal.style.display = "block";
});

closeVideo.addEventListener('click', () => {
    videoModal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.src = "";
});

// Info button opens modal
const infoModal = document.getElementById('infoModal');
document.getElementById('infoButton').addEventListener('click', ()=>{
    document.getElementById('infoTitle').textContent = document.getElementById('heroTitle').textContent;
    document.getElementById('infoDesc').textContent = currentMovieDescription;
    infoModal.style.display = "block";
});
document.getElementById('closeInfo').addEventListener('click', ()=>{ infoModal.style.display = "none"; });

// Search bar
document.getElementById('searchInput').addEventListener('input', e=>{
    const term = e.target.value.toLowerCase();
    [trending, popular, topPicks].forEach(arr=>{
        arr.forEach(movie=>{
            const img = document.querySelector(`img[alt="${movie.title}"]`);
            img.style.display = movie.title.toLowerCase().includes(term) ? "" : "none";
        });
    });
});