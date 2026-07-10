// メニュー開閉
const bodyElm = document.querySelector('body');
const btnNav = document.querySelector('#btn-nav');

btnNav.addEventListener('click', () => {
  bodyElm.classList.toggle('is-open');
});

// メニューのリンクをクリックしたらメニュー閉じる
const navLinks = document.querySelectorAll('.g-nav__link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    bodyElm.classList.remove('is-open');
  });
});