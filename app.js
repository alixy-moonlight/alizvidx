const movies = [
  {
    title: "Avatar",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
  },
  {
    title: "Heathers",
    image: "https://upload.wikimedia.org/wikipedia/en/5/50/Heathers_film_poster.jpg"
  }
];

const container = document.getElementById("movies");

movies.forEach(movie => {
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="${movie.image}">
    <p>${movie.title}</p>
  `;
  container.appendChild(div);
});