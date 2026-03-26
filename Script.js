let search = document.getElementById("search");

search.addEventListener("keyup", function() {
  let filter = search.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});