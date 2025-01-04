let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

const termsCheckbox = document.getElementById('accept-terms');
const bookBtn = document.getElementById('book-btn');

menuBtn.onclick = () =>{
   navbar.classList.add('active');
};

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
 };

window.onscroll = () =>{
   navbar.classList.remove('active');
};

//accept terms and conditions.
    termsCheckbox.addEventListener('change', function() {
        if (this.checked) {
            bookBtn.style.pointerEvents = 'auto';  // Enable the button
            bookBtn.style.opacity = '1';           // Make the button fully visible
        } else {
            bookBtn.style.pointerEvents = 'none';  // Disable the button
            bookBtn.style.opacity = '0.5';         // Make the button appear disabled
        }
    });