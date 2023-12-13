let navBar = document.getElementById('nav');
let barBtn = document.getElementById('bar');

barBtn.addEventListener('click', () => {
   if (navBar.className === 'nav') {
      navBar.className += ' responsive';
   } else {
      navBar.className = 'nav';
   }
});

// showNavBar = () => {
//    if (barBtn.className === 'barBtn') {
//       navBar.className += ' responsive';
//    } else {
//       navBar.className = 'nav';
//    }
// };

let index = 1;

showSlider(index);

function nextSlide(n) {
   showSlider((index += n));
}

function currentSlide(n) {
   showSlider((index = n));
}

function showSlider(n) {
   let i;
   let slides = document.getElementsByClassName('slides');
   let dots = document.getElementsByClassName('dot');
   if (n > slides.length) {
      index = 1;
   }
   if (n < 1) {
      index = slides.length;
   }

   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
   }

   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
   }
   slides[index - 1].style.display = 'block';
   dots[index - 1].className += ' active';
}
