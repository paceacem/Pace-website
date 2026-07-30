# PACE Website
Official frontend for **PACE** (Project Association for Computer and Electronics) at Advanced College of Engineering and Management (ACEM), Kathmandu, Nepal.

## Tech Stack

- HTML5
- CSS3 (design system with CSS variables)
- Vanilla JavaScript (no frameworks)

## Project Structure

```
├── index.html          # Homepage
├── css/
│   └── styles.css      # Design system & components
├── js/
│   ├── data.js         # Shared content (events, projects, members, etc.)
│   ├── components.js   # Reusable UI (nav, footer, cards, accordion)
│   └── main.js         # Page logic & interactions
├── pages/
│   ├── about.html
│   ├── events.html
│   ├── projects.html
│   ├── members.html
│   ├── gallery.html
│   ├── achievements.html
│   ├── resources.html
│   ├── contact.html
│   └── join.html
└── assests/            # Logo, favicons, member photos
```

## Local Development

Serve the project with any static file server:

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

## Future Scalability

Content in `js/data.js` is structured for easy migration to a CMS, API, or framework (React/Vue). Form submissions are frontend-only placeholders ready for Formspree, EmailJS, or a backend API.

## Developed by PACE Member Sandesh Bhatta 
=======
Official website for the **Project Association for Computer and Electronics (PACE)** — student-led technical club under the Department of Electronics and Computer Engineering at Advanced College of Engineering and Management (ACEM), Kalanki, Kathmandu, Nepal.

## Technology Stack
- **Frontend**: HTML5, Vanilla CSS3 (Custom Properties), Modern JavaScript (ES Modules)
- **Data**: Client-side JSON datasets (`data/*.json`) consumed via thin API wrapper (`js/services/api.js`)
- **Structure**: Modular architecture with scaffolds for future `backend/`, `admin/`, and `api/` layers

## Quick Start
Open `index.html` in any modern browser, or run a local web server:
```bash
npx serve .
```

For complete architectural details, see [`docs/architecture.md`](docs/architecture.md).
>>>>>>> 43c7723 ( Optimizing the Folder Structure)
