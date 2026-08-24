# 8/25 育成講師向け研修 座学パート内容（たたき台）

> `docs/trainer_workshop_brief.md`「研修内容の検討」の座学パートを具体化するファイル。
> 3日間カリキュラム本体は `docs/agenda.md` を参照。

## 位置づけ

深いCS理論ではなく、`docs/agenda.md` で扱う概念の「裏側」を理解する程度に範囲を絞る。
併せて、教材で意図的に対象外とした領域についても「なぜ扱わないか」を説明できる理解を持たせる。

## A. 扱う概念の「裏側」

| # | トピック | 裏側として説明する内容 |
|---|---|---|
| 1 | `querySelector()` | CSSセレクタに複数該当してもDOM順で最初の1件だけ返す仕様。`querySelectorAll()`との対比（NodeListが返る） |
| 2 | `addEventListener()` vs `onclick` | 同じ要素に複数ハンドラを登録できる／HTML属性への直書きと分離できる（構造と挙動の関心分離） |
| 3 | `classList.add()/remove()/toggle()` vs `style`直接操作 | 見た目の定義をCSS側に残せる（CSSとJSの責務分離）。デザイナーとの協業・保守性の観点で説明しやすい |
| 4 | 要素間のデータ受け渡し（クロージャ） | なぜ`image.src`を`dialogImage.src`に代入するだけで別要素に反映されるか。クリックハンドラがどの`image`かをどう覚えているか。**冒頭でスコープ／クロージャを知っているか前提確認を行う**（2日目最大の難所、[[project_js_lesson_feedback_2026-08]]参照） |
| 5 | `<dialog>`の`showModal()`/`close()` | 自作モーダル（`position:fixed`＋オーバーレイ）ではなく標準要素を使う理由（`backdrop`、Escで閉じる等が標準機能でついてくる） |
| 6 | `querySelectorAll()` + `forEach()` | NodeListは配列そのものではないが`forEach()`が使える理由（Iterableである点に軽く触れる） |

## B. 「対象外にした理由」を説明できるようにする項目

| # | 項目 | なぜ扱わないか（説明の芯） |
|---|---|---|
| 1 | イベント委譲（モーダル実装のオプションとしてのイベントバブリング） | 「親要素にリスナーを1つ付けて子要素の判別をする」という発想は、初心者には理解コストが高い。3日間では「型の反復」を優先。モーダルの代替実装コード例も育成講師向けに掲載 |
| 2 | `aria-*`属性 | 重要性は認めつつ、JS実装そのものに集中させるためのカリキュラム上の割り切り |
| 3 | 配列からのHTML動的生成 | テンプレートリテラルや`innerHTML`挿入はプログラミング色が強く、Webデザイナー養成科の目標から外れる |
| 4 | タブメニュー・アコーディオン | UI選定自体の話（`docs/design_brief.md`のUX文脈判断）。JSの技術的な対象外とは理由の質が違う点を区別して説明 |

## A. 詳細（想定質問・回答・教材内の該当コード）

### A-1. `querySelector()`

**想定質問**：「同じclassの要素が複数あるのに`querySelector()`で書いたらどうなりますか？」

**回答の芯**：CSSセレクタとして複数該当していても、DOM順で最初の1件だけを返す。複数を扱いたいときは`querySelectorAll()`（`NodeList`が返る）を使う。

**教材内の該当コード**（`materials/finish/portfolio/js/modal.js`）
```js
// 1件だけでいい要素 → querySelector()
const dialog = document.querySelector('.works-dialog');

// 複数扱いたい要素 → querySelectorAll()
const worksImages = document.querySelectorAll('.works-card__img>img');
```

### A-2. `addEventListener()` vs `onclick`

**想定質問**：「`onclick="..."`をHTMLに書く方法もあると聞きましたが、なぜ教材は`addEventListener()`を使うんですか？」

**回答の芯**：`onclick`属性はHTML構造の中にJSの挙動を書き込むため、構造（HTML）と振る舞い（JS）が混ざる。`addEventListener()`ならJSファイル側に処理を集約でき、同じ要素に複数のハンドラを追加登録できる（`onclick`は1つしか設定できず、後から書くと上書きされる）。

**教材内の該当コード**（`materials/finish/portfolio/js/drawer.js`）
```js
btnNav.addEventListener('click', () => {
  bodyElm.classList.toggle('is-open');
});
```

### A-3. `classList` 操作 vs `style` 直接操作

**想定質問**：「`style.display = 'block'`のようにJSで直接書き換えたらダメなんですか？」

**回答の芯**：動作はするが、見た目の定義がJSとCSSの両方に散らばる。`classList`で「クラスの有無」だけをJSが管理し、実際の見た目（色・位置・アニメーション等）はCSS側に集約する方が、デザイナーが後から見た目を調整しやすい。

**教材内の該当コード**（`materials/finish/portfolio/js/drawer.js` とCSS側）
```js
bodyElm.classList.toggle('is-open');
```
```css
/* 見た目の実体はCSS側が持つ */
.is-open .g-nav { display: block; }
```

### A-4. 要素間のデータ受け渡し（クロージャ）

**前提確認**：本題に入る前に「スコープ」「クロージャ」という言葉を知っているか出野先生・辻野先生に確認する。知っていれば軽い確認のみ（2〜3分）で次へ進む。知らない／怪しい場合は下記の説明を簡単に補う（+5分程度、座学パートのバッファで吸収）。

**想定質問**：「`image`って`forEach`の外では定義されていないのに、クリックしたときになんで使えるんですか？」／「3枚とも同じ`dialogImage`に書き込んでいるのに、なぜ表示が混ざらないんですか？」

**回答の芯**：
- 関数は、自分が定義された場所から見える変数を、実行されるときまで覚え続ける（クロージャ）。`forEach()`のコールバックが1回呼ばれるごとに、その回専用の`image`が新しく作られ、中の`addEventListener`のクリックハンドラはその`image`を覚えたままDOMにぶら下がる。だから何枚目の画像をクリックしても正しい`image`が使われる。
- `dialogImage.src = image.src;`は特別な受け渡し機構ではなく、ただのプロパティ代入（値のコピー）。クリックハンドラが`image`（クリックされた画像）と`dialogImage`（モーダル内の画像、共有の1つ）の両方に同時にアクセスできるため、この1行でコピーしているように見える。`dialogImage`側は1つしかないので、クリックのたびに正しく上書きされる。

**教材内の該当コード**（`materials/finish/portfolio/js/modal.js`）
```js
worksImages.forEach((image) => {
  image.addEventListener('click', () => {
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialog.showModal();
  });
});
```

**受講生には教えない**：`docs/agenda.md`で1日目に「変数の深い説明」を明示的に対象外としている方針と一致させ、スコープ・クロージャは受講生への新規教材化はしない。あくまで育成講師が質問に答えるための裏側知識として扱う。

### A-5. `<dialog>`の`showModal()`/`close()`

**想定質問**：「モーダルは`position: fixed`の`div`で自作するのをよく見ますが、なぜ`dialog`タグを使うんですか？」

**回答の芯**：`<dialog>`は開閉状態の管理、背景の`::backdrop`、Escキーでの閉じる挙動などが標準機能として組み込まれており、自作より少ないコードで実装できる。

**教材内の該当コード**（`materials/finish/portfolio/js/modal.js`）
```js
image.addEventListener('click', () => {
  dialogImage.src = image.src;
  dialogImage.alt = image.alt;
  dialog.showModal();
});

dialogCloseBtn.addEventListener('click', () => {
  dialog.close();
});
```

### A-6. `querySelectorAll()` + `forEach()`

**想定質問**：「`querySelectorAll()`で取得したものは配列じゃないんですか？なぜ`forEach()`が使えるんですか？」

**回答の芯**：`NodeList`は配列そのものではない別のオブジェクトだが、繰り返し可能（Iterable）な仕様を持つため`forEach()`が使える。ただし`map()`や`filter()`など他の配列メソッドは使えない点は注意（配列化したい場合は`Array.from()`を使う、という程度は触れられるとよい）。

**教材内の該当コード**（`materials/finish/portfolio/js/drawer.js`, `modal.js`）
```js
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    bodyElm.classList.remove('is-open');
  });
});
```

## B. 詳細（想定質問・回答）

### B-1. イベント委譲（モーダル実装のオプションとしてのイベントバブリング）

**想定質問**：「カードが増えるたびに`forEach()`で全部にリスナーをつけるのは非効率では？親要素1つにイベントをつければいいのでは？」

**回答の芯**：その発想（イベント委譲）は正しい。ただし親要素1つにリスナーを付け、`event.target`（や`closest()`）でクリックされた子要素を判別するロジックは初心者には理解コストが高い。3日間カリキュラムでは「取得→クリック→`classList`」という1つの型を反復して体に馴染ませることを優先し、あえて扱わない。口頭または短いデモに留める。

**育成講師が知っておくべき実装オプション**：モーダル（`modal.js`）は教材では`forEach()`で全`img`に個別にリスナーを付けているが、イベントバブリング（クリックが子要素→親要素へ伝播する仕組み）を使って`.works-list`に1つだけリスナーを付ける実装も可能。案件や質問対応で聞かれた場合に備え、コードの形を知っておく。

```js
const worksList = document.querySelector('.works-list');

worksList.addEventListener('click', (event) => {
  const image = event.target.closest('.works-card__img img');
  if (!image) return; // img以外がクリックされたら何もしない

  dialogImage.src = image.src;
  dialogImage.alt = image.alt;
  dialog.showModal();
});
```

**教材版との違い（説明のポイント）**：
- リスナーの数：`forEach()`版は画像の枚数分（N個）、バブリング版は`.works-list`に1個だけ
- クリックされた要素の特定：`forEach()`版は[[A-4]]のクロージャで`image`を暗黙に区別。バブリング版は`event.target`から`closest()`で明示的に判別する必要がある
- 初心者への説明コスト：`event.target`・`closest()`・「関係ない要素がクリックされたら無視する」というガード処理（`if (!image) return;`）が追加で必要になり、[[A-4]]より抽象度が上がる。これが対象外にした理由の芯

### B-2. `aria-*`属性

**想定質問**：「アクセシビリティ的に`aria-expanded`などを付けなくていいんですか？」

**回答の芯**：重要性は認識している。ただし本カリキュラムはJS実装そのものの理解に受講生の意識を集中させる設計になっており、同時にアクセシビリティ属性の意味まで扱うと情報過多になるため、意図的に対象外とした。口頭で軽く触れる程度に留める。

### B-3. 配列からのHTML動的生成

**想定質問**：「データを配列で持っておき、`map()`で一気にカードを生成する書き方もありますよね？」

**回答の芯**：ある。ただしテンプレートリテラルや`innerHTML`挿入、配列操作（`map()`/`filter()`）はプログラミング色が強く、Webデザイナー養成科という受講生のゴールから外れる。本カリキュラムは「既にHTMLに書かれた要素を取得して操作する」発想の範囲に留めている。

### B-4. タブメニュー・アコーディオン

**想定質問**：「アコーディオンやタブは案件でよく使うのに、なぜ教材に入っていないんですか？」

**回答の芯**：これは技術的な難易度の話ではなく、UI選定・UXの話。今回のポートフォリオサイトの文脈（`docs/design_brief.md`）ではアコーディオンはコンテンツ量・体験として不採用と判断した。技術的には「取得→クリック→`classList`」の型の応用で実装できるため、育成講師自身の引き出しとしてはオプションUI解説パートで扱う。

## 今後の詰め

- [x] A・B各項目の説明文・具体例（コードスニペット等）を追加
- [x] 内容の過不足チェック（2026-08-24）→ A-4「要素間のデータ受け渡し（クロージャ）」を新設。モーダルの属性値コピー部分（最大の難所）の裏側を扱う項目が抜けていたため
- [x] 各項目の想定所要時間を見積もり、4時間全体の時間配分に反映 → `docs/trainer_workshop_brief.md`に座学70分（A-4のスコープ前提確認バッファ含む）として反映
