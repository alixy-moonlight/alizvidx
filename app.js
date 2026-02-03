function searchMovies(text) {
  const cards = document.querySelectorAll("#movies div");
  cards.forEach(card => {
    const title = card.innerText.toLowerCase();
    card.style.display = title.includes(text.toLowerCase()) ? "block" : "none";
  });
}
