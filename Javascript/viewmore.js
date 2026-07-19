// NOTE: This JS file is for the pages: view more pages.

// Search bar

const input = document.getElementById('searchInput');

input.addEventListener('input', function() {
  const searchText = input.value.toLowerCase();
  const cards = document.querySelectorAll('.explore-card');

cards.forEach(function(card) {
  const title = card.querySelector('h2').innerText.toLowerCase();
  if (title.includes(searchText)) {
    card.style.display = '';
  } else {
    card.style.display = 'none';
  }
});
});