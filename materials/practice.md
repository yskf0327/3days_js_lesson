# materials/practice/

各コマの**ミニ練習**（ポートフォリオ本課題の前に行う導入用）。  
受講生配布 zip には本ファイル（`*.md`）を含めない。`answers/` も講師用のため、配布時は外すか別管理にする。

## 方針

- 手を動かすコマのみに置く
- **解説 → ミニ練習 → `start/portfolio` 本課題** のハイブリッド
- 1画面・1目的・5〜15分。セレクタ名は portfolio と意図的にずらす
- 要素の生成はしない。HTML にある要素を操作するだけ

## 一覧

| フォルダ | 日・コマ | ねらい | 配布 |
|----------|----------|--------|------|
| `day1_03_console/` | 1日目・3 | Console / `console.log` / script | 初日 |
| `day1_04_dom/` | 1日目・4 | 要素の取得パターン（イベントなし） | 初日 |
| `day1_05_classlist/` | 1日目・5冒頭 | `addEventListener` + `classList.toggle`（短時間） | 初日 |
| `day2_dialog_basic/` | 2日目・2〜3 | `showModal` / `close` のみ（画像コピーなし） | 2日目 |
| `day3_foreach/` | 3日目・1〜2（任意） | `querySelectorAll` + `forEach` | 進捗次第 |

### 1日目の流れ（本課題との関係）

- **3〜4コマ**: ミニ練習のみ（Console → 要素取得）
- **5コマ冒頭**: `day1_05_classlist` で「クリック→class」の型を短く体験
- **5コマ残り〜6コマ**: **本課題** `start/portfolio` のドロワー（説明＋実装）。6コマだけでは足りないため **2コマ確保**

本課題への接続:

| ミニのあと | 本課題 |
|------------|--------|
| day1_05（5コマ冒頭） | 直後に `drawer.js`（5〜6コマ） |
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
| 初日開始時 | `start/portfolio` + `day1_03`〜`day1_05` |
| 2日目開始時 | `day2_dialog_basic` |
| 3日目 | `day3_foreach` は必要なら。なければ portfolio のみ |

関連: `docs/agenda.md` / `docs/final_project.md`
