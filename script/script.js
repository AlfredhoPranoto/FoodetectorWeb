// Select the navbar
let navBar = document.getElementById('nav');
// Select the bar button when responsive
let barBtn = document.getElementById('bar');
// Select the navbar navigation
let dropBtnList = document.querySelectorAll('nav li');
// Select the slides
let slides = document.getElementsByClassName('slides');
// Select the dots
let dots = document.getElementsByClassName('dot');

// Add Event when user click bar button to show navbar
barBtn.addEventListener('click', () => {
   if (navBar.className === 'nav') {
      navBar.className += ' responsive';
   } else {
      navBar.className = 'nav';
   }
});

// Add click event to each droplist button
for (let i = 0; i < dropBtnList.length; i++) {
   let item = dropBtnList[i];
   item.addEventListener('click', () => {
      if (navBar.classList.contains('responsive')) {
         navBar.className = 'nav';
      }
   });
}

// Define start index
let index = 1;

// Show start slider
showSlider(index);

// function to navigate to next or prev slide
function nextSlide(n) {
   showSlider((index += n));
}

// function to show currentSlide
function currentSlide(n) {
   showSlider((index = n));
}

function showSlider(n) {
   if (n > slides.length) {
      index = 1;
   }
   if (n < 1) {
      index = slides.length;
   }

   for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
   }

   for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
   }
   slides[index - 1].style.display = 'block';
   dots[index - 1].className += ' active';
}
