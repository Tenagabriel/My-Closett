import { outfitIllustrations } from "../data/illustration-images.js";

const searchBar = document.querySelector('.js-search-bar');
const placeholders = ['Search for party looks', 'Search for casual vibes', 'Search for wedding outfits']
let index = 0;
setInterval(() => {
 searchBar.placeholder = placeholders[index];
 index += 1;
 if (index >= placeholders.length) {
  index = 0
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

const menuButton = document.querySelector('.menu-btn');
const sideBar = document.querySelector('.side-bar')
 menuButton.addEventListener('click', () => {
  sideBar.classList.toggle('is-showing')
 })

 const sideBarHome = document.querySelector('.side-bar-home');
 sideBarHome.addEventListener('click', () => {
  window.location.href = 'index.html'
 })

  const sideBarTrend = document.querySelector('.side-bar-trend');
 sideBarTrend.addEventListener('click', () => {
  window.location.href = 'trends.html'
 })
 
  const sideBarExplore = document.querySelector('.side-bar-explore');
 const exploreMenu = document.querySelector('.explore-menu')
 sideBarExplore.addEventListener('click', () => {
   exploreMenu.classList.toggle('is-reveal')
 })

 const sideBarAboutUs = document.querySelector('.side-bar-about-us');
const aboutPopup = document.querySelector('.about-popup');
const popupClose = document.querySelector('.popup-close');

sideBarAboutUs.addEventListener('click', () => {
  aboutPopup.classList.add('is-visible'); 
});

popupClose.addEventListener('click', () => {
  aboutPopup.classList.remove('is-visible'); 
});

const sideBarContact = document.querySelector('.side-bar-contact')
const sideBarMenu = document.querySelector('.contact-menu')

sideBarContact.addEventListener('click', () => {
  sideBarMenu.classList.toggle('is-shown')
})

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