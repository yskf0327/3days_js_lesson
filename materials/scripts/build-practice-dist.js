// materials/practice/ から受講生配布用のコピーを配布グループ別に生成する。
// answers/ と *.md（講師用）は除外する。配布タイミングは practice.md 参照。
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PRACTICE_DIR = path.join(__dirname, '..', 'practice');
const DIST_DIR = path.join(__dirname, '..', 'practice-dist');

const GROUPS = {
  1: ['01_console', '02_dom', '03_events', '04_classlist'],
  2: ['05_dialog_basic'],
  3: ['06_foreach'],
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

function zipGroupFolder(group) {
  const src = path.join(DIST_DIR, String(group));
  const out = path.join(DIST_DIR, `practice-${group}.zip`);
  if (fs.existsSync(out)) fs.unlinkSync(out);

  // Windows: PowerShell Compress-Archive（フォルダ直下の中身を zip に入れる）
  const ps = `Compress-Archive -Path '${src}\\*' -DestinationPath '${out}' -Force`;
  execSync(`powershell.exe -NoProfile -Command "${ps}"`, { stdio: 'inherit' });
  console.log(`${path.basename(out)} を生成しました`);
}

fs.rmSync(DIST_DIR, { recursive: true, force: true });

for (const [group, folders] of Object.entries(GROUPS)) {
  for (const folder of folders) {
    const srcDir = path.join(PRACTICE_DIR, folder);
    if (!fs.existsSync(srcDir)) {
      console.warn(`skip: ${folder} が見つかりません (${srcDir})`);
      continue;
    }
    const destDir = path.join(DIST_DIR, group, folder);
    copyExcludingAnswersAndMd(srcDir, destDir);
    console.log(`${group}/${folder} を生成しました`);
  }
}

for (const group of Object.keys(GROUPS)) {
  zipGroupFolder(group);
}

console.log(`\n完了: ${path.relative(process.cwd(), DIST_DIR)} に配布用ファイルを生成しました`);
