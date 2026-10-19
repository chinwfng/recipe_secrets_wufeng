# Recipe Secrets Website Requirements

Build a website for "Recipe Secrets", a restaurant. Before writing code, briefly propose a plan (file structure, color palette, fonts) and then proceed to build it without waiting for approval.

## Tech & hosting
- Use plain vanilla HTML, CSS and JavaScript only. No frameworks, no build step, no npm dependencies.
- It must work when deployed as static files to a free host (GitHub Pages, Netlify or Cloudflare Pages). Use relative paths only so it works from any subfolder.
- Structure: index.html, about.html, menu.html, reservation.html, contact.html, plus /css/styles.css, /js/main.js, /images/.

## Pages (5 maximum)
1. **Home**: full-width hero image with the restaurant name, tagline and a "Reserve a Table" button; short intro; 3 featured dishes; a "Today's Specials" teaser linking to the Menu page; opening hours; testimonials.
2. **About**: the restaurant's story, the chef/team, and what makes the recipes "secret" (family recipes, signature techniques), with photos.
3. **Menu**: categorized sections (Starters, Mains, Desserts, Drinks) with dish name, description, price and a photo. Include a clearly highlighted "Chef's Specials" section at the top. Add simple tabs or filter buttons for categories, and icons for vegetarian/spicy/gluten-free.
4. **Reservation**: a form with name, email, phone, date, time, number of guests and special requests, with client-side validation and a friendly confirmation message. Since there is no backend, wire it to Formspree (leave a clearly marked placeholder for the form endpoint) and explain in the README how to set it up.
5. **Contact**: address, phone, email, opening hours, an embedded Google Map (iframe) and social links.

## Design
- Warm, upscale-casual restaurant feel. Choose a cohesive palette (e.g. deep burgundy/charcoal with warm cream and gold accents) and pair a serif heading font with a clean sans-serif body font from Google Fonts.
- Sticky navigation bar with the logo and links to all pages; highlight the current page; hamburger menu on mobile.
- Mobile-first and fully responsive (test at 375px, 768px and 1280px widths).
- Generous whitespace, large imagery, subtle hover effects and scroll-fade-in animations (CSS/JS only, respect prefers-reduced-motion).
- A consistent footer on every page with hours, contact info and links.

## Images
- Use many high-quality food and restaurant-interior photos: hero banners, dish photos, team photos, and a gallery section.
- Source them from Unsplash (free license) and download them into /images so the site doesn't depend on hotlinks. If you can't download them in this environment, use Unsplash URLs and list every image in the README so they can be swapped out.
- Use descriptive alt text, lazy loading (loading="lazy"), and sensible sizes (compress/resize to under ~300KB each where possible).

## Quality requirements
- Semantic HTML, accessible (alt text, labels, keyboard navigation, good contrast, visible focus states).
- Good SEO basics: unique <title> and meta description per page, Open Graph tags, favicon.
- Use realistic placeholder content (menu items with prices, an address, phone number, hours) that is easy to find and replace. Put all placeholders that need real info in a list at the end.
- No broken links, no console errors, and consistent styling across pages.

## Deliverables
- The complete working site in the project folder.
- A README.md with: how to preview locally (e.g. `python3 -m http.server`), how to deploy to GitHub Pages and Netlify step by step, how to connect the reservation form, and how to edit the menu, text and images.
- When done, run the site locally and check every page and every link, and fix any issues you find before reporting back.