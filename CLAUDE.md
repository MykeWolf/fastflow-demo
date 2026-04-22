# FastFlow Emergency Plumbing — Demo Site Build Rules

## Project Brief
- **Brand:** FastFlow Emergency Plumbing
- **Location:** South Dublin — D6, D8, D12, D14 (Ranelagh, Rathmines, Terenure, Crumlin, Rathfarnham)
- **Purpose:** Demo site to sell web design services to real Dublin plumbers
- **Success criteria:** A real Dublin plumber looks at this and immediately thinks "this was built for someone like me" — and that it will get their phone ringing

---

## Pages to Build
1. **Home** — urgency hero, sticky click-to-call, trust signals, services snapshot
2. **Services** — Leaks, Blocked Drains, Boiler Breakdown, Cylinder Repair
3. **Areas We Cover** — Ranelagh, Rathmines, Terenure, Crumlin, Rathfarnham
4. **Reviews** — Google-style testimonials with names and areas
5. **Contact** — large phone number, WhatsApp link, short callback form

---

## Hero Headline
"Burst Pipe? Blocked Drain? We're in South Dublin in 60 Minutes."

---

## Core CTA Rules
- Sticky click-to-call button visible at ALL times on mobile (fixed to bottom of screen)
- Callback/quote form must appear above the fold on homepage
- Phone number must be large, tappable, and repeated on every page
- WhatsApp link on Contact page
- Every page must have at least one CTA — never let the user scroll to a dead end

---

## Mobile-First Rules
- Design for mobile first, desktop second — most emergency plumber searches happen on phones
- Minimum tap target size: 48px height for all buttons and links
- Font size minimum: 16px body, 28px+ for headlines
- No horizontal scrolling on any viewport
- Test every page at 375px width (iPhone SE) before marking done

---

## Trust Signal Rules
Include on homepage (at minimum):
- Years in business or number of jobs completed
- Response time guarantee ("60 minutes or less")
- Areas covered (named Dublin postcodes/areas, not just "Dublin")
- Google-style star rating block (even if placeholder)
- Named testimonials with area (e.g., "John M. — Ranelagh")
- Payment methods accepted (card, cash)
- Any relevant certifications (RGI registered, etc.)

---

## Copy Rules
- Write like an emergency service, not a brochure — short sentences, urgency-first
- Use the customer's language: "burst pipe", "blocked drain", "no hot water", "boiler broke"
- Never use generic agency copy ("we are passionate about delivering solutions")
- Always name specific South Dublin areas in copy — local specificity builds trust
- Every service page must state the problem, the response, and the outcome

---

## Design Rules
- Color palette: deep navy or dark charcoal + bright orange or red accent (emergency feel)
- No stock photos of random plumbers — use icons or placeholder images with captions
- Clean, fast-loading — no heavy animations or carousels
- Navigation: Logo + Phone number + "Get a Quote" button in header (always visible)
- Footer: phone, WhatsApp, areas covered, short copyright

---

## Tech Stack
- **Plain HTML/CSS/JS** — no frameworks, no build tools, no dependencies
- **Fonts:** `Plus Jakarta Sans` (body) + `Syne` (headings) — loaded via Google Fonts CDN
- **Layout:** CSS Grid and Flexbox — no Bootstrap, no Tailwind
- **Styling:** Hand-written CSS using custom properties for colors, spacing, and typography
- **JS:** Vanilla JS only — sticky nav, mobile menu toggle, smooth scroll
- **No:** React, Vue, Astro, jQuery, or any npm packages

### File Structure
```
fastflow-demo/
├── index.html
├── services.html
├── areas.html
├── reviews.html
├── contact.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

### What Makes It Look Premium
- CSS custom properties for consistent design tokens
- Smooth CSS transitions on all interactive elements
- Proper whitespace and breathing room between sections
- Box shadows and subtle gradients used sparingly
- No Lorem ipsum, no placeholder junk — every word is specific to FastFlow

---

## What NOT to Build
- Blog or news section
- Social media feeds or links
- Complex animations or scroll effects
- Anything that slows load time
- Chatbots or live chat widgets
- Any page not listed above

---

## Definition of Done (per page)
- [ ] Renders correctly at 375px (mobile) and 1280px (desktop)
- [ ] At least one CTA above the fold
- [ ] Phone number visible without scrolling
- [ ] No placeholder lorem ipsum text remaining
- [ ] Copy is specific to South Dublin plumbing — not generic
