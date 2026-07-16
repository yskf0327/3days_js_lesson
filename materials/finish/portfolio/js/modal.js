const worksImages = document.querySelectorAll('.works-card__img>img');
const dialog = document.querySelector('.works-dialog');
const dialogImage = document.querySelector('.works-dialog__img');
const dialogCloseBtn = document.querySelector('.works-dialog__close-btn');

worksImages.forEach((image) => {
  image.addEventListener('click', () => {
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialog.showModal();
  });
});

dialogCloseBtn.addEventListener('click', () => {
  dialog.close();
});