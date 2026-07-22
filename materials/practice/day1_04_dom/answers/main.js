// --- 要素の取得 ---
const heading = document.querySelector('#heading');
console.log(heading);

const photo = document.querySelector('.photo');
console.log(photo);

const link = document.querySelector('#link');
console.log(link);

// --- プロパティの確認（取得）---
console.log(heading.innerText);
console.log(photo.src);
console.log(photo.alt);
console.log(link.href);

// --- プロパティの書き換え ---
heading.innerText = '書き換えた見出し';

photo.src = './images/photo-b.svg';
photo.alt = '画像B';

link.href = 'https://example.org/';
link.innerText = 'example.org へのリンク';
