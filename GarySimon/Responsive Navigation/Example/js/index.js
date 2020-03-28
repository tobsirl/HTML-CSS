const open = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
const exit = document.getElementById('exit-btn');

open.addEventListener('click', () => {
  nav.classList.add('open-nav');
});

exit.addEventListener('click', () => {
  nav.classList.remove('open-nav');
});
