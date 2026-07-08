# Barnacle Bistro Restaurant Website

A premium, fully responsive, glassmorphism-themed restaurant website for **Barnacle Bistro**, located in Hyderpora, Srinagar, Jammu & Kashmir. 

This client project was developed by **SM Web Studio** as a modern front-end web application (React, TypeScript, Vite) optimized for static hosting on **GitHub Pages**.

---

## 🌟 Key Features

1. **Interactive 3D Hero Scene**: An elegant, dark-themed 3D scene powered by Spline, loaded dynamically with a graceful skeleton spinner and high-quality static image fallback.
2. **Glassmorphism UI**: High-end frosted glass styling (backdrop-blur, semi-transparent overlays, and soft borders) applied to cards, navigation drawers, reservation forms, and modals.
3. **Session-Persisted Dark / Light Mode**: Seamless theme toggler integrated into the header that adapts styling cleanly via CSS variable tokens.
4. **GSAP Entry Reveals**: Lightweight, hardware-accelerated scroll-reveal animations on section entry and card hovers with zero scroll lag.
5. **Interactive Categorized Menu**: Filterable menu supporting Starters, Momos, Wazwan, Biryani, Main Course, Breads, Beverages, and Desserts.
6. **Autoplay Video Gallery**: A media gallery featuring loop-playing muted videos that automatically play when scrolled into view (using Intersection Observer) and pause when out of view, with a global mute/unmute control and a fullscreen lightbox.
7. **WhatsApp-Powered Reservation Form**: Fully client-side form that validates customer details, compiles them into a structured text message, and opens WhatsApp directly to book tables.
8. **Direct Delivery Integrations**: Brand-colored, high-fidelity ordering buttons pointing directly to Zomato and Swiggy listings, plus direct call buttons.
9. **Interactive Map**: Google Maps location embed showing the Hyderpora location with a "Get Directions" anchor.
10. **FAQ Accordion**: Smoothly collapsing details list clarifying common operational and dining questions.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Animations**: GSAP (GreenSock Animation Platform) + Intersection Observer
- **3D Canvas**: `@splinetool/react-spline` + `@splinetool/runtime`
- **Icons**: Lucide React + Custom brand SVGs (for WhatsApp, Zomato, Swiggy, Facebook, Instagram)
- **Styling**: Vanilla CSS utilizing CSS Custom Properties (Variables) for stateful theming

---

## ⚙️ Updating Client Placeholders

All restaurant configuration, details, menu items, reviews, FAQs, and links are stored in a single central file to make updates quick and simple for the client or studio:

👉 **[src/data/siteConfig.ts](file:///c:/Users/Baha/Documents/Barnacle%20bistro/src/data/siteConfig.ts)**

Here you can edit:
- **WhatsApp Reservation & Order Number**: `whatsappNumber` (e.g., `7780938743`)
- **Call Restaurant Phone**: `phone` (e.g., `9906387311`)
- **Address & Hours**: `contact.address` and `contact.hours`
- **Delivery URLs**: Zomato and Swiggy links
- **Social URLs**: Facebook, Instagram, WhatsApp quick links
- **Google Maps URLs**: Iframe `googleMapsEmbedUrl` and directions `googleMapsDirectionUrl`
- **Interactive 3D Scene**: Spline `.splinecode` asset link and fallback image
- **Menu Catalog**: Complete list of sections, items, descriptions, prices, and tags (`isVeg`, `isSpicy`, `isPopular`)
- **Testimonials & Gallery**: Customer quotes and media URLs (images/videos)

---

## 🚀 Running Locally

Follow these steps to run the development server locally:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open the browser**:
   Vite will serve the app at `http://localhost:5173`.

---

## 📦 Building for Production

Compile the TypeScript and bundle the assets into optimized static files:
```bash
npm run build
```
This generates a `dist/` directory containing the optimized static assets (HTML, CSS, JS chunks).

---

## 🌐 Deploying to GitHub Pages

Since the project is configured with relative base paths (`base: './'` in `vite.config.ts`), it compiles for subpath-agnostic deployments out of the box.

### Option 1: Automatic Deployment (Recommended)
You can use the popular `gh-pages` package to deploy directly from your local terminal:

1. **Install the deployment tool**:
   ```bash
   npm install -D gh-pages
   ```

2. **Add scripts to `package.json`**:
   Open `package.json` and add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy with one command**:
   ```bash
   npm run deploy
   ```
   This will build the project and push the `dist/` folder contents to a `gh-pages` branch on your GitHub repository, making it live in minutes.

### Option 2: Deploying via GitHub Actions
Alternatively, you can configure GitHub to build and deploy your pages automatically whenever you push to the `main` branch:
1. Go to your repository settings on GitHub.
2. Select **Pages** from the sidebar.
3. Under **Build and deployment**, change the source to **GitHub Actions**.
4. Create a workflow using the static pages template, pointing the deployment artifact to the `dist/` directory.
