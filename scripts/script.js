const navbar = document.querySelector('.header .navbar');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-navbar');

const privacyCheckbox = document.getElementById('privacyPolicy');
const bookButton = document.getElementById('bookButton');

menuBtn.onclick = () =>{
   navbar.classList.add('active');
};

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
 };

window.onscroll = () =>{
   navbar.classList.remove('active');
};

// Enable button when checkbox is checked
privacyCheckbox.addEventListener('change', function() {
   if (this.checked) {
      bookButton.style.pointerEvents = 'auto';
         bookButton.style.opacity = '1';
      } else {
         bookButton.style.pointerEvents = 'none';
         bookButton.style.opacity = '0.5';
      }
   });

   function enableBooking() {
      return privacyCheckbox.checked;
}