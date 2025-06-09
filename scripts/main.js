import { illustrationDetails } from "../data/index.js";

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




let illustration = ''

illustrationDetails.forEach((Details) => {
 illustration += `
  <div class="illustration-container">
        <div class="image-container">
          <img class="illustration-image" src="${Details.image}">
        </div>
         <div class="illustration-desc">
          <p class="illustration-title">${Details.imageTitle}</p>
          <div class="illustration-rating">
            <img class="rating-stars" src="${Details.ratings.stars}">
            <div class="illustration-rating-count">
              ${Details.ratings.count}
            </div>
          </div>
         </div>
      </div>
 `
})


const mainGrid = document.querySelector('.js-illustration-grid');

if (mainGrid) {
  mainGrid.innerHTML = illustration
} else {
  console.log('could not find an HTML for this')
}