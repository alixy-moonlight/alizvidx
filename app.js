const movies = [
  {
    title: "Heathers",
    image: "https://upload.wikimedia.org/wikipedia/en/5/50/Heathers_film_poster.jpg"
  },
  {
    title: "JoJo's Bizarre Adventure",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6f/JoJo%27s_Bizarre_Adventure_Part_1.jpg"
  }
];

const container = document.getElementById("movies");

movies.forEach(movie => {
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="${movie.image}" width="120"><br>
    ${movie.title}
  `;
  container.appendChild(div);
});
