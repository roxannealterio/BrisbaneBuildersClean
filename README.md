# Brisbane Builders Clean, Website

A multi page marketing site for **Brisbane Builders Clean**, Brisbane's Airbnb
turnover and cleaning service. Plain HTML, CSS and JS with no build step and
no dependencies, so it drops straight into GitHub Pages or any static host.

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `services.html` | Services (detailed breakdown of each service) |
| `about.html` | About (story, values, stats, service areas) |
| `pricing.html` | Pricing (three packages plus FAQ) |
| `contact.html` | Contact (details plus enquiry form) |
| `quote.html` | Get a Quote, a multi step questionnaire |
| `privacy.html` | Privacy policy (starter template) |
| `terms.html` | Terms, including members giveaway terms (starter template) |

Shared files: `styles.css` (all styling), `script.js` (menu, FAQ, quote wizard,
contact form, config), and `images/` (photos plus favicon and share image).

### Brand assets included

- `images/favicon.svg` plus PNG icons (`favicon-32.png`, `apple-touch-icon.png`,
  `icon-192.png`), linked in every page head.
- `images/og-image.jpg`, the social share image used by the Open Graph and Twitter
  meta tags, so links look good when shared.
- A "5 star guarantee" band on the home and pricing pages.
- The `og:url` and `canonical` tags use `https://stayready.com.au/` as the base.
  If your real domain differs, search `BASE =` in the build is not shipped, so just
  find and replace `https://stayready.com.au/` across the HTML files.

### Legal pages

`privacy.html` (Australian Privacy Principles based) and `terms.html` are full,
structured documents. The members giveaway terms live at `terms.html#giveaway` and
the giveaway callout links to them. Two practical notes: add your **ABN** once you
have one, and because a prize draw tied to a paid membership is a regulated trade
promotion in Australia, it is worth a quick check against current Office of Fair
Trading Queensland requirements before you run it.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Push every file to the `main` branch, keeping them at the repo root.
2. Repo Settings, then Pages, then Build and deployment, Source: Deploy from a branch.
3. Choose `main` / `(root)` and save. Live within a minute or two at
   `https://<your-username>.github.io/<repo-name>/`.

## The quote form and contact form

Both the Get a Quote questionnaire and the Contact form work with no backend. When
a visitor submits, their own email app opens with all the answers filled in,
addressed to you. Nothing to set up, it works the moment you deploy.

### Receive submissions automatically (optional)

Both the quote questionnaire and the contact form can post straight to your inbox
via a free [Formspree](https://formspree.io) form. There is now one place to set
this up:

1. Create a Formspree form and copy its endpoint.
2. Open `script.js`. At the very top is a `STAY_READY_CONFIG` block. Paste your
   endpoint into `formspree: ""` and set `email` to your business address.
3. Done. Both forms now post to Formspree (with the email app fallback still in
   place if anything fails), show a success message, and clear themselves.

Each form also has a privacy consent checkbox that must be ticked before sending.

## Photos

The real photos you supplied are already placed:

| File | Where it shows | Source |
|------|----------------|--------|
| `hero.jpg` | Home hero | River and city view |
| `feature-room.jpg` | "More 5 star reviews" section, plus Services and About | Kitchen |
| `gallery-1.jpg` | Gallery, Immaculate Interiors | Kitchen |
| `gallery-2.jpg` | Gallery, Resort Facilities | Pool |
| `gallery-3.jpg` | Gallery, Grand Lobbies, plus Property Checks row | Lobby |
| `gallery-4.jpg` | Gallery, Brisbane Views | River and city view |
| `cta.jpg` | Call to action banner | Pool |

The four service card thumbnails (`service-turnovers.jpg`, `service-linen.jpg`,
`service-restocking.jpg`, `service-checks.jpg`) are still branded placeholders.
Replace any of these with your own photo using the same filename and nothing else
needs to change. Good shapes: hero and cta landscape, feature-room tall portrait,
gallery square, service cards 4:3.

## Update text, prices and contact details

- Pricing on `pricing.html` is **flat per turnover**. The example member rates
  ($89 1 bed, $119 2 bed, $159 3 bed) and the casual rate ($109) are starting
  points. Set your real numbers in the three pricing cards and the price guide
  table. The "casual is about 20% higher" line and the inclusions are easy to edit.
- Phone and email appear in the footer of every page and on `contact.html`
  (search `0419 382 733` and `hello@stayready.com.au`).
- Stats (200+, 4.9 stars and so on) on Home, Services and About are placeholders.
- Social links: the Follow Us block in the footer (`href="#"` becomes your URLs).
- Service area suburbs are listed on `about.html`.

## Memberships, the giveaway and a legal note

The site now leads with memberships (recurring) and treats casual one offs as the
higher priced option. The quote form asks each visitor which plan they prefer, and
that answer is included in the request you receive.

The members giveaway is presented as an automatic perk of membership. **Prize draws
tied to a paid membership are regulated in Australia as trade promotions.** Before
you launch it, write proper terms and conditions and check the current rules with
the Office of Fair Trading Queensland (and the ACCC). The site uses a neutral
"Full terms apply" line and links nowhere yet, so add a terms page or link when you
have one. This is general information, not legal advice.

## Change colours and fonts

Every colour and typeface is a CSS variable in the `:root { }` block at the top of
`styles.css`. Change `--gold`, `--espresso`, `--cream` and the rest once and it
updates everywhere.

## Search engine setup (SEO)

The site ships ready for search engines and social sharing:

- **Structured data (JSON-LD)** on every page: a `LocalBusiness` block (name,
  phone, email, Brisbane area served, hours, price range and your service list),
  `WebSite` on the home page, `BreadcrumbList` on inner pages, and an `FAQPage`
  block on the pricing page that can earn FAQ rich results in Google.
- **Keyword and location focused titles and descriptions** on each page
  (for example "Airbnb Cleaning and Turnover Service Brisbane").
- **`sitemap.xml`**, **`robots.txt`** (which points to the sitemap), and a
  **`manifest.webmanifest`** for installability.
- Open Graph and Twitter cards with the share image, canonical URLs, `en-AU`
  language and Brisbane geo meta tags.

After you set your real domain, do a find and replace of `https://stayready.com.au/`
across the files, then:

1. Submit `sitemap.xml` in [Google Search Console](https://search.google.com/search-console).
2. Create a free **Google Business Profile** for "Brisbane Builders Clean,
   Brisbane" and link it to your site. For a local service this is the single
   biggest driver of traction.
3. Add real social profile URLs to `SOCIAL` is in the build only, so instead add
   them to the `sameAs` list by hand if you want them in the structured data, and
   update the footer `href="#"` social links.

**Important:** do not add review or star-rating structured data until you have
genuine reviews. Fake review markup breaches Google's guidelines and can get the
site penalised. Once you have real reviews, add an `aggregateRating` to the
`LocalBusiness` block.


- No tracking or cookies. Fonts load from Google Fonts.

## Make quote leads reach your inbox (important)
All three forms (the hero quote form, the multi step quote wizard, and the
contact form) are already wired to submit to Formspree. To switch them on:

1. Create a free form at https://formspree.io (use hello@brisbanebuildersclean.com.au).
2. Copy your endpoint (looks like https://formspree.io/f/abcdwxyz).
3. Open script.js, find STAY_READY_CONFIG at the top, and paste it:
       formspree: "https://formspree.io/f/abcdwxyz",
4. Save and re deploy. Quote requests now land in your inbox instantly.

Until an endpoint is set, forms fall back to opening the visitor's email app,
which loses leads, so do this before running any ads.

## Reviews and before/after (credibility)
- The reviews section links to "#" as a placeholder. Replace it with your real
  Google reviews URL once your Google Business Profile is live.
- The Before and After images (images/ba-oven.jpg, ba-bathroom.jpg, ba-carpet.jpg)
  are placeholders. Replace them with real before/after photos from your jobs,
  keeping the same file names, and they will appear automatically.
- The testimonials are samples. Swap them for real customer quotes when you have them.

## Local SEO pages
- Suburb pages (bond-cleaning-carindale.html, etc.) target "bond cleaning [suburb]"
  searches. Add or rename suburbs by editing the SUBURBS list in _build.py.
- The bond cleaning checklist page (bond-cleaning-checklist.html) is useful content
  and SEO. Both are linked in the footer and included in sitemap.xml.

## SEO: what is built in, and what gets you to the top
Already in the site (good on-page SEO):
- Unique title + meta description on every page
- LocalBusiness schema (hours, geo, phone, price, service areas)
- Per service and per suburb Service schema
- FAQ schema, breadcrumbs, Open Graph / Twitter cards
- Canonical tags, sitemap.xml, robots.txt, mobile friendly, fast static pages
- Suburb pages and a bond cleaning checklist page for local + content SEO

On-page SEO is necessary but NOT enough to rank a brand new site. For a local
service, the top results are driven mostly by OFF-site signals, in order:
1. Google Business Profile (the map pack). Set it up, verify it, add photos,
   services, hours and your service area. This is the single biggest lever.
2. Reviews. Volume and recency of Google reviews. Ask every happy customer.
3. Local citations. List the business with identical Name, Address, Phone on
   Yellow Pages, True Local, Yelp, hipages, Oneflare, Airtasker, StartLocal,
   Brisbane directories. Consistency matters.
4. Backlinks. Local blogs, suppliers, partners linking to you.
5. Fresh content targeting searches (guides, more suburb pages).

### Google Search Console (do this once live)
1. Go to search.google.com/search-console and add bondbackclean... (your domain).
2. Verify (DNS record or the HTML meta tag method).
3. Submit https://brisbanebuildersclean.com.au/sitemap.xml under Sitemaps.
This tells Google your pages exist and tracks how you rank.

### Bing Webmaster Tools
Repeat the same at bing.com/webmasters and submit the sitemap. Bing is small
but free traffic.
