// materials/practice/ から受講生配布用のコピーを day 別に生成する。
// answers/ と *.md（講師用）は除外する。配布タイミングは practice.md 参照。
const fs = require('fs');
const path = require('path');

const PRACTICE_DIR = path.join(__dirname, '..', 'practice');
const DIST_DIR = path.join(__dirname, '..', 'practice-dist');

const DAY_GROUPS = {
  day1: ['day1_03_console', 'day1_04_dom', 'day1_05_classlist'],
  day2: ['day2_dialog_basic'],
  day3: ['day3_foreach'],
};

function copyExcludingAnswersAndMd(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (entry.name === 'answers') continue;
    if (entry.name.endsWith('.md')) continue;

    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyExcludingAnswersAndMd(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

fs.rmSync(DIST_DIR, { recursive: true, force: true });

for (const [day, folders] of Object.entries(DAY_GROUPS)) {
  for (const folder of folders) {
    const srcDir = path.join(PRACTICE_DIR, folder);
    if (!fs.existsSync(srcDir)) {
      console.warn(`skip: ${folder} が見つかりません (${srcDir})`);
      continue;
    }
    const destDir = path.join(DIST_DIR, day, folder);
    copyExcludingAnswersAndMd(srcDir, destDir);
    console.log(`${day}/${folder} を生成しました`);
  }
}

console.log(`\n完了: ${path.relative(process.cwd(), DIST_DIR)} に配布用ファイルを生成しました`);
