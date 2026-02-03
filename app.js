const movies = [
  {
    title: "Heathers",
    img: "https://upload.wikimedia.org/wikipedia/en/5/50/Heathers_film_poster.jpg",
    link: "https://www.youtube.com/results?search_query=Heathers+1989+trailer"
  },
  {
    title: "JoJo's Bizarre Adventure",
    img: "https://upload.wikimedia.org/wikipedia/en/3/3f/JoJo_PB_DVD.jpg",
    link: "https://www.youtube.com/results?search_query=JoJo+trailer"
  }
];

const container = document.getElementById("movies");

movies.forEach(m => {
  container.innerHTML += `
    <div>
      <a href="${m.link}" target="_blank">
        <img src="${m.img}">
      </a>
      <p>${m.title}</p>
    </div>
  `;
});
