# ELÉVÉ UNISEX SALON - Luxury Landing Page

> *"Where Style Meets Confidence."*

A luxury, modern, and fully responsive static website created for **ELÉVÉ UNISEX SALON**. Built using semantic HTML5, pure Vanilla CSS, and modern modular ES6 JavaScript.

---

## ✦ Key Highlights & Features

- **Brand Aesthetic**: Deep black (`#0a0a0d`), warm ivory/cream, champagne & radiant gold accents, serif editorial headings (*Cormorant Garamond*), and modern geometric sans-serif (*Plus Jakarta Sans*).
- **Sticky Navbar**: Transparent on top, transforms into frosted glass (`backdrop-filter: blur(16px)`) on scroll, with reading scroll-progress bar, active section highlighting, and animated mobile hamburger drawer.
- **Hero Section**: Fullscreen editorial showcase, live pulsing badge (`● OPEN TODAY · 10:00 AM – 8:00 PM`), quick stat badges, and interactive CTAs.
- **Quick Info Bar**: 4 luxury value proposition cards (Premium Services, Expert Stylists, Hygienic & Safe, Luxury Products).
- **Interactive Services Menu**:
  - Live category filters: `ALL` | `MEN` | `WOMEN` | `UNISEX`
  - 14 bespoke salon rituals spanning Hair, Skincare, Grooming, Nails & Spa.
  - Price, duration tags, and **"Book Now"** buttons that automatically select the service and advance the booking wizard.
- **Smart Multi-Step Appointment Booking Wizard**:
  - **Step 1**: Select Service
  - **Step 2**: Select Stylist (with "Any Available Master Stylist" fallback)
  - **Step 3**: Interactive Date Picker (Quick dates: Today, Tomorrow, Upcoming days + calendar selector)
  - **Step 4**: Select Available Time Slots (categorized into Morning, Afternoon, Evening)
  - **Step 5**: Guest Information (Full Name, 10-digit Mobile, Email, Notes, Promo Code with instant discount)
  - **Step 6**: Live Summary Card with treatment breakdown and total
  - **Step 7**: Confirmation Celebration with unique reference ID (`ELV-2026-XXXX`), Add to Google Calendar (.ics), Copy Details, and localStorage persistence.
- **"My Bookings" Drawer**: View, track, or cancel saved appointments stored in the browser's `localStorage`.
- **Master Stylists Section**: Portfolio cards highlighting experience, ratings, specialties, and direct "Book With Me" action.
- **Before & After Gallery**:
  - Filterable by `ALL` | `HAIR` | `COLOUR` | `MAKEUP` | `GROOMING`
  - Full-screen Lightbox modal with keyboard arrow navigation (← / → / Esc).
- **Special Offers & Live Countdown**:
  - 4 exclusive privileges (`FIRST VISIT 20% OFF`, `HAIR + SPA ₹1,499`, `GROOMING PACKAGE ₹799`, `BRIDAL / EVENT`).
  - Active real-time countdown timer.
  - One-click promo code copy and "Claim Offer" auto-applied triggers.
- **Why Choose Us**: Editorial layout with animated number counters (10+ Stylists, 5,000+ Clients, 50+ Services, 4.9/5 Rating).
- **Interactive Testimonial Carousel**: Verified client reviews with auto-slide, touch swipe, pause-on-hover, and dot navigation.
- **Salon Experience**: Editorial photography showcase and "Take A Look Inside" visual tour.
- **Location & Contact**:
  - Address, hours, direct telephone and WhatsApp concierge links.
  - Working **"Get Directions"** button linking to Google Maps.
  - Dark luxury map visual mockup with pulsing gold pin.
  - Functioning **"Send A Direct Message"** inquiry form with input validation and luxury toast feedback.
- **Interactive FAQ Accordion**: Smooth animated expand/collapse answers to common salon questions.
- **Mobile Experience**:
  - 100% responsive without horizontal overflow across mobile, tablet, and desktop screens.
  - Fixed mobile bottom bar: `[ CALL ]` | `[ WHATSAPP ]` | `[ BOOK NOW ]`.
  - Responsive booking modal, drawer, touch-friendly carousel, and floating Back-to-Top button.

---

## ✦ Production Deployment (Free Public URL — No Domain Required)

The project is fully pre-configured for **100% free hosting** with zero domain purchases required. You can deploy it using any of the following methods to get a live, public, SSL-secured HTTPS link accessible on any device worldwide.

### Option 1: Deploy on Vercel (Recommended — Fast & Automatic)

**Via Terminal / Command Prompt:**
1. Open PowerShell or Command Prompt in this folder (`c:\Users\bhakt\OneDrive\Desktop\Unisex Salon`).
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the quick prompts:
   - *Set up and deploy?* Press **Y**.
   - *Which scope?* Select your account.
   - *Link to existing project?* Press **N**.
   - *Project name?* Press **Enter** (or choose a custom name, e.g., `eleve-salon`).
   - *Directory located?* Press **Enter** (defaults to `./`).
4. In seconds, Vercel gives you an instant public URL:
   `https://eleve-salon.vercel.app` (or similar).

**Via GitHub + Vercel Web Dashboard:**
1. Push your folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** > **"Import"** your repository.
4. Click **"Deploy"**. Your live public site is instantly ready.

---

### Option 2: Deploy on Netlify (Drag & Drop or CLI)

**Method A: Drag & Drop (Zero Code):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `Unisex Salon` project folder into the browser window.
3. In under 10 seconds, Netlify generates your free public URL:
   `https://<your-site-name>.netlify.app`.
4. In *Site configuration* > *Change site name*, you can customize the subdomain for free (e.g., `eleve-salon.netlify.app`).

**Method B: Via CLI:**
1. In this project folder, run:
   ```bash
   npx netlify deploy --prod
   ```
2. Select `Create & configure a new site`.
3. Set Publish directory to `.` (current directory).
4. Netlify will print your live production URL.

---

### Option 3: Deploy on GitHub Pages (100% Free Forever)

1. Create a repository on [GitHub](https://github.com) (e.g. `unisex-salon`).
2. In your local project terminal:
   ```bash
   git init
   git add .
   git commit -m "Deploy ELÉVÉ salon website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings** > **Pages**.
4. Under **Branch**, select `main` and folder `/(root)`, then click **Save**.
5. Your website will be live in 1-2 minutes at:
   `https://<your-username>.github.io/<your-repo-name>/`

---

### Option 4: Deploy on Render (Free Static Site or Node.js Web Service)

1. Go to [render.com](https://render.com) and sign in.
2. Click **New +** > **Static Site**.
3. Connect your GitHub repository.
4. Set:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.`
5. Click **Create Static Site**. Render will provide a free URL:
   `https://<your-app>.onrender.com`.

---

## ✦ Production Build Verification

To verify that all files, assets, relative paths, and syntax are 100% compliant before deploying:

```bash
npm run build
```

This runs `build.js` and outputs a confirmation report.

---

## ✦ Running Locally & Testing on Other Devices (Phone / Laptop)

To view the website on your computer and test it on other devices on your local Wi-Fi:

```bash
npm start
# or
node dev-server.js
```

When started, the terminal will display:
- **Local Access (this PC)**: `http://localhost:3000`
- **Network Access (Phone / Other Devices)**: `http://<your-local-ip>:3000`

### Steps for Cross-Device Testing on Wi-Fi:
1. Ensure your phone/other device is connected to the same Wi-Fi network as this computer.
2. Open your phone's browser (Safari, Chrome, etc.) and enter the **Network URL** shown in your terminal (e.g. `http://10.85.152.247:3000/`).
3. If the connection times out, run `fix-network.bat` or ensure Windows Defender Firewall allows incoming connections for Node.js on Private/Public networks.


