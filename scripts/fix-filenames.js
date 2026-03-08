import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const AUDIO_DIR = path.resolve(__dirname, '../public/audio');

if (!fs.existsSync(AUDIO_DIR)) {
  console.error("Audio directory not found");
  process.exit(1);
}

const files = fs.readdirSync(AUDIO_DIR);

files.forEach(file => {
  if (!file.endsWith('.mp3')) return;

  try {
    // Decode filename: "%D0%90.mp3" -> "А.mp3"
    const decodedName = decodeURIComponent(file);
    
    if (file !== decodedName) {
      const oldPath = path.join(AUDIO_DIR, file);
      const newPath = path.join(AUDIO_DIR, decodedName);
      
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} -> ${decodedName}`);
    }
  } catch (e) {
    console.error(`Failed to rename ${file}:`, e);
  }
});

console.log("Fix complete.");
