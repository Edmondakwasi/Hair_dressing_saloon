let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () =>{
   navbar.classList.add('active');
};

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
 };

window.onscroll = () =>{
   navbar.classList.remove('active');
};

if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
     navigator.serviceWorker
       .register('/service-worker.js')
       .then(registration => {
         console.log('ServiceWorker registration successful');
       })
       .catch(error => {
         console.log('ServiceWorker registration failed: ', error);
       });
   });
 }