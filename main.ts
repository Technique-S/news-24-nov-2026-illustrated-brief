// Entry for the make.fun news-image-20261124 daily.
// The image (design.html, rendered to entry.png with headless Chromium) is committed beside this program.
// The program copies it to /output/entry.png so the grader can read exactly those bytes.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), target);
process.stdout.write(`wrote entry.png to ${target}\n`);
