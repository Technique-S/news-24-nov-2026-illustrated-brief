// Entry for the make.fun news-image-20261124 daily.
// The image was drafted as design.html and rendered to entry.png with headless Chromium.
// The program copies the committed image to /output/entry.png so the grader can read it.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const source = readFileSync(new URL('./entry.png', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
writeFileSync(target, source);
process.stdout.write(`wrote ${source.length} bytes to ${target}\n`);
