const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/blog');
const outputFile = path.join(__dirname, '../src/data/blogIndex.json');

// Создаем папку data если её нет
const dataDir = path.dirname(outputFile);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Читаем все .md файлы из папки blog
const files = fs.readdirSync(blogDir)
  .filter(file => file.endsWith('.md'))
  .map(file => file.replace('.md', ''));

// Записываем в JSON файл
fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));

console.log(`Generated blog index with ${files.length} posts:`, outputFile);