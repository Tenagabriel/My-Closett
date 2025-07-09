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



const searchIcon =document.querySelector('.search-icon');
searchIcon.addEventListener('click', () => {
 const searchBar = document.querySelector('.js-search-bar');
 const value = searchBar.value;
  if (value) {
      searchBar.value = '';
    window.location.href = `filtered.html?Type=${encodeURIComponent(value)}`
  } else {
    alert('please, search for an item')
  }
})

const menuButton = document.querySelector('.menu-btn')
const sideBar = document.querySelector('.side-bar');
menuButton.addEventListener('click', () => {
 sideBar.classList.toggle('is-showing')
 if (sideBar.classList.contains('is-showing') ) {
   document.body.style.overflow =  'hidden'
 }
})

 
const userIcon = document.querySelector('.user-icon-button');
const signPop = document.querySelector('.signup-popup');
const downArrow = document.querySelector('.down-arrow-img');
const upArrow = document.querySelector('.up-arrow-img');

userIcon.addEventListener('click', () => {
  downArrow.classList.add('is-show');
  upArrow.classList.add('is-showed');
 signPop.classList.add('is-shown');
 document.body.style.overflow = 'hidden';
})





document.addEventListener('click', (event) => {
  const userIconButton = document.querySelector('.user-icon-button');
  const signupPopup = document.querySelector('.signup-popup');
  const downArrow = document.querySelector('.down-arrow-img');
  const upArrow = document.querySelector('.up-arrow-img');
  const menuButton = document.querySelector('.menu-btn');
  const sideBar = document.querySelector('.side-bar');

  const isClickInsidePopup = signupPopup.contains(event.target);
  const isClickOnUserButton = userIconButton.contains(event.target);

  if (!isClickInsidePopup && !isClickOnUserButton && signupPopup.classList.contains('is-shown')) {
    signupPopup.classList.remove('is-shown');
    downArrow.classList.remove('is-show');
    upArrow.classList.remove('is-showed');
    document.body.style.overflow = '';
  }

  const isClickInsideSideBar = sideBar.contains(event.target);
  const isClickOnMenuButton = menuButton.contains(event.target);
  if (!isClickInsideSideBar && !isClickOnMenuButton && sideBar.classList.contains('is-showing')) {
    sideBar.classList.remove('is-showing');
     document.querySelector('.explore-menu').classList.remove('is-reveal');
    document.querySelector('.contact-menu').classList.remove('is-shown');
    document.body.style.overflow = '';
  }
});

const signInOp = document.querySelector('.sign-in-op')
const signInReg = document.querySelector('.reg-fx')
const cancelButton = document.querySelector('.cancel-btn');
signInOp.addEventListener('click', () => {
  signInReg.classList.add('is-pop')
})

cancelButton.addEventListener('click', () => {
  signInReg.classList.remove('is-pop');
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





const explorePop = document.querySelector('.explore-popup');
const headersList = document.querySelector('.headers-ul-li-explore')

headersList.addEventListener('mouseenter', () => {
  explorePop.classList.add('nav-shown');
  headersList.classList.add('is-hover');
});


explorePop.addEventListener('mouseenter', () => {
  explorePop.classList.add('nav-shown')
})


explorePop.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!headersList.matches(':hover') && !explorePop.matches(':hover')) {
      explorePop.classList.remove('nav-shown');
      headersList.classList.remove('is-hover')
    }
  }, 100);
});

headersList.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!explorePop.matches(':hover') && !headersList.matches(':hover')) {
      explorePop.classList.remove('nav-shown');
      headersList.classList.remove('is-hover')
    }
  }, 100);
});





let illustration = ''

 illustrationDetails.forEach((Details) => {
 illustration += `
    <div class="popular-slide">
          <img class="illustration-img" src="${Details.image}">
          <p class="illustration-title">${Details.imageTitle}</p>
    </div>
 `
})


const mainGrid = document.querySelector('.popular-slider');

if (mainGrid) {
  mainGrid.innerHTML = illustration
} else {
  console.log('could not find an HTML for this')
}

const previousButton = document.querySelector('.prev-btn')
const nextButton = document.querySelector('.nxt-btn');
const slider = document.querySelector('.popular-slider')

const slideWidth = 300 + 16;

if (previousButton && nextButton && slider) {
  previousButton.addEventListener('click', () => {
    slider.scrollLeft -= slideWidth;
  });

  nextButton.addEventListener('click', () => {
    slider.scrollLeft += slideWidth; 
  });
} else {
  console.error('Slider elements not found. Check selectors or DOM loading.');
}

