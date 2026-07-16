# materials/finish/portfolio/

3日間JS授業で制作するポートフォリオサイトの**最終完成形**。  
このフォルダを基準に `materials/start/portfolio/` と各 `materials/steps/*/portfolio/` を切り出す。

## 関連ドキュメント

- コンテンツ・トンマナ・Works仕様：`docs/design_brief.md`
- 機能・日別ゴール：`docs/final_project.md`
- 授業スケジュール：`docs/agenda.md`

## 現在の状態（2026-07-16）

`finish/portfolio/` のHTML・CSS・JSは実装済み。

### 実装済み

- Header：768px未満はドロワー、768px以上は横並びナビ
- Hero：Swiper、4スライド
- Works：4カード、画像拡大モーダル
- Profile：自己紹介、プロフィール画像
- Skills：Profile内の`h3`として配置
- Footer
- `drawer.js`：メニュー開閉、リンク選択時に閉じる
- `modal.js`：全画像へのイベント登録、`src` / `alt`コピー、`showModal()` / `close()`
- モーダル開閉中の背景スクロール止め：CSS（`body:has(.works-dialog[open])`）
- `swiper.js`：Swiper初期化
- `pagetop.js`：ページトップへ戻る（Intersection Observer・授業必須外）

### 今後の教材作成

- [x] `materials/start/portfolio/`
- [ ] `materials/steps/step1_drawer/portfolio/`
- [ ] `materials/steps/step2_modal/portfolio/`
- [ ] `materials/steps/step3_works/portfolio/`

## 完成チェックリスト

### HTML / CSS

- [x] グレースケール・ワイヤーフレーム調
- [x] Hero / Works / Profile（Skills含む）/ Footer
- [x] レスポンシブナビゲーション
- [x] Worksカードグリッド
- [x] Worksモーダル
- [x] Swiper用マークアップ・スタイル

### JavaScript

- [x] `drawer.js`
- [x] `modal.js`
- [x] `swiper.js`
- [x] Swiper CDN読込
- [x] `pagetop.js`（完成例の追加機能・授業必須外）

## フォルダ構成（成果物）

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── drawer.js
│   ├── modal.js
│   ├── swiper.js
│   └── pagetop.js   （完成例のみ）
└── images/
    ├── placeholder1.jpg
    ├── placeholder2.jpg
    ├── placeholder3.jpg
    ├── placeholder4.jpg
    └── profile.jpg
```

※ README は配布・成果物フォルダに含めない（本ファイルは `materials/finish.md`）。
