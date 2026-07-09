# Zynex Global — Next.js Website

A modern, fast, and SEO-optimized Next.js website for Zynex Global, a B2B exporter of premium dehydrated fruits, vegetables, and food ingredients.

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Adding Real Images

All product and facility images are placeholder placeholders. To add real images:

1. Place images in the `public/images/` directory:
   - `public/images/hero-bg.jpg` — Hero background
   - `public/images/products/onion-flakes.jpg`
   - `public/images/products/mango-slices.jpg`
   - `public/images/products/banana-chips.jpg`
   - `public/images/products/chilli-flakes.jpg`
   - `public/images/products/coconut-chips.jpg`
   - `public/images/products/tomato-flakes.jpg`
   - `public/images/operations/facility-1.jpg` through `facility-4.jpg`
   - `public/images/certificates/cert-1.jpg` through `cert-3.jpg`
2. Search for `{/* TODO: replace placeholder image */}` comments in the code to find all places where images need to be swapped.

## Product Catalog PDF

Place your product catalog PDF at `public/catalog.pdf`. The current download link will work once the file is in place.

## Email Setup (Contact Form)

The contact form uses [Resend](https://resend.com) to send emails. To enable:

1. Create a [Resend](https://resend.com) account
2. Get your API key
3. Set the environment variable `RESEND_API_KEY`
4. Verify your sending domain

## Environment Variables

Create a `.env.local` file (see `.env.local.example` for reference):

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for contact form emails | Yes (for email delivery) |
| `CONTACT_EMAIL` | Email to receive contact form submissions | No (defaults to admin@zynexglobal.in) |
| `TURSO_DATABASE_URL` | Turso database URL | Yes (for form storage) |
| `TURSO_AUTH_TOKEN` | Turso database auth token | Yes (for form storage) |
| `NEXT_PUBLIC_SITE_URL` | Site URL for sitemap/SEO | No (defaults to https://zynexglobal.vercel.app) |

## Deploying to Vercel

1. Push this repo to GitHub
2. Connect the repo to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard (Project Settings > Environment Variables)
4. Deploy

No additional configuration needed — the project is ready to deploy as-is.

## Project Structure

```
src/
  app/               # Next.js App Router pages
    api/contact/     # Contact form API route
    products/        # Products page
    about-us/        # About Us page
    contact-us/      # Contact Us page
    certificates/   # Certificates page
    privacy-policy/  # Privacy Policy page
    sitemap.ts       # Auto-generated sitemap
    robots.ts        # Robots.txt
  components/        # Reusable components
  lib/               # Utilities (DB, rate limiting)
public/
  images/            # Static images
  catalog.pdf        # Product catalog PDF
```
