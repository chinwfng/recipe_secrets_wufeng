# Recipe Secrets — Restaurant Website

A 5-page static website for "Recipe Secrets" built with plain HTML, CSS and JavaScript — no frameworks, no build step, no npm dependencies.

## File structure

```
Recipe_Website/
├── index.html
├── about.html
├── menu.html
├── reservation.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── (photos + favicon.svg)
└── README.md
```

All paths are relative, so the site works from any subfolder or static host.

## Preview locally

From the `Recipe_Website` folder, run a local server (needed so the browser doesn't block
features like `fetch`/relative paths under `file://`):

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. (Any static server works — `npx serve`,
VS Code's "Live Server" extension, etc.)

## Deploy to GitHub Pages

1. Create a new GitHub repository and push the contents of `Recipe_Website/` to it
   (the HTML files should be at the repo root, or in `/docs` if you prefer).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch".
4. Pick the branch (e.g. `main`) and folder (`/root` or `/docs`), then **Save**.
5. GitHub will publish the site at `https://<username>.github.io/<repo-name>/` within a
   few minutes.

## Deploy to Netlify

1. Sign in at [netlify.com](https://netlify.com).
2. Click **Add new site → Deploy manually**, then drag the `Recipe_Website` folder onto
   the upload area (or connect the GitHub repo via **Import from Git** for automatic
   redeploys on push).
3. Netlify builds nothing (no build command needed) — just set the **publish directory**
   to the project root.
4. Your site goes live at a generated `*.netlify.app` URL immediately; you can rename it
   or attach a custom domain in **Site settings → Domain management**.

## Connecting the reservation form (Formspree)

The reservation form has no backend, so it posts to [Formspree](https://formspree.io):

1. Create a free Formspree account and a new form.
2. Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
3. Open `reservation.html` and find:
   ```html
   <form id="reservation-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
   ```
4. Replace `YOUR_FORM_ID` with your real form ID.
5. Submissions will then be emailed to you via Formspree's dashboard.

Note: the current JavaScript (`js/main.js`) intercepts the submit event to run client-side
validation and show an in-page confirmation message instead of letting the browser navigate
away. If you want the real Formspree POST to fire as well (so you actually receive
emails), either submit via `fetch()` to the form's `action` URL inside the validated submit
handler, or remove the `e.preventDefault()` once your Formspree endpoint is set and you're
satisfied with Formspree's own redirect/confirmation behavior.

## Editing content

- **Text**: all copy lives directly in the HTML files — open the relevant page and edit.
- **Menu items**: edit the `.menu-item` blocks in `menu.html` (name, description, price,
  dietary icons, and `<img>` reference).
- **Images**: swap any file in `/images` (keep the same filename to avoid touching the
  HTML) or update the `src` attribute if renaming.
- **Colors/fonts**: all design tokens are CSS custom properties at the top of
  `css/styles.css` (`:root { ... }`) — change them once to restyle the whole site.
- **Navigation/footer**: repeated on every page; update all five HTML files when changing
  nav links or footer content (no templating since this is plain HTML).

## Images

Photos are sourced from Unsplash (free license) and downloaded into `/images`. If any
image needs replacing, Unsplash photo IDs used are listed below (`https://images.unsplash.com/photo-<id>`):

| File | Unsplash photo ID |
|---|---|
| hero-home.jpg | 1414235077428-338989a2e8c0 |
| about-interior.jpg | 1432139555190-58524dae6a55 |
| about-chef.jpg | 1559847844-5315695dadae |
| about-story.jpg | 1432139555190-58524dae6a55 (reused) |
| about-team.jpg | 1552566626-52f8b828add9 |
| featured-dish-1.jpg | 1546069901-ba9599a7e63c |
| featured-dish-2.jpg | 1551183053-bf91a1d81141 |
| featured-dish-3.jpg | 1551024506-0bccd828d307 |
| specials-teaser.jpg | 1546069901-ba9599a7e63c (reused) |
| chefs-special.jpg | 1517248135467-4c7edcad34c4 (reused) |
| menu-starter-1.jpg | 1565299624946-b28f40a0ae38 |
| menu-starter-2.jpg | 1540420773420-3366772f4999 |
| menu-main-1.jpg | 1517248135467-4c7edcad34c4 |
| menu-main-2.jpg | 1484723091739-30a097e8f929 |
| menu-main-3.jpg | 1544025162-d76694265947 |
| menu-main-4.jpg | 1498654896293-37aacf113fd9 |
| menu-dessert-1.jpg | 1504674900247-0877df9cc836 |
| menu-dessert-2.jpg | 1551248429-40975aa4de74 |
| menu-drink-1.jpg | 1470337458703-46ad1756a187 |
| menu-drink-2.jpg | 1510626176961-4b57d4fbad03 |
| gallery-1..6.jpg | reused from the photos above |

Several slots intentionally reuse the same base photo (e.g. team/about photos, gallery
tiles) — swap in your own restaurant/food photography for a production site.

## Placeholders to replace before going live

- **Formspree endpoint**: `YOUR_FORM_ID` in `reservation.html` (see above).
- **Address**: "123 Market Street, Springfield, ST 12345" (appears in `index.html`,
  `contact.html`, `reservation.html` hero area is unaffected, and in every page footer).
- **Phone number**: "(555) 123-4567" (footer on every page, `contact.html`).
- **Email**: "hello@recipesecrets.example" (`contact.html`).
- **Opening hours**: currently Mon–Thu 11–9, Fri–Sat 11–10:30, Sun 10–8 (`index.html`,
  every footer, `contact.html`).
- **Google Map embed**: `contact.html`'s iframe uses a generic query-based embed for
  "123 Market Street, Springfield" — replace with your real address, or an embed code
  from Google Maps ("Share → Embed a map") for your actual location.
- **Social links**: Instagram/Facebook/X links in `contact.html` currently point to the
  generic homepages — replace with your real profile URLs.
- **Menu items & prices**: all dishes in `menu.html` are placeholder recipes — replace
  with your real menu.
- **Team names/bios**: "Daniel Alvarez", "Lucia Alvarez", "Marcus Lee" in `about.html`.
- **Restaurant founding story**: the "Rosa Alvarez, 1962" narrative in `about.html` and
  `index.html` is placeholder — replace with your real history.
- **Images**: see the Unsplash table above — replace with licensed/owned photography.

## Accessibility & SEO notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`), skip-to-content link, labeled
  form fields, visible focus states, descriptive `alt` text, and `aria-current="page"` on
  the active nav link.
- Each page has a unique `<title>`, meta description, and Open Graph tags.
- Animations respect `prefers-reduced-motion`.
- Images use `loading="lazy"` (except none are above-the-fold critical beyond the hero,
  which loads eagerly by default).

## Testing performed

The site was served locally and every page/link was checked for: working navigation
(desktop + mobile hamburger menu), responsive layout at 375px/768px/1280px, menu category
filtering, reservation form client-side validation and confirmation message, and no
broken image or link references.
