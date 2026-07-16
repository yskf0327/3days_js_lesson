const btnPagetop = document.querySelector('.btn-pagetop');
const observeTarget = document.querySelector('#hero');
const options = { threshold: 0, rootMargin: '-30% 0px 0px 0px' };

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    btnPagetop.classList.remove('is-shown');
  } else {
    btnPagetop.classList.add('is-shown');
  }
}, options);

observer.observe(observeTarget);

btnPagetop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});