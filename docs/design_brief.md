# デザイン・コンテンツ指針（`materials/finish/portfolio/`）

> 受講生が**そのまま自身のポートフォリオに流用できる**ことを想定した、グレースケール・ワイヤーフレーム調の教材。

## トンマナ（トーン＆マナー）

### コンセプト

**「完成デザイン」ではなく「ワイヤーフレーム付き骨組み」**

- 色・装飾の判断を課題に含めない（デザイン科の本領は別授業で発揮）
- 受講生が自分のビジュアルに差し替えやすい
- 講師・TA が「どこがコンテンツでどこが枠か」を説明しやすい

### カラーパレット（グレースケールのみ）

| 用途 | 色（例） | CSS 変数案 |
|------|----------|------------|
| 背景（メイン） | `#ffffff` | `--color-bg` |
| 背景（セクション交互） | `#f5f5f5` | `--color-bg-sub` |
| 枠線・区切り | `#cccccc` | `--color-border` |
| プレースホルダー塗り | `#e0e0e0` | `--color-placeholder` |
| 補助テキスト | `#888888` | `--color-text-muted` |
| 本文 | `#333333` | `--color-text` |
| 強調・見出し | `#111111` | `--color-text-strong` |

※ アクセントカラーは**意図的に使わない**。受講生が後から1色足すだけで印象が変わるようにする。

### タイポグラフィ

**ベースフォント：`Noto Sans JP` を1種だけ読み込む。**

| 要素 | 方針 |
|------|------|
| 本文・見出し | `Noto Sans JP`（Google Fonts） |
| 英字 | 同上で統一（別フォントは足さない） |
| サイズ | ヒエラルキーが分かる程度（h1 > h2 > 本文）。細かい調整は受講生に委ねる |
| 行間 | 読みやすければ OK（`1.6`〜`1.8` 目安） |
| ウェイト | `400`（本文）/ `500` or `700`（見出し）程度。使いすぎない |

**HTML（`index.html` の `<head>` に追加）**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
```

**CSS**

```css
body {
  font-family: "Noto Sans JP", sans-serif;
}
```

※ システムフォントのみに戻す場合も、`font-family` 1行の差し替えで済むようにしておく。

### レイアウト・装飾

- **枠線**（`1px solid`）でブロックを示すワイヤーフレーム感
- 画像未設定時は **グレー矩形＋中央に「IMAGE」または寸法表記**
- 角丸・シャドウは **使わない** か、ごく弱く（`border-radius: 4px` 程度まで）
- 余白は十分に取り、詰め込みすぎない

### レスポンシブナビゲーション

**768px未満はドロワー、768px以上は横並びナビとして表示する。**

| 項目 | 方針 |
|------|------|
| 768px未満 | ハンバーガーボタンを表示し、`body.is-open`でドロワーを開閉 |
| 768px以上 | `.g-nav`を横並び表示し、ハンバーガーボタンを非表示 |
| JS | 画面幅に関係なく「クリック → class切替」の基本形を使用 |

※ 1日目のJS課題はドロワー開閉に集中し、PC表示の切替は配布済みCSSとして扱う。

### HTML・マークアップ（教材の範囲）

**`aria-*` 属性は付けない。** JS 実装（取得・クリック・class 操作）に集中するため。

| 項目 | 方針 |
|------|------|
| `aria-*` | **教材では使用しない**（`aria-label` / `aria-expanded` / `aria-hidden` 等） |
| 理由 | 3日間の着地点は UI の動きの実装。アクセシビリティ属性の説明は範囲外 |
| 口頭 | 必要なら「現場では付けることもある」と一言触れる程度 |
| `alt` | 画像には付けてよい（`src` コピー時に一緒に渡す実装のため） |

### ドロワー内リンク（アンカー）

```
#hero    … トップ
#works   … 制作実績
#profile … 自己紹介
#skills  … スキル
```

### 避けるもの

- ブランドカラー・グラデーション・写真中心の見せ方
- 複雑なグリッド・凝ったアニメーション（CSS）
- 受講生が消しにくい装飾の多用

---

## サイト構成（1ページ）

| セクション | `id` 案 | 役割 | JS |
|------------|---------|------|-----|
| Header | — | ロゴ＋ハンバーガー | ドロワー |
| Hero | `#hero` | メインビジュアル（Swiper・4枚） | Swiper（3日目） |
| Works | `#works` | 制作実績カード → 画像拡大モーダル | モーダル（2〜3日目） |
| Profile | `#profile` | 自己紹介＋Skills | **なし（静的）** |
| Footer | — | 名前・連絡先 | なし |

**表示順**：Hero → Works → Profile（Skills含む）→ Footer

※ FAQ・アコーディオンは**採用しない**（ポートフォリオの UX・文脈に合わない）。

---

## 掲載コンテンツ（確定案・差し替え前提）

### サイト全体

| 項目 | 配布時の文言 | 受講生への意図 |
|------|--------------|----------------|
| サイトタイトル | `My Portfolio` | `<title>` およびヘッダーロゴ |
| デザイナー名 | `Your Name` | Profile・Footer。自分の名前に差し替え |
| 肩書き（任意） | `Web/Graphic Designer` | Profile内。自分の肩書きに差し替え |

### Hero（Swiper・4スライド）

- `placeholder1.jpg`〜`placeholder4.jpg`を表示
- 前後ナビゲーションボタンを配置
- スライド未実装時（1〜2日目）も **1枚目だけ表示** されればよい

### Profile（自己紹介＋Skills・静的）

2〜3行のプレースホルダ。常時表示。

```
はじめまして。Your Name です。
グラフィックとWebデザインを学んでいます。
お仕事のご依頼・ご相談をお待ちしております。
```

#### Skills（スキル・静的）── **案A：バッジ並び（確定）**

スキル名をバッジ（タグ）として横並びに配置。常時表示。JS 不要。

```html
<ul class="skills-list">
  <li class="skills-list__item"><span class="skills-list__badge">Illustrator</span></li>
  <li class="skills-list__item"><span class="skills-list__badge">Photoshop</span></li>
  ...
</ul>
```

| 項目 | 方針 |
|------|------|
| レイアウト | `flex` + `flex-wrap` で折り返し（PC・SP 共通） |
| 装飾 | 枠線＋グレー背景のワイヤーフレーム調バッジ |
| 配布時の例 | Illustrator / Photoshop / Figma / HTML/CSS / JavaScript |

※ カテゴリ分け・スキルバーは採用しない。

### セクション見出し（`h2`）

各セクションの `h2` はクラス **`section-title`** で統一する。

```html
<h2 class="section-title">Works</h2>
```

※ `works__title` などセクション別のクラス名は使わない。

### Works（制作実績・4件）── **仕様確定**

**カード UI**。画像の下にポートフォリオとして必要な情報を掲載。**クリックで画像のみ拡大**（ライトボックス）。

#### カード構成（各 `.works-card`）

| 要素 | 内容 | 表示 |
|------|------|------|
| サムネ画像 | `<img>` | カード上部 |
| 作品タイトル | `作品タイトル 01` 等 | 画像下 |
| 制作期間 | `制作期間：2025年3月` | 画像下 |
| 使用ツール | `使用ツール：Figma / Illustrator` | 画像下 |
| カテゴリ（任意） | `Web Design` 等の小ラベル | 画像下 |

#### モーダル（`#works-dialog`・1つだけ）

| 項目 | 仕様 |
|------|------|
| 中身 | **拡大画像** ＋ 閉じるボタン（`#works-dialog-close`・`&times;`） |
| テキスト | dialog 内には載せない（カード側に静的表示済み） |
| 動的変更 | **画像の `src` と `alt` のみ**（カード内 `img` からコピー） |
| 実装 | `data-*` 属性・配列・`innerHTML` は**使わない** |

```javascript
// 実装の型（教材・完成形）
const dialog = document.querySelector('#works-dialog');
const dialogImage = document.querySelector('#works-dialog-img');
const dialogClose = document.querySelector('#works-dialog-close');

document.querySelectorAll('.works-card').forEach((card) => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    dialogImage.src = img.src;
    dialogImage.alt = img.alt;
    dialog.showModal();
  });
});

dialogClose.addEventListener('click', () => {
  dialog.close();
});
```

説明用ラベル：「クリックされたカードの画像の住所（`src`）を、拡大用の画像にコピーしてから開く」

#### カード一覧（配布時プレースホルダ）

| # | タイトル | 制作期間 | 使用ツール |
|---|----------|----------|------------|
| 1 | `作品タイトル 01` | `3日` | `Illustrator / Photoshop` |
| 2 | `作品タイトルタイトルタイトル 02` | `4時間` | `Photoshop` |
| 3 | `作品タイトルタイトルタイトル 03` | `10日` | `Figma / HTML / CSS` |
| 4 | `作品タイトル 04` | `2週間` | `Illustrator` |

### Footer

```
© 2026 Your Name
```

- SNS・メールアドレスは省略

---

## クラス名・マークアップ（`finish/portfolio` 実装用）

```
header
  .logo / .g-nav / .btn-nav
  body.is-open（768px未満のドロワー開状態）
```

#hero
  .swiper > .swiper-wrapper > .swiper-slide ×4

#works
  .works-list > .works-list__item
  .works-card
    img / .works-card__title / .works-card__meta 等
  #works-dialog.works-dialog（dialog）
    #works-dialog-close
    #works-dialog-img

#profile
  .profile__body（静的）
    #skills
      .skills-list
      .skills-list__badge
  .profile__figure

footer
```

---

## 画像・素材方針

| 種類 | 方針 |
|------|------|
| ヒーロー | `images/placeholder1.jpg`〜`placeholder4.jpg` |
| 作品サムネ | `images/placeholder1.jpg`〜`placeholder4.jpg` |
| プロフィール | `images/profile.jpg` |
| モーダル内 | カードと**同じ画像**を `src` コピーで表示（`max-width: 100%`） |
| ファビコン | 省略 or 単色四角 |

著作権フリーの写真は **使わない**（差し替え前提のため）。

---

## 受講生への案内文（教材 README 用・案）

> このサイトはワイヤーフレーム調の教材です。  
> グレーの枠・プレースホルダを、ご自身のデザイン・写真・文言に差し替えることで、そのままポートフォリオとして活用できます。  
> Profile・Skills は常に表示、Works はカードをクリックすると画像が拡大します。

---

## 確定事項・残タスク

| 項目 | 状態 |
|------|------|
| Works カード UI＋画像拡大モーダル | **確定** |
| `src` / `alt` のコピーによる画像差し替え | **確定** |
| FAQ・アコーディオン | **不採用** |
| Profile内のSkills静的表示 | **確定** |
| フォント Noto Sans JP | **確定** |
| デザイナー名プレースホルダ `Your Name` | 確定案 |
| Works 件数 4件 | 確定案 |
| セクション順 | **Hero → Works → Profile（Skills含む）→ Footer** |
| Skills レイアウト | **案A：バッジ並び（確定）** |
| ナビゲーション | **768px未満はドロワー、768px以上は横並び** |
| `aria-*` 属性 | **付けない**（JS 実装に集中） |
| セクション `h2` | **`section-title` で統一** |
| 言語 | 日本語本文＋一部英字ラベル |

---

## 進捗記録

### 2026-07-15 ── `materials/finish/portfolio/` 完成形を実装

- HTML / CSS / `drawer.js` / `modal.js` / `swiper.js`を実装済み
- HeroはSwiper 4スライド
- SkillsをProfile内に統合
- 次フェーズ：`materials/start/portfolio/`・各`steps/*/portfolio/`の切り出し
- 詳細：`materials/finish.md`

### 2026-07-10 ── ヘッダー・ナビゲーション CSS 完了

- `.header`（sticky + 下方向シャドウ）、`.g-nav` ドロワー、`.btn-nav`、`.is-open` まで実装
- ドロワーは `nav` の `position` + `translate`（`<dialog>` は Works モーダルのみ）
- 詳細：`materials/finish.md`

### 2026-07-06 ── `materials/finish/portfolio/` HTML おおむね完了

- `index.html` のセクション骨組み・コンテンツ仮置きが完了
- Works モーダル：`#works-dialog` / `#works-dialog-img` / `#works-dialog-close` を `#works` 内に追加
- 次フェーズ：**CSS（`style.css`）を書きながらレイアウト調整**
- 詳細チェックリスト：`materials/finish.md`

---

## 関連ドキュメント

- 機能・日別割り当て：`docs/final_project.md`
- 授業スケジュール：`docs/agenda.md`
