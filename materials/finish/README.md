# materials/finish/

3日間JS授業の**最終完成形**。ここから `start/`・各 `steps/` を逆算して切り出す。

## 制作前に読むもの

- コンテンツ・トンマナ・Works 仕様：`docs/design_brief.md`
- 機能・日別ゴール：`docs/final_project.md`

---

## 進捗記録

### 2026-07-10 ── CSS 一通り完了（Hero / モーダル除く）

**ステータス**：静的セクションの CSS は完了。**Hero・モーダル CSS は JS 実装後に整える**（意図的に後回し）。

#### 完了（CSS）

| ブロック | 内容 |
|----------|------|
| Design tokens | グレースケール、スペース、流体タイポ（`--font-size-subheading` 含む）、影 |
| Base | `.container`、`.section-title` / `.section-title--sub` |
| Header / Nav | sticky、ドロワー、`.is-open`、ハンバーガーアニメ |
| Works | Grid（SP 2列 + `auto-fit`）、`.works-card` Flex、枠線・`cursor: pointer` |
| Profile / Skills | Flex 2カラム（768px〜）、円形プロフィール画像、バッジ並び |
| Footer | 背景 `--color-bg-sub`、中央揃え |

#### HTML の変更（CSS と同時）

- **Skills を Profile 内に統合**（`section#skills` + `h3.section-title--sub`）
- ナビの `#skills` アンカーは `id="skills"` で引き続き有効

#### 制作方針（CSS の残り）

| 対象 | 方針 |
|------|------|
| Hero / Swiper | CDN + JS + CSS をまとめて |
| `#works-dialog` | `modal.js` で動作確認してから CSS を整える |

#### 未着手

| 項目 | 備考 |
|------|------|
| **JS** | `drawer.js` → `modal.js` → `swiper.js` |
| **モーダル CSS** | `modal.js` のあと |
| **Hero / Swiper** | `swiper.js` のあと + スライド3枚 |

#### 次の作業

1. **`drawer.js`** … `.is-open` の toggle
2. **`modal.js`** … 動作確認 → `#works-dialog` の CSS
3. **`swiper.js`** + Hero CSS + CDN
4. `finish` 完成後、`start/`・各 `steps/` を逆算生成

---

### 2026-07-10 ── ヘッダー・ナビゲーション CSS 完了

**ステータス**：`style.css` の **header / nav ブロックが完成**。セクション別 CSS に着手可能。

#### 完了（CSS）

| ブロック | 内容 |
|----------|------|
| Design tokens | グレースケール、`--shadow-header`、スペース・流体タイポ |
| Base | `body`、`.container`、`.section-title`（英大＋日小、`data-title-en`） |
| Header | `position: sticky`、`box-shadow: var(--shadow-header)` |
| ドロワー | `.g-nav` を `position: fixed` + `translate` で右外に配置 |
| 開閉状態 | `.is-open` でナビスライドイン・ハンバーガー→×アニメ |
| ハンバーガー | `.btn-nav` / `.btn-nav__line`（3本線・疑似要素） |

#### 実装方針（確定）

- ドロワーは **`<dialog>` ではなく `nav` の `position` + `class` 切替**
- 開閉 class：`.is-open`（`body` または親に付与する想定・JS 未実装）
- PC・SP 共通ドロワー（メディアクエリ切替なし）

#### 次の作業

1. **Works** カードグリッド ＋ モーダル CSS
2. **Profile** 2カラム、**Skills** バッジ、**Footer**
3. **Hero / Swiper** … `finish` 完成時に CDN・JS・CSS をまとめて実装（先行して CSS を書かない）
4. `drawer.js` → `modal.js` → `swiper-init.js`
5. `finish` 完成後、`start/`・各 `steps/` を逆算生成

---

### 2026-07-06 ── HTML マークアップおおむね完了 → CSS フェーズへ

**ステータス**：`index.html` の骨組みは完了。**`style.css` を書きながら調整**する段階。

#### 完了（HTML）

| セクション | 内容 |
|------------|------|
| Header | ロゴ、`.g-nav`、`.btn-nav`（ハンバーガー） |
| Hero | Swiper 用マークアップ（スライド1枚・プレースホルダ画像） |
| Works | カード4件（`dl.works-card__meta`、制作期間・使用ツール・言語） |
| Profile | 左：名前・肩書き・紹介文／右：`profile.jpg` |
| Skills | バッジ並び（案A）5件 |
| Footer | コピーライト |
| Works モーダル | `#works-dialog` / `#works-dialog-img` / `#works-dialog-close`（Works セクション内） |
| 共通 | `container`、`h2.section-title`、Noto Sans JP・destyle 読み込み |

#### 未着手・CSS/JS と合わせて追加予定

| 項目 | 備考 |
|------|------|
| Hero Swiper スライド | 現状1枚。完成時3枚想定 |
| `js/` | `drawer.js` / `modal.js` / `swiper-init.js` 未実装 |

#### 次の作業

1. Hero / Works / Profile / Skills / Footer のセクション CSS
2. モーダル CSS
3. JS 実装（`.is-open` の toggle から）
4. `finish` 完成後、`start/`・各 `steps/` を逆算生成

---

## 完成チェックリスト

### HTML

- [x] 全セクション骨組み（Hero / Works / Profile / Skills / Footer）
- [x] Works カード4件（`works-card__meta`）
- [x] Profile（情報＋画像＋Skills 統合）
- [x] Skills バッジ（Profile 内 `h3`）
- [x] `h2.section-title` 統一
- [x] `#works-dialog`（画像拡大モーダル・`#works-dialog-img`・`#works-dialog-close`）
- [ ] Hero スライド3枚（任意・Swiper 実装時）

### CSS

- [x] グレースケール・デザイントークン（カラー・スペース・タイポ・影）
- [x] Base（`.container`、`.section-title`、`.section-title--sub`）
- [x] ドロワーメニュー（`.g-nav` / `.btn-nav` / `.is-open`）。PC・SP ともドロワー
- [x] Header（`sticky` + `--shadow-header`）
- [x] Works カードグリッド・カード UI
- [x] Profile 2カラム + Skills バッジ（Profile 内）
- [x] Footer
- [ ] Hero（**`swiper.js` 導入時にまとめて**）
- [ ] Works モーダル（`#works-dialog`・**`modal.js` のあと**）

### JS

- [ ] `drawer.js`
- [ ] `modal.js`（`src` / `alt` コピー、`forEach`）
- [ ] `swiper.js`
- [ ] `aria-*` 属性は付けない（方針）

---

## フォルダ構成

```
finish/
├── index.html          # マークアップおおむね完了
├── css/
│   └── style.css       # Swiper・モーダル CSS 除き完了
├── js/
│   ├── drawer.js
│   ├── modal.js
│   └── swiper.js       # 未実装
├── images/
│   ├── placeholder1.jpg
│   └── profile.jpg
└── README.md
```
