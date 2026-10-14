# Samunnathi Foundation — Website

## Folder structure
```
samunnathi-foundation/
├── index.html          Homepage (hero, about, work, founders, gallery, get involved, vision, CTA)
├── gallery.html         Full gallery page with category filters
├── css/style.css        All styling, colors, glassmorphism, responsive rules
├── js/config.js         <-- PUT YOUR GOOGLE FORM LINKS HERE (one place only)
├── js/main.js           Navbar, scroll reveals, founders/gallery auto-scroll + drag, lightbox
├── robots.txt
├── sitemap.xml
└── images/              ALL images live here as placeholders — replace them
    ├── logo.svg              → your logo (shown in navbar next to the name)
    ├── hero.svg               → hero background photo
    ├── about.svg, why-education.svg, work-1..4.svg, featured.svg, vision.svg
    ├── founders/founder-1.svg … founder-5.svg   → your 5 founder photos
    └── gallery/gallery-1.svg … gallery-8.svg    → your gallery photos
```

## To use your real photos
Every image is currently a labeled placeholder (e.g. "Founder 1 photo") so you can see
exactly what goes where. Replace each file with your real photo **using the same
filename**, or change the `src="images/..."` path in `index.html` / `gallery.html`
to point at your new file. JPG, PNG or WebP all work — just update the extension
in the `src` if you don't keep it as `.svg`.

## To set your Google Form links
Open `js/config.js` and paste your real Google Form URLs into the FORM_LINKS
object. Every "Get Guidance", "Student", "Mentor", "Volunteer" and "Supporter"
button on the whole site reads from this one file automatically.

## To view the site
Just open `index.html` in a browser, or run a tiny local server, e.g.:
```
npx serve .
```
(A local server is recommended for the lightbox/gallery paths to behave well
if you later host the images elsewhere.)

## Fully responsive
Tested breakpoints: 320–430px (phones), 768–1024px (tablets), 1280px+ (desktop/large screens).

## Mobile layout notes
- Phones (<=768px) use their own layout, not a shrunk desktop: navbar -> full hero image ->
  label -> heading -> description -> buttons. No text is placed over the hero photo on phones.
- Hero photo focus on phones: in css/style.css, `.hero-media img{object-position:center 30%}`
  inside the `@media (max-width:768px)` block. Change `30%` (0% = top, 100% = bottom) so
  faces/subjects in your real photo are never cropped.
- The hero photo is 4:3 on phones, 4:5 on desktop. Landscape photos work best.
- Unused placeholder images (why-education, featured, vision, work-1) are left in /images
  in case you want those sections back; the site no longer uses them.
