# materials/practice/

各コマの**ミニ練習**（ポートフォリオ本課題の前に行う導入用）。  
受講生配布 zip には本ファイル（`*.md`）を含めない。`answers/` も講師用のため、配布時は外すか別管理にする。

## 方針

- 手を動かすコマのみに置く
- **解説 → ミニ練習 → `start/portfolio` 本課題** のハイブリッド
- 1画面・1目的・5〜15分。セレクタ名は portfolio と意図的にずらす
- 要素の生成はしない。HTML にある要素を操作するだけ
- **DOM の取得・プロパティ操作**と**イベント**は別ファイルで練習する

## 一覧

| フォルダ | 日・コマ | ねらい | 配布 |
|----------|----------|--------|------|
| `day1_03_console/` | 1日目・3 | Console / `console.log` / script | 初日 |
| `day1_04_dom/` | 1日目・4 | `querySelector` + `innerText` / `src` / `alt` / `href`（イベント・`All` なし） | 初日 |
| `day1_05_events/` | 1日目・5冒頭 | `addEventListener`（クリック → `console.log`） | 初日 |
| `day1_06_classlist/` | 1日目・5冒頭〜 | `classList.toggle`（短時間） | 初日 |
| `day2_dialog_basic/` | 2日目・2〜3 | `showModal` / `close` のみ（画像コピーなし） | 2日目 |
| `day3_foreach/` | 3日目・1〜2（任意） | `querySelectorAll` + `forEach` | 進捗次第 |

### 1日目の流れ（本課題との関係）

- **3コマ**: Console ミニ
- **4コマ**: `day1_04_dom`（取得・プロパティ。ページ読み込み時に書き換えが反映される）
- **5コマ冒頭**: `day1_05_events` → `day1_06_classlist`（どちらも短く）
- **5コマ残り〜6コマ**: **本課題** `start/portfolio` のドロワー（説明＋実装）

本課題への接続:

| ミニのあと | 本課題 |
|------------|--------|
| day1_06（5コマ冒頭） | 直後に `drawer.js`（5〜6コマ） |
| day2_dialog_basic | `modal.js`（1カード・`src`/`alt` コピー） |
| day3_foreach（任意） | `modal.js` を全カード対応、または portfolio 直書き |

## 各フォルダの中身

```text
practice/<name>/
├── index.html
├── style.css
├── main.js          # 受講生用（コメントのみ）
└── answers/
    └── main.js      # 講師用解答例
```

## 配布タイミング

| タイミング | 配布物 |
|------------|--------|
| 初日開始時 | `start/portfolio` + `day1_03`〜`day1_06` |
| 2日目開始時 | `day2_dialog_basic` |
| 3日目 | `day3_foreach` は必要なら。なければ portfolio のみ |

## 配布用ファイルの生成

`answers/` と本ファイル（`*.md`）を除いた受講生配布用コピーを、上表の day 単位で `materials/practice-dist/` に生成する。あわせて日別 zip も作る。

```sh
node materials/scripts/build-practice-dist.js
```

生成物の例:

```text
materials/practice-dist/
├── day1/ …              # 展開済みフォルダ
├── day2/
├── day3/
├── practice-day1.zip    # 受講生へ渡す用
├── practice-day2.zip
└── practice-day3.zip
```

`practice-dist/` は生成物のため Git 管理外（`.gitignore`）。配布のたびに再実行する。

関連: `docs/agenda.md` / `docs/final_project.md`
