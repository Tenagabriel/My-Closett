const searchBar = document.querySelector('.search-bar');
const placeholders = ['Search for wedding outfits', 'Search for party looks', 'Search for casual vibes'];
let index = 0;
setInterval(() => {
  searchBar.placeholder = placeholders[index];
  index += 1;
  if (index >= placeholders.length) {
    index = 0;
  }
}, 2000);