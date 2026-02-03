const API_KEY = "PUT_YOUR_KEY_HERE";
const API_URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;

fetch(API_URL)
  .then(res => res.json())
  .then(data => showMovies(data.results));

function showMovies(movies) {
  const container = document.getElementById("movies");
  container.innerHTML = "";

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
      <p>${movie.title || movie.name}</p>
    `;
    container.appendChild(div);
  });
}
