const searchBar = document.querySelector('.js-search-bar');
let placeholders = ['Search for party looks', 'Search for casual vibes', 'Search for wedding outfits']
let index = 0;
setInterval(() => {
  searchBar.placeholder = placeholders[index];
  index += 1;
   if (index >= placeholders.length) {
    index = 0;
   }
}, 2000);


const searchButton = document.querySelector('.js-search-button');

searchButton.addEventListener('click', () => {
  let value = searchBar.value
  if (value) {
     searchBar.value = "";
     window.location.href = `filtered.html?Type=${value}`;
  } else {
    alert('please, search for an itme in the search box')
  }
})

