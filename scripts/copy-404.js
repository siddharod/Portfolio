import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, fallbackPath);
  console.log('✓ Successfully created dist/404.html for GitHub Pages SPA routing');
} else {
  console.error('✗ dist/index.html not found to create 404 fallback');
  process.exit(1);
}
