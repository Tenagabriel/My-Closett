import { outfitIllustrations } from "../data/illustration-images.js";

let filteredImage = '';

let filteredImages = outfitIllustrations

const url = new URL(window.location.href)
const search = url.searchParams.get('Type')
if (search) {
  filteredImages = outfitIllustrations.filter((filteredDetails) => {
   return filteredDetails.Type.toLowerCase().includes(search.toLowerCase())
  })
}

if (filteredImages.length === 0) {
  filteredImage = '<p>No results found for your search. search for outfits such as jean, Native, gown, suit or casual</p>';
}

filteredImages.forEach((images) => {
 filteredImage += `
    <div class="filtered-container">
        <img class="filtered-image" src="${images.image}">
      </div>
 `
})

const displayFiltered = document.querySelector('.js-filtered-grid');
if (displayFiltered) {
  displayFiltered.innerHTML = filteredImage
} else {
  console.error('could not find an HTML for this')
}