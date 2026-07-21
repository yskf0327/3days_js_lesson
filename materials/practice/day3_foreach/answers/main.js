const items = document.querySelectorAll('.item');

items.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(item.textContent);
  });
});
