let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

let deferredPrompt;

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


window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  showInstallPromotion();
});

// Example function to show install promotion
function showInstallPromotion() {
  const installButton = document.createElement('button');
  installButton.textContent = 'Install App';
  installButton.addEventListener('click', (e) => {
    // Hide the app provided install promotion
    hideInstallPromotion();
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      }
      deferredPrompt = null;
    });
  });
  document.body.appendChild(installButton);
}