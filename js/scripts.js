const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'slide',
    speed: 1500,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    //start autoplay
    autoplay: {
        delay: 5000,
    },
  });

// stuff to toggle titles based on screen size
function adjustTitleBasedOnScreenSize() {
  var urbanForestryTitle = document.getElementById("urbanForestryTitle");
  var ufTitle = document.getElementById("ufTitle");

  if (window.innerWidth < 768) {
      // show UF on small screens
      ufTitle.style.display = "block";
      urbanForestryTitle.style.display = "none";
  } else {
      // show Urban Forestry on larger screens
      urbanForestryTitle.style.display = "block";
      ufTitle.style.display = "none";
  }
}

// adjust title when the page is loaded
window.addEventListener("load", adjustTitleBasedOnScreenSize);

// adjust title whenever the window is resized
window.addEventListener("resize", adjustTitleBasedOnScreenSize);

//Put current year in footer
const theYear = new Date();
document.querySelector('#year').textContent = theYear.getFullYear()

