const btn = document.querySelector('#btn');
const box = document.querySelector('.box');

btn.addEventListener('click', () => {
  box.classList.toggle('is-active');
});
