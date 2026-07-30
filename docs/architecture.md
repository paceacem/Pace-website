# PACE Website Architecture

## Overview
PACE (Project Association for Computer and Electronics) website is built as a modular, lightweight multi-page frontend application using **HTML5, Vanilla CSS3, and Modern JavaScript (ES Modules)** without heavy frameworks.

## Directory Structure

```
.
├── index.html                 # Home page (Hero, About preview, Events preview, Executive members)
├── about.html                 # About page (Mission, What We Do, Dept Info, Full team roster)
├── events.html                # Events page (List of upcoming & past activities from JSON)
├── projects.html              # Projects page (Student project showcase grid from JSON)
├── gallery.html               # Gallery page (Photo grid archives)
├── contact.html               # Contact page (Office details, simulated map, contact form)
│
├── admin/                     # Placeholder for future admin dashboard
├── api/                       # Placeholder for future serverless/REST endpoints
├── backend/                   # Node/Express server scaffold (stub)
├── public/                    # Robots, sitemap, webmanifest, favicons
├── scripts/                   # Build, deploy, and local setup scripts
├── tests/                     # Reserved for future Jest/Playwright tests
│
├── assets/
│   ├── documents/             # Official notices & documents
│   ├── icons/                 # UI icons
│   ├── images/                # Gallery images
│   ├── logos/                 # Official PACE logo
│   └── members/               # Team photos (Sandesh photo + neutral avatar placeholder)
│
├── css/
│   ├── base/                  # Reset, typography, and custom property tokens
│   ├── layout/                # Grid, navbar, and footer layouts
│   ├── components/            # Buttons, cards, forms, modal components
│   ├── sections/              # Page-specific section styling
│   └── main.css               # Central entry CSS importing modular layers in strict order
│
├── js/
│   ├── main.js                # ES Module entry point
│   ├── app.js                 # Router & page initialization dispatcher
│   ├── components/            # Navbar, footer, memberCard, contactForm logic
│   ├── pages/                 # Page-specific JS controllers (home, about, events, etc.)
│   ├── data/                  # Data access modules reading local JSON
│   ├── services/              # API & Auth abstraction wrappers (fetch local JSON now, real API later)
│   └── utils/                 # Constants & helper utilities
│
└── data/                      # Static JSON datasets (members.json, events.json, projects.json, notices.json)
```

## Data Access Layer & Swappable API Design
- Component logic consumes data via `js/services/api.js`.
- `js/services/api.js` currently fetches from static JSON files in `data/`.
- Future migration to a REST API requires modifying only `js/services/api.js` while maintaining function signatures.
