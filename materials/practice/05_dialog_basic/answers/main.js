const openBtn = document.querySelector('#open-btn');
const dialog = document.querySelector('#sample-dialog');
const closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener('click', () => {
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
});
