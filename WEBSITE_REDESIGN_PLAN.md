# Saint Systems (saint.my) - Website Redesign Plan

## Table of Contents

1. [Current State Audit](#1-current-state-audit)
2. [Redesign Goals](#2-redesign-goals)
3. [Information Architecture](#3-information-architecture)
4. [Color Palette & Branding](#4-color-palette--branding)
5. [Typography](#5-typography)
6. [UX Strategy](#6-ux-strategy)
7. [Page-by-Page Redesign](#7-page-by-page-redesign)
8. [Content Strategy](#8-content-strategy)
9. [Technical Recommendations](#9-technical-recommendations)
10. [Responsive Design](#10-responsive-design)
11. [Performance & SEO](#11-performance--seo)
12. [Implementation Phases](#12-implementation-phases)

---

## 1. Current State Audit

### Company Profile

- **Name:** Saint Systems Sdn Bhd
- **Industry:** Electrical & ICT Services (Malaysia)
- **Tagline:** "Having fun building businesses we are proud of, without boundaries."
- **Two Divisions:** IT Services (ICT equipment & networking) and E&E (Electrical & Engineering)

### Current Website Issues

| Area | Issue |
|------|-------|
| **Platform** | WordPress with Divi theme v4.27.5 - outdated, heavy page builder |
| **Design** | Generic template look, lacks brand personality and modern aesthetics |
| **Color** | Single accent (#2EA3F2) with no cohesive palette; feels cold and corporate |
| **Typography** | Open Sans as primary - overused, doesn't differentiate the brand |
| **Content** | Sparse copy on many pages; service pages lack depth and detail |
| **UX** | Deep page hierarchy (10+ service sub-pages from 2015, many likely outdated) |
| **Performance** | Heavy Divi framework, multiple font loads, unoptimized assets |
| **Mobile** | Responsive but not mobile-first; hamburger menu is an afterthought |
| **SEO** | Basic schema markup present, but thin content hurts rankings |
| **Trust** | No visible testimonials, case studies, certifications, or team photos |
| **CTA** | Weak calls-to-action; no clear conversion funnel |

### Current Sitemap (23 pages)

Many pages date back to 2015 and are likely stale:
- Homepage, Who We Are, IT Services, E&E, Clients, Contact Us
- 9 individual managed service pages (Security, Network, IPS/IDS, Dedicated Server, Firewall, Backup, Anti-virus, Fully Managed, DDoS)
- Consultancy, Downloads, Licensing, Disaster Recovery, Virtualization
- Test/staging pages (test, index-test)

---

## 2. Redesign Goals

### Primary Objectives

1. **Establish credibility** - Position Saint Systems as a modern, trustworthy ICT & electrical services provider
2. **Generate leads** - Every page should drive visitors toward contact/quote requests
3. **Simplify navigation** - Consolidate 23 pages into a focused, scannable structure
4. **Modernize visually** - Replace generic template look with a distinctive, professional identity
5. **Improve content** - Replace thin copy with compelling, benefit-driven content
6. **Mobile-first** - Design for mobile screens as the primary experience

### Key Metrics to Improve

- Time on site and pages per session
- Contact form submission rate
- Bounce rate reduction
- Google search visibility for key Malaysian ICT/electrical service terms

---

## 3. Information Architecture

### Proposed Sitemap (Consolidated)

```
saint.my/
├── Home                          (hero + overview of both divisions)
├── About                         (company story, values, team, certifications)
├── Services/
│   ├── IT Services               (ICT equipment, networking, implementation)
│   │   ├── Managed Services      (consolidated: security, network, backup, etc.)
│   │   ├── Infrastructure        (servers, virtualization, disaster recovery)
│   │   └── Consultancy           (advisory, licensing, audits)
│   └── Electrical Engineering    (consultancy, design, project management)
├── Projects / Case Studies       (replaces "Clients" - show actual work)
├── Resources                     (downloads, blog/knowledge base)
└── Contact                       (form, map, office details)
```

### Navigation Structure

**Primary Nav (6 items max):**

```
[ Logo ]   About   IT Services ▾   Electrical ▾   Projects   Contact   [ Get a Quote ]
```

- Dropdown menus for service categories
- Persistent CTA button ("Get a Quote") in nav bar
- Mobile: slide-out drawer navigation with accordion sub-menus

---

## 4. Color Palette & Branding

### Proposed Color System

#### Primary Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Navy** | Dark navy blue | `#0A1628` | Headers, nav bar, footer, text on light backgrounds |
| **Electric Blue** | Vivid blue | `#2563EB` | Primary CTA buttons, links, active states, accents |
| **White** | Pure white | `#FFFFFF` | Backgrounds, card surfaces, text on dark backgrounds |

#### Secondary Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Sky Blue** | Light blue | `#DBEAFE` | Section backgrounds, highlights, badges |
| **Amber** | Warm accent | `#F59E0B` | Secondary CTA, alerts, star ratings, energy/electrical theme tie-in |
| **Slate Gray** | Neutral gray | `#64748B` | Body text, secondary text, borders |
| **Light Gray** | Background gray | `#F8FAFC` | Alternating section backgrounds |

#### Semantic Colors

| Role | Hex | Usage |
|------|-----|-------|
| **Success** | `#10B981` | Success states, uptime indicators |
| **Warning** | `#F59E0B` | Caution states |
| **Error** | `#EF4444` | Error states, critical alerts |

### Color Rationale

- **Navy + Electric Blue:** Conveys trust, technology, and professionalism - core to both ICT and electrical industries
- **Amber accent:** Nods to the electrical/energy side of the business, adds warmth to an otherwise cool palette
- **High contrast ratio:** All text/background combinations exceed WCAG AA standards

### Gradient Usage

```css
/* Hero overlays and feature sections */
background: linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%);

/* CTA buttons on hover */
background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);

/* Electrical division accent */
background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
```

---

## 5. Typography

### Font Pairing

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| **Headings** | **Inter** | 700 (Bold), 600 (Semi-bold) | system-ui, sans-serif |
| **Body** | **Inter** | 400 (Regular), 500 (Medium) | system-ui, sans-serif |
| **Accent/Labels** | **JetBrains Mono** | 400 | monospace |

### Why Inter?

- Designed specifically for screens with excellent readability at all sizes
- Variable font available (single file, all weights) for performance
- Professional and modern without being trendy
- Works in both English and Malay contexts

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|----------------|---------------|--------|-------------|
| H1 | 56px / 3.5rem | 36px / 2.25rem | 700 | 1.1 |
| H2 | 40px / 2.5rem | 28px / 1.75rem | 700 | 1.2 |
| H3 | 28px / 1.75rem | 22px / 1.375rem | 600 | 1.3 |
| H4 | 22px / 1.375rem | 18px / 1.125rem | 600 | 1.4 |
| Body | 16px / 1rem | 16px / 1rem | 400 | 1.6 |
| Small | 14px / 0.875rem | 14px / 0.875rem | 400 | 1.5 |
| Caption | 12px / 0.75rem | 12px / 0.75rem | 500 | 1.4 |

---

## 6. UX Strategy

### Design Principles

1. **Clarity over cleverness** - Every element should communicate purpose instantly
2. **Progressive disclosure** - Show essential info first, details on demand
3. **Social proof everywhere** - Weave trust signals throughout, not just on one page
4. **One primary CTA per screen** - Reduce decision fatigue
5. **Scannable content** - Use cards, icons, bullet points over long paragraphs

### Component Library

#### Cards

```
┌─────────────────────────┐
│  [ Icon ]               │
│                         │
│  Service Title          │
│  Brief 2-line           │
│  description here       │
│                         │
│  Learn More →           │
└─────────────────────────┘
```

- Subtle shadow on hover (`box-shadow: 0 4px 20px rgba(0,0,0,0.08)`)
- Rounded corners (12px)
- White background with 1px `#E2E8F0` border

#### Buttons

| Type | Style | Usage |
|------|-------|-------|
| **Primary** | Filled Electric Blue, white text, 12px radius | Main CTAs (Get a Quote, Contact Us) |
| **Secondary** | Outlined Electric Blue, blue text, 12px radius | Secondary actions (Learn More, View Details) |
| **Ghost** | Text only with arrow icon, blue | In-page navigation (Read More →) |
| **Amber CTA** | Filled Amber, dark text | High-urgency CTAs (Emergency Services) |

#### Trust Badges

- Client logos in grayscale strip (color on hover)
- Certification badges (ISO, CIDB, etc.)
- Years in business counter
- Project completion numbers

### Interaction Patterns

- **Scroll animations:** Subtle fade-up on section entry (IntersectionObserver, no heavy libraries)
- **Hover states:** Scale(1.02) on cards, color transitions on buttons (200ms ease)
- **Loading:** Skeleton screens instead of spinners
- **Forms:** Inline validation, floating labels, progress indicators for multi-step forms

---

## 7. Page-by-Page Redesign

### 7.1 Homepage

**Goal:** Immediately communicate what Saint Systems does and drive visitors to services or contact.

#### Layout (top to bottom)

```
┌──────────────────────────────────────────────────┐
│  NAVBAR: Logo | About | IT Services ▾ |          │
│          Electrical ▾ | Projects | Contact       │
│                                    [ Get a Quote ]│
├──────────────────────────────────────────────────┤
│                                                  │
│  HERO SECTION                                    │
│  ─────────────────                               │
│  "Powering Malaysian Businesses                  │
│   with Smart ICT & Electrical Solutions"         │
│                                                  │
│  Subtext: Trusted partner for managed IT         │
│  services, networking, and electrical            │
│  engineering since [year].                       │
│                                                  │
│  [ Get a Quote ]  [ Our Services ]               │
│                                                  │
│  Background: Dark navy gradient with subtle      │
│  circuit-board/electrical pattern overlay         │
├──────────────────────────────────────────────────┤
│                                                  │
│  TRUST BAR                                       │
│  ─────────                                       │
│  "Trusted by leading organizations"              │
│  [ Logo ] [ Logo ] [ Logo ] [ Logo ] [ Logo ]    │
│  (grayscale client logos)                        │
├──────────────────────────────────────────────────┤
│                                                  │
│  TWO DIVISIONS (Side by side cards)              │
│  ──────────────                                  │
│  ┌──────────────┐  ┌──────────────┐              │
│  │ ⚡ IT         │  │ 🔌 Electrical │              │
│  │ Services     │  │ Engineering  │              │
│  │              │  │              │              │
│  │ Managed IT,  │  │ Consultancy, │              │
│  │ networking,  │  │ design, and  │              │
│  │ servers &    │  │ project mgmt │              │
│  │ security     │  │ for power    │              │
│  │              │  │ systems      │              │
│  │ [Explore →]  │  │ [Explore →]  │              │
│  └──────────────┘  └──────────────┘              │
├──────────────────────────────────────────────────┤
│                                                  │
│  KEY SERVICES GRID (3 columns)                   │
│  ──────────────────                              │
│  "What We Do Best"                               │
│                                                  │
│  [ Managed Security ] [ Infrastructure ]         │
│  [ Network Design ]   [ DDoS Protection ]        │
│  [ Backup & DR ]      [ Consultancy ]            │
│                                                  │
│  Each: icon + title + 1-line desc + link         │
├──────────────────────────────────────────────────┤
│                                                  │
│  WHY CHOOSE US (Stats + differentiators)         │
│  ──────────────                                  │
│  "Why Malaysian Businesses Trust Us"             │
│                                                  │
│  [ 10+ ]    [ 500+ ]    [ 24/7 ]    [ 99.9% ]   │
│  Years      Projects    Support     Uptime       │
│                                                  │
│  3 differentiator blocks with icons:             │
│  - Local expertise, global standards             │
│  - End-to-end solutions (IT + Electrical)        │
│  - Proactive monitoring & support                │
├──────────────────────────────────────────────────┤
│                                                  │
│  FEATURED PROJECTS / CASE STUDIES                │
│  ────────────────────────────────                │
│  "Our Recent Work"                               │
│  2-3 project cards with images,                  │
│  client name, brief scope, results               │
├──────────────────────────────────────────────────┤
│                                                  │
│  CTA BANNER                                      │
│  ──────────                                      │
│  Navy gradient background                        │
│  "Ready to power up your business?"              │
│  [ Contact Us ]  [ Request a Quote ]             │
├──────────────────────────────────────────────────┤
│                                                  │
│  FOOTER                                          │
│  ──────                                          │
│  4 columns:                                      │
│  Col 1: Logo + brief company desc                │
│  Col 2: Quick Links (services)                   │
│  Col 3: Contact info (address, phone, email)     │
│  Col 4: Social media + certifications            │
│                                                  │
│  Bottom bar: Copyright + Privacy + Terms          │
└──────────────────────────────────────────────────┘
```

### 7.2 About Page

**Goal:** Build trust and humanize the brand.

**Sections:**
1. **Hero banner** - "Who We Are" with company photo
2. **Our Story** - Founded in [year], journey narrative (2-3 short paragraphs)
3. **Mission & Vision** - Two-column layout with icons
4. **Our Values** - 4 value cards (e.g., Integrity, Innovation, Reliability, Partnership)
5. **Team Section** - Leadership team with photos, names, titles, LinkedIn links
6. **Certifications & Affiliations** - Logo grid of certifications (CIDB, ISO, etc.)
7. **CTA** - "Want to work with us?" banner

### 7.3 IT Services Page

**Goal:** Clearly present the IT service portfolio and drive inquiries.

**Sections:**
1. **Hero** - "IT Services" with relevant imagery
2. **Overview** - Brief paragraph on ICT capabilities
3. **Service Categories** (tabs or accordion):
   - **Managed Services** - Security, Network, Firewall, Backup, Anti-virus, IDS/IPS, DDoS (consolidated from 9 separate pages into one structured page with tabs)
   - **Infrastructure** - Servers, Virtualization, Disaster Recovery, Dedicated Servers
   - **Consultancy** - Advisory, Licensing, Auditing
4. **Equipment & Supply** - Range of ICT equipment offered
5. **Service Level Comparison** - Table or cards showing tiers
6. **CTA** - "Discuss your IT needs"

### 7.4 Electrical Engineering Page

**Goal:** Showcase E&E capabilities to property developers and large consumers.

**Sections:**
1. **Hero** - "Electrical & Engineering" with project photography
2. **Service Overview** - Consultancy, design, project management, implementation
3. **Sectors Served** - Commercial, Residential, Industrial (icon cards)
4. **Project Gallery** - Photo grid of completed electrical projects
5. **Process** - 4-step process visual (Consult → Design → Implement → Support)
6. **CTA** - "Plan your electrical project"

### 7.5 Projects / Case Studies Page

**Goal:** Provide social proof through real completed work.

**Sections:**
1. **Hero** - "Our Projects"
2. **Filter bar** - Filter by: IT Services | Electrical | All
3. **Project grid** - Cards with:
   - Project image
   - Client name (with permission)
   - Project type tag
   - Brief scope description
   - "View Case Study →" link
4. **Individual case study template:**
   - Challenge → Solution → Results format
   - Key metrics/outcomes
   - Client testimonial quote

### 7.6 Contact Page

**Goal:** Make it dead simple to reach out.

**Sections:**
1. **Hero** - "Let's Talk" with welcoming imagery
2. **Two-column layout:**
   - **Left:** Contact form (Name, Email, Phone, Company, Service Interest dropdown, Message, Submit)
   - **Right:** Office address with embedded map, phone number, email, office hours
3. **Social media links**
4. **FAQ accordion** - 5-6 common questions to reduce friction

---

## 8. Content Strategy

### Tone of Voice

| Attribute | Description |
|-----------|-------------|
| **Professional** | Competent and knowledgeable, not stiff or corporate |
| **Direct** | Clear, concise language; no jargon without explanation |
| **Confident** | State capabilities plainly without overselling |
| **Approachable** | Warm but not casual; easy to understand |
| **Malaysian** | Embrace local context; reference Malaysian standards and regulations |

### Content Priorities

1. **Rewrite all service descriptions** - Focus on client benefits, not just features
2. **Add case studies** - Minimum 3-5 real project examples with measurable outcomes
3. **Create an FAQ** - Address common questions about services, pricing, timeline
4. **Gather testimonials** - Request quotes from existing clients
5. **Team bios** - Humanize the company with real names and photos
6. **Blog/Resources** - Establish thought leadership with 1-2 articles per month

### Content Templates

#### Service Description Formula
```
[Service Name]

Problem: What challenge does the client face?
Solution: How does Saint Systems solve it?
Benefits: 3 bullet points of outcomes
Includes: What's covered in the service
CTA: "Get started" / "Request a quote"
```

#### Case Study Formula
```
[Project Title]

Client: [Company name]
Industry: [Sector]
Challenge: 2-3 sentences on the problem
Solution: What Saint Systems delivered
Results: 2-3 measurable outcomes
Quote: Client testimonial
```

---

## 9. Technical Recommendations

### Recommended Tech Stack

| Component | Recommendation | Rationale |
|-----------|---------------|-----------|
| **Framework** | Next.js (App Router) | SSR/SSG for SEO, React ecosystem, fast performance |
| **Styling** | Tailwind CSS | Utility-first, consistent design system, small bundle |
| **CMS** | Headless CMS (Sanity or Strapi) | Structured content, API-driven, easy for non-devs |
| **Forms** | React Hook Form + server action | Lightweight, validated, spam-protected |
| **Animations** | Framer Motion (minimal) | Smooth, performant, declarative |
| **Hosting** | Vercel or Cloudflare Pages | Edge delivery, Malaysian PoPs, auto-deploy |
| **Analytics** | Plausible or Umami | Privacy-friendly, lightweight, PDPA-compliant |
| **Email** | Resend or SendGrid | Transactional emails for form submissions |

### Alternative: WordPress Rebuild
If the team prefers to stay on WordPress:
- Theme: GeneratePress or Kadence (lightweight, fast)
- Builder: Gutenberg blocks only (no Divi)
- Caching: WP Rocket or LiteSpeed Cache
- Hosting: Cloudways with Malaysian server location

### Key Technical Requirements

- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Lighthouse score:** 90+ on all categories
- **Image format:** WebP with AVIF fallback, lazy loading
- **Font loading:** `font-display: swap`, preload critical fonts
- **SSL:** HTTPS enforced across all pages
- **Accessibility:** WCAG 2.1 AA compliance minimum

---

## 10. Responsive Design

### Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| **Mobile** | 0 - 639px | Phones (portrait) |
| **Tablet** | 640px - 1023px | Tablets, phones (landscape) |
| **Desktop** | 1024px - 1279px | Laptops, small monitors |
| **Wide** | 1280px+ | Desktop monitors |

### Mobile-Specific Considerations

- **Navigation:** Slide-out drawer with grouped service links
- **Hero:** Shorter height, stacked CTA buttons
- **Service cards:** Single column, swipeable carousel option
- **Contact form:** Full-width inputs, sticky submit button
- **Stats:** 2x2 grid instead of 4-column row
- **Footer:** Accordion-style collapsible sections
- **Touch targets:** Minimum 44x44px for all interactive elements
- **Phone numbers:** Clickable `tel:` links

---

## 11. Performance & SEO

### Performance Budget

| Asset | Budget |
|-------|--------|
| Total page weight | < 500KB (initial load) |
| JavaScript | < 100KB (gzipped) |
| CSS | < 30KB (gzipped) |
| Largest image | < 200KB |
| Fonts | < 50KB (variable font) |
| Time to Interactive | < 3 seconds on 3G |

### SEO Strategy

1. **Keyword targets:**
   - "managed IT services Malaysia"
   - "ICT services provider KL"
   - "electrical engineering consultancy Malaysia"
   - "managed security services Malaysia"
   - "IT infrastructure Malaysia"

2. **On-page SEO:**
   - Unique title tags and meta descriptions per page
   - Structured data (Organization, LocalBusiness, Service, BreadcrumbList)
   - Internal linking between related services
   - Alt text on all images

3. **Technical SEO:**
   - XML sitemap (auto-generated)
   - robots.txt properly configured
   - Canonical URLs
   - hreflang tags if adding Malay language version
   - 301 redirects from all old WordPress URLs to new structure

---

## 12. Implementation Phases

### Phase 1: Foundation

- Finalize brand identity (colors, typography, logo refresh if needed)
- Set up development environment and tech stack
- Create component library (buttons, cards, forms, nav)
- Build page layouts (responsive grid system)
- Implement navigation and footer

### Phase 2: Core Pages

- Homepage (hero, services overview, trust signals, CTA)
- About page (story, team, certifications)
- Contact page (form, map, info)
- Basic SEO setup (meta tags, sitemap, structured data)

### Phase 3: Service Pages

- IT Services landing page with sub-sections
- Managed Services consolidated page
- Electrical Engineering page
- Individual service detail content

### Phase 4: Content & Trust

- Projects / Case Studies page and template
- Write and publish 3-5 case studies
- Collect and add client testimonials
- Add team photos and bios
- Create resources/downloads section

### Phase 5: Launch & Optimize

- Set up analytics and conversion tracking
- Configure 301 redirects from old URLs
- Performance testing and optimization
- Cross-browser and device testing
- DNS cutover and go-live
- Monitor Core Web Vitals post-launch

---

## Summary

This redesign transforms saint.my from a dated WordPress template site into a modern, conversion-focused web presence that properly represents Saint Systems' dual expertise in ICT and electrical engineering. The plan consolidates 23 pages into a focused 8-page structure, introduces a professional navy/blue/amber color system, implements a clean typography hierarchy, and prioritizes mobile-first UX with clear conversion paths throughout.
