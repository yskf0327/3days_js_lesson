# 最終課題（3日間ゴール）と逆算カリキュラム

> `docs/agenda.md` の着地点を、教材開発用に具体化したドキュメント。  
> コンテンツ・トンマナ詳細は `docs/design_brief.md` を参照。

## 方針

1. **先に完成形（`finish`）を決める**
2. 完成形から **日別の到達点** を切り出す
3. 各到達点ごとに **配布用 `start` / 完成 `finish` / 講師用 `answers`** を用意する
4. HTML/CSS は最初から配布し、**JS だけを積み上げる**（デザイナー向け・プログラミング負荷を抑える）

---

## 最終課題：「デザイナーポートフォリオ 1 ページサイト」

### コンセプト

グラフィック・Webデザイナー養成科の受講生が **自分ごとにしやすい** 題材。  
架空のデザイナーのポートフォリオ LP を、**1ページ完結**で作る。グレースケール・ワイヤーフレーム調。

### 完成時の動作（チェックリスト）

| # | 機能 | 実装 | 担当日 |
|---|------|------|--------|
| 1 | **レスポンシブナビ** | 768px未満はハンバーガーで開閉、768px以上は横並び | 1日目 |
| 2 | **モーダル（画像拡大）** | Works カードクリック → `<dialog>` で画像拡大 | 2〜3日目 |
| 3 | **カルーセル** | ヒーロー（Swiper・CDN） | 3日目 |

**静的セクション（JS 不要）**：Profile（自己紹介＋Skills）

※ アコーディオン・FAQ は**不採用**（ポートフォリオ UX に合わない）。

### ページ構成（セクション）

```
┌─────────────────────────────────┐
│ Header（ロゴ + ハンバーガー）      │  ← ドロワー
├─────────────────────────────────┤
│ Hero（Swiper）                    │  ← 3日目
├─────────────────────────────────┤
│ Works（カード → 画像拡大）         │  ← 2〜3日目
├─────────────────────────────────┤
│ Profile（自己紹介＋Skills）         │  ← 静的
├─────────────────────────────────┤
│ Footer                            │
└─────────────────────────────────┘
```

### Works の仕様（確定）

- **カード UI**：画像の下にタイトル・制作期間・使用ツール等（HTML に静的記載）
- **クリック時**：dialog 内に**画像のみ拡大表示**（ライトボックス）
- **`<dialog>` は1つ**（`#works-dialog` / `#works-dialog-img` / `#works-dialog-close`）
- **動的変更は `src` / `alt` のみ**：カード内 `img` から dialog 内 `img` へコピー
- `data-*` 属性・配列・テキストの動的差し替えは**行わない**

### 到達レベルとの対応

| レベル | 最終課題での達成イメージ |
|--------|--------------------------|
| A | `finish` を動かし、テキスト・画像・色を差し替えられる |
| B | ドロワー＋モーダル（1カードで画像拡大）が動く（**2日目終了**） |
| C | 全カードで画像拡大（`forEach`）＋ Swiper まで（**3日目**） |

---

## 逆算：日別ゴールと教材の対応

```
finish（3日目終了時）
  ↑        + Swiper
  ↑ step3  + modal.js に forEach（全カード対応）
  ↑ step2  + modal.js（1カードで開閉・srcコピー）
  ↑ step1  + drawer.js
  ↑ start  静的 HTML/CSS のみ
```

| 教材フォルダ | 対応日 | 追加・変更される JS | 1日のゴール |
|--------------|--------|---------------------|-------------|
| `materials/start/portfolio/` | 配布初日 | なし | サイト構造の確認 |
| `materials/steps/step1_drawer/portfolio/` | 1日目終了 | `js/drawer.js` | ドロワーが動く |
| `materials/steps/step2_modal/portfolio/` | **2日目終了** | `js/modal.js`（1カード・srcコピー） | 1枚のカードで画像拡大 |
| `materials/steps/step3_works/portfolio/` | **3日目午前** | `modal.js` を拡張（`forEach` で全カード） | 全カードで画像拡大 |
| `materials/finish/portfolio/` | 3日目終了 | `js/swiper.js` 等 | ヒーローがスライド |

各 `steps/` に **講師用 `answers/`** を同梱。

---

## フォルダ構成（案）

```
materials/
├── start/
│   └── portfolio/
├── steps/
│   ├── step1_drawer/portfolio/
│   ├── step2_modal/portfolio/
│   └── step3_works/portfolio/
├── finish/
│   └── portfolio/
└── practice/                 # ミニ練習（解説→練習→本課題）
    ├── day1_03_console/
    ├── day1_04_dom/          # querySelector・プロパティ（All / イベントなし）
    ├── day1_05_events/
    ├── day1_06_classlist/
    ├── day2_dialog_basic/
    └── day3_foreach/         # 任意（進捗に応じて）
```

詳細は `materials/practice.md`。
```
js/
├── drawer.js
├── modal.js          # step2 で基本、step3 で forEach 追加
└── swiper.js
```

- CSS は `start` 時点で **全セクションのスタイルを含む**（JS だけ日ごとに足す）
- Profile / Skills は最初から HTML 完成（JS ファイルなし）

---

## JS の書き方（教材設計上の前提）

| 話題 | 教材での扱い |
|------|--------------|
| 変数 | `const` のみ（要素の取り直しを減らす・dialog 用） |
| 関数 | 教えない。`() => { }` は決まり文句 |
| プロパティ | `img.src` / `img.alt` は「画像の住所をコピーする」と説明 |
| `querySelectorAll` + `forEach` | step3（3日目・全カード）で決まり文句 |
| `data-*` / 配列 / `innerHTML` | **使わない** |
| `aria-*` 属性 | **HTML に付けない**（教材の範囲外） |

### 各 JS ファイルの責務（完成形）

| ファイル | 主な API |
|----------|----------|
| `drawer.js` | `querySelector`, `addEventListener`, `classList` |
| `modal.js` | `showModal()`, `close()`, `querySelectorAll`, `forEach`, `img.src`, `img.alt` |
| `swiper.js` | `new Swiper(...)`（CDN 読み込み後） |

### step3（Works 複数カード）の授業上の扱い

進捗に応じて深さを調整。教材は `finish` まで揃えておく。

| 進捗 | 授業での扱い |
|------|--------------|
| 遅れ気味 | 2日目の1カード版のまま。`finish` で全カード動作をデモ |
| 標準 | `forEach` の決まり文句を一緒に追記 |
| 余裕 | 個人ワークまで。全カードで異なる画像が拡大されることを確認 |

### jQuery の立ち位置

紹介のみ。詳細は `docs/agenda.md`。課題には含めない。

---

## マークアップ要件（`materials/finish/portfolio/`）

### ドロワー
- `.btn-nav`（ハンバーガー）、`.g-nav`、`.is-open`
- 768px未満はドロワー、768px以上は横並びナビ

### Works ＋ モーダル
- `.works-list` > `.works-list__item` > `.works-card` ×4（各カードに `img` + メタ情報）
- `#works-dialog` > `#works-dialog-close` + `#works-dialog-img`

### ヒーロー（Swiper）
- `.swiper` 構造。未初期化時も1枚目が表示されること

---

## 制作順序（推奨ワークフロー）

1. [x] **`materials/finish/portfolio/` HTML マークアップ**
2. [x] **`materials/finish/portfolio/` CSS**
3. [x] **`materials/finish/portfolio/` JS**
4. [x] `finish/portfolio` から JS を抜き `start/portfolio/` を作る
5. [x] `materials/practice/` ミニ練習（day1〜day3）
6. [ ] `step1` ← drawer
7. [ ] `step2` ← modal（1カード・srcコピー）
8. [ ] `step3` ← modal に forEach 追加

---

## 確定事項

| 項目 | 内容 |
|------|------|
| トンマナ | グレースケール・ワイヤーフレーム、`Noto Sans JP` |
| Works | カード UI、クリックで画像拡大、`src` コピー |
| Profile / Skills | SkillsをProfile内に統合して静的表示 |
| セクション順 | Hero → Works → Profile（Skills含む）→ Footer |
| ナビ | 768px未満はドロワー、768px以上は横並び |
| `aria-*` | 付けない |
| アコーディオン | 不採用 |
| jQuery | 紹介のみ |

---

## `agenda.md` とのリンク

- 着地点「1サイト・3動き（＋静的セクション）」
- 各日スケジュール ↔ `steps/` step1〜3 + finish
