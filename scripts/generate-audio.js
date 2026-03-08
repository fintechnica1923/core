import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(PROJECT_ROOT, 'src/blog');
const AUDIO_DIR = path.join(PROJECT_ROOT, 'public/audio');
// Using the paths provided in context
const PYTHON_PATH = '/Users/mokoloskov/Desktop/VOICE/venv312/bin/python';
const SCRIPT_PATH = '/Users/mokoloskov/Desktop/VOICE/speak.py';

if (!fs.existsSync(AUDIO_DIR)) {
  fs.mkdirSync(AUDIO_DIR, { recursive: true });
}

function slugify(name) {
  return encodeURIComponent(name);
}

function stripMarkdown(md) {
  return md
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/[#*_`~>|]/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

async function generate() {
  console.log(`Looking for blog posts in: ${BLOG_DIR}`);
  console.log(`Saving audio to: ${AUDIO_DIR}`);

  if (!fs.existsSync(BLOG_DIR)) {
      console.error("Blog directory not found!");
      return;
  }

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  console.log(`Found ${files.length} posts.`);

  for (const file of files) {
    const name = file.replace(/\.md$/, '');
    // Save with original filename (not encoded) so server can find it by decoded URL path
    const audioPath = path.join(AUDIO_DIR, `${name}.mp3`);

    if (fs.existsSync(audioPath)) {
      // console.log(`Skipping existing: ${name}`);
      continue;
    }

    const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const text = stripMarkdown(content);
    
    // Basic sanitization for shell command (escape double quotes)
    const escapedText = text.replace(/"/g, '\\"').replace(/`/g, '\\`').replace(/\$/g, '\\$');

    console.log(`Generating audio for: ${name}...`);
    
    try {
        await new Promise((resolve, reject) => {
            // Using a large maxBuffer for exec
            exec(`"${PYTHON_PATH}" "${SCRIPT_PATH}" "${escapedText}" "${audioPath}"`, { maxBuffer: 1024 * 1024 * 10 }, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error generating ${name}:`, stderr);
                    resolve(); // Continue to next file despite error
                } else {
                    console.log(`Success: ${name}`);
                    resolve();
                }
            });
        });
    } catch (e) {
        console.error(`Unexpected error for ${name}:`, e);
    }
  }
  console.log("Done.");
}

generate();
