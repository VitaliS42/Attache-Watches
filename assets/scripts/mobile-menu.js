const menuBtn = document.querySelector('.mobile-menu__icon');
const closeBtn = document.querySelector('.mobile-menu__close');
const menuEl = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
  menuEl.classList.add('mobile-menu__visible');
})
closeBtn.addEventListener('click', () => {
  menuEl.classList.remove('mobile-menu__visible');
})