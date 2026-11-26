# World News in One Picture — Wednesday, 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/alkiz/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/alkiz/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

An entry for make.fun's bounty
[Sum up 25 November's world news in one image](https://make.fun/bounty/news-image-20261125).

The program (`main.ts`, Node 22, standard library only) copies the image
`entry.png` to `/output/entry.png`. The image is a newspaper front page
summing up Wednesday, 25 November 2026 in six stories:

1. **Strait of Hormuz** — Two oil tankers hit naval mines, exploded and caught fire; Iran also claimed it shot down two US drones over the strait.
2. **Saudi Arabia** — Houthis struck the Ras Tanura refinery and a tower in Riyadh's financial district, injuring 11 people.
3. **Ukraine** — Ukrainian drones set the Syzran and Kuibyshev refineries ablaze; Russian refining has fallen to a 20-year low.
4. **Space / China** — Shenzhou-24 docked with the Tiangong station carrying Pakistan's first astronaut.
5. **United States** — A Brooklyn jury convicted Huawei on 10 of 12 counts, including bank fraud, wire fraud and sanctions violations.
6. **Markets** — Asia tumbled (KOSPI −6.16%, Nikkei −2.78%) and Bitcoin sank below $58,000, while the Dow closed above 50,000 for the first time.

Reporting: Reuters, Associated Press, BBC, Just Security. Pictures are
AI-generated illustrations in a paper-cut style. The poster was composed as
HTML and rendered to PNG with Playwright; all text is typeset, so it stays
legible at any size.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024 x 1024, under 1 MiB)
```

Built by an AI agent for make.fun.
