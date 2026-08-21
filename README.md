# JFKI Sociology Welcome Wiki

Public homepage: https://jfkwiki.github.io/

If GitHub Pages ever renders this README instead of the designed homepage, open:

https://jfkwiki.github.io/index.html

A lightweight GitHub Pages-ready welcome wiki for incoming doctoral researchers,
visiting scholars, students, and new colleagues at the Sociology Department of
the John F. Kennedy Institute, Freie Universität Berlin.

## Pages

- `index.html` — home, quiz, and topic cards
- `first-week.html` — arrival checklist
- `academic-life.html` — term times, seminar, lunches, workshops
- `administration.html` — Anmeldung, LEA, Berlin services, payroll/admin routes
- `campus.html` — institute contact, keys, FU/guest accounts, course catalog, events
- `library.html` — JFKI library, Primo, borrowing, interlibrary loan
- `housing.html` — university housing, IBZ, Studierendenwerk, providers, portals
- `people.html` — department member overview
- `intellectual-map.html` — schematic intellectual Berlin map
- `transport.html` — BVG, S-Bahn, DB, zones, Deutschlandticket, jobticket
- `language.html` — FU German, Language Center, Weiterbildung, intensive schools
- `shopping-food.html` — groceries, MensaCard, Pfand, food, markets
- `culture.html` — leisure, events, museums, everyday city life
- `safety.html` — emergency and fire-safety frame
- `sources.html` / `sources.md` — source links and maintenance notes

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub Pages

This wiki is intentionally static: no build step, no package manager, no
dependencies. To publish:

1. Push the folder to a GitHub repository.
2. In the repository settings, enable GitHub Pages from the `main` branch and
   the repository root (`/`).
3. The page will be available at the GitHub Pages URL for the repository.

The `.nojekyll` file is included so GitHub Pages serves the assets exactly as
written.

## Maintenance notes

- Keep private housing contacts and internal training PDFs in departmental
  storage rather than on the public site.
- Update the “Last source check” stamp whenever official links are reviewed.
- Prefer official Berlin, FU, JFKI, BVG, and visitBerlin pages for factual
  claims.
