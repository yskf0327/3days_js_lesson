// 各ブロックを try/catch で囲っているのは、この練習ファイル特有の都合（1つのバグで
// 他のバグの検証が止まらないようにするため）であり、教材で教えている書き方ではない。

// ① class名の表記ゆれ
try {
  const toggleBtn1 = document.querySelector('.toggle-bnt-1');
  const panel1 = document.querySelector('.panel-1');
  toggleBtn1.addEventListener('click', () => {
    panel1.classList.toggle('is-open');
  });
} catch (error) {
  console.error('[①]', error);
}

// ② セレクタの記号忘れ
try {
  const openBtn2 = document.querySelector('open-btn-2');
  const message2 = document.querySelector('.message-2');
  openBtn2.addEventListener('click', () => {
    message2.hidden = false;
  });
} catch (error) {
  console.error('[②]', error);
}

// ③ querySelector() と querySelectorAll() の混同
try {
  const cards3 = document.querySelector('.card-3');
  cards3.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-active');
    });
  });
} catch (error) {
  console.error('[③]', error);
}

// ④ イベント名のタイプミス
try {
  const alertBtn4 = document.querySelector('.alert-btn-4');
  alertBtn4.addEventListener('onclick', () => {
    alert('クリックされました');
  });
} catch (error) {
  console.error('[④]', error);
}

// ⑥ classList は切り替わっているのに見た目が変わらない
try {
  const toggleBtn6 = document.querySelector('.toggle-btn-6');
  const box6 = document.querySelector('.box-6');
  toggleBtn6.addEventListener('click', () => {
    box6.classList.toggle('is-open');
  });
} catch (error) {
  console.error('[⑥]', error);
}
