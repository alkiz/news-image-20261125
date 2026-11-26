// News image entry for make.fun news-image-20261125 (Node 22, standard library only).
// The entry's image is entry.png beside this file; the program copies it to
// /output/entry.png. The image sums up the world news of Wednesday 25 November 2026:
// two tankers hit mines in the Strait of Hormuz, Houthi strikes on Saudi Arabia,
// Ukrainian drones set two Russian refineries ablaze, Huawei convicted in Brooklyn,
// markets plunge while the Dow tops 50,000, and Shenzhou-24 docks with Pakistan's
// first astronaut. The copy is deterministic: the same bytes come out on every run.
// The poster itself was composed as HTML and rendered to PNG with Playwright;
// all text is typeset, so it stays legible at any size.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
