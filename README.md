# PACE Website
Official frontend for **PACE** (Project Association for Computer and Electronics) at Advanced College of Engineering and Management (ACEM), Kathmandu, Nepal.

## Tech Stack

- HTML5
- CSS3 (design system with CSS variables)
- Vanilla JavaScript with ES modules
- Client-side JSON data loaded through a thin API wrapper

## Project Structure

```
├── index.html
├── about.html
├── events.html
├── projects.html
├── gallery.html
├── contact.html
├── css/
│   └── main.css
├── js/
│   ├── app.js
│   ├── components/
│   ├── data/
│   ├── pages/
│   └── services/
└── data/
	├── events.json
	├── members.json
	├── notices.json
	└── projects.json
```

## Local Development

Serve the project with any static file server. The JSON-backed pages use `fetch()`, so opening `index.html` directly from `file://` will leave those sections empty.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Features

- Responsive design (desktop, tablet, mobile)
- Sticky navigation with scroll shrink
- Scroll reveal animations
- Filterable gallery and projects
- Accordion FAQ sections
- Toast notifications for form submissions
- Lightbox for gallery items
- SEO meta tags and semantic HTML

## Notes

- The live entrypoint is `js/main.js`, which now bootstraps the modular app in `js/app.js`.
- For complete architectural details, see [`docs/architecture.md`](docs/architecture.md).

## Developed by PACE members
