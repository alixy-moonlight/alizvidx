const movies = [
  {
    title: "Heathers",
    img: "https://upload.wikimedia.org/wikipedia/en/5/50/Heathers_film_poster.jpg"
  },
  {
    title: "JoJo's Bizarre Adventure",
    img: "https://upload.wikimedia.org/wikipedia/en/2/2d/JoJo%27s_Bizarre_Adventure_logo.png"
  }
];

const container = document.getElementById("movies");

movies.forEach(movie => {
  const div = document.createElement("div");
  div.className = "movie";
  div.innerHTML = `
    <img src="${movie.img}">
    <h3>${movie.title}</h3>
  `;
  container.appendChild(div);
});
