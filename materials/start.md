# materials/start/portfolio/

3日間JS授業の**初日配布用**（静的 HTML / CSS のみ）。  
完成形は `materials/finish/portfolio/` を参照。

## 関連ドキュメント

- 機能・日別ゴール：`docs/final_project.md`
- 授業スケジュール：`docs/agenda.md`
- コンテンツ・トンマナ：`docs/design_brief.md`

## 配布時点の状態

- HTML / CSS：全セクション完成（Hero / Works / Profile・Skills / Footer）
- JS：空ファイル（コメントのみ）。授業で日ごとに追記する
- ページトップへ戻るボタン（Intersection Observer）：**含めない**（`finish` のみ）

### これから足す JS

| ファイル | 日 | 内容 |
|----------|----|------|
| `js/drawer.js` | 1日目 | ハンバーガー開閉 |
| `js/modal.js` | 2〜3日目 | `<dialog>` 画像拡大（のち `forEach`） |
| `js/swiper.js` | 3日目 | Swiper 初期化 |

## フォルダ構成（配布物）

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── drawer.js   （空）
│   ├── modal.js    （空）
│   └── swiper.js   （空）
└── images/
    ├── placeholder1.jpg〜4.jpg
    └── profile.jpg
```

※ README は配布に含めない（本ファイルは `materials/start.md`）。

## 受講生への案内（例）

1. `index.html` をブラウザで開き、見た目を確認する
2. 狭い幅ではメニューボタンが見えるが、まだ開閉しない（JS 未実装）
3. Hero は1枚目が表示される（Swiper 未初期化）
4. Works カードをクリックしてもモーダルは開かない（JS 未実装）
