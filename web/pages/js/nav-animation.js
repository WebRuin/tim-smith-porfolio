const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.menu-toggle');
const menuToggle = document.querySelector('.menu-toggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
});
