/**
 * Production Build & Validation Script
 * Validates all files and compiles static assets into dist/ for production hosting (Vercel/Netlify/GitHub Pages).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

console.log('\n======================================================');
console.log('  ✦ ELÉVÉ Unisex Salon - Production Build Verification ✦');
console.log('======================================================\n');

let hasErrors = false;

// 1. Verify Core Files
const requiredFiles = [
  'index.html',
  'css/style.css',
  'js/app.js',
  'assets/favicon.svg'
];

for (const relPath of requiredFiles) {
  const fullPath = path.join(__dirname, relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`✖ Missing required source file: ${relPath}`);
    hasErrors = true;
  } else {
    const stat = fs.statSync(fullPath);
    console.log(`✓ Verified source file: ${relPath} (${stat.size} bytes)`);
  }
}

// 2. Scan Client-Facing Files for Hardcoded Localhost or Local IP References
const clientFiles = ['index.html', 'css/style.css', 'js/app.js'];
const forbiddenPatterns = [
  /http:\/\/localhost/i,
  /https:\/\/localhost/i,
  /http:\/\/127\.0\.0\.1/i,
  /http:\/\/192\.168\./i,
  /http:\/\/10\.\d{1,3}\.\d{1,3}\.\d{1,3}/i
];

for (const relPath of clientFiles) {
  const fullPath = path.join(__dirname, relPath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    for (const pattern of forbiddenPatterns) {
      if (pattern.test(content)) {
        console.error(`✖ Hardcoded local URL pattern ${pattern} found in ${relPath}`);
        hasErrors = true;
      }
    }
  }
}

if (!hasErrors) {
  console.log('✓ Zero localhost or local IP references found in client code.');
}

// 3. Compile Production Distribution Directory (dist/)
console.log('\n--> Generating production distribution bundle in dist/...');
try {
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  fs.mkdirSync(distDir, { recursive: true });

  // Copy index.html
  fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(distDir, 'index.html'));

  // Copy css/
  fs.mkdirSync(path.join(distDir, 'css'), { recursive: true });
  for (const file of fs.readdirSync(path.join(__dirname, 'css'))) {
    fs.copyFileSync(path.join(__dirname, 'css', file), path.join(distDir, 'css', file));
  }

  // Copy js/
  fs.mkdirSync(path.join(distDir, 'js'), { recursive: true });
  for (const file of fs.readdirSync(path.join(__dirname, 'js'))) {
    fs.copyFileSync(path.join(__dirname, 'js', file), path.join(distDir, 'js', file));
  }

  // Copy assets/
  if (fs.existsSync(path.join(__dirname, 'assets'))) {
    fs.mkdirSync(path.join(distDir, 'assets'), { recursive: true });
    for (const file of fs.readdirSync(path.join(__dirname, 'assets'))) {
      fs.copyFileSync(path.join(__dirname, 'assets', file), path.join(distDir, 'assets', file));
    }
  }

  // Verify dist files
  const distCss = path.join(distDir, 'css', 'style.css');
  const distJs = path.join(distDir, 'js', 'app.js');
  const distHtml = path.join(distDir, 'index.html');
  const distFavicon = path.join(distDir, 'assets', 'favicon.svg');

  if (fs.existsSync(distCss) && fs.existsSync(distJs) && fs.existsSync(distHtml) && fs.existsSync(distFavicon)) {
    console.log(`✓ Production bundle verified: dist/css/style.css (${fs.statSync(distCss).size} bytes)`);
    console.log(`✓ Production bundle verified: dist/js/app.js (${fs.statSync(distJs).size} bytes)`);
    console.log(`✓ Production bundle verified: dist/index.html (${fs.statSync(distHtml).size} bytes)`);
  } else {
    throw new Error('Verification of files in dist/ directory failed.');
  }
} catch (err) {
  console.error('✖ Error generating dist bundle:', err);
  hasErrors = true;
}

console.log('\n======================================================');
if (hasErrors) {
  console.error('✖ Production build failed. Please fix the above issues.');
  console.log('======================================================\n');
  process.exit(1);
} else {
  console.log('✦ SUCCESS: Production build ready in dist/ & root! ✦');
  console.log('======================================================\n');
  process.exit(0);
}
