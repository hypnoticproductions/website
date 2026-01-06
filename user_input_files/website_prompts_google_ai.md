# RICHARD D. FORTUNE - CONSOLIDATED WEBSITE PROMPTS

---

## PART 1: GOOGLE STITCH PROMPT (Site Architecture & Design System)

```
PROJECT: Personal brand website for Richard D. Fortune - Technical founder, AI architect, and product builder.

OBJECTIVE: Create a consolidated online presence that positions Richard as a serious technical founder with shipped products, seeking partnerships, investment, and co-founder connections.

---

SITE STRUCTURE:

Page 1: HOME / LANDING
- Hero section with dynamic background (particle network or gradient mesh animation)
- Headline: "I Build Things That Work"
- Subhead: "Technical founder. Two shipped products. Zero excuses."
- CTA buttons: "See My Work" | "Let's Talk"
- Scroll indicator

- Section 2: Product Cards (2 cards side by side)
  Card 1: Harvester
  - Icon: Scale of justice + AI circuit
  - "AI Legal Case Preparation"
  - "Evidence in → Briefs out"
  - Status badge: "Live"
  - Link to product page
  
  Card 2: SafeTravel
  - Icon: Globe + Shield
  - "Travel Risk Intelligence"
  - "Psychology-aware safety intel"
  - Status badge: "Live"
  - Link to product page

- Section 3: Proof Bar
  - "2 Products Shipped"
  - "92% MVP Readiness"
  - "15+ AI/Tech Certifications"
  - "0 Excuses"

- Section 4: About Snapshot
  - Photo (professional headshot)
  - Brief intro (3-4 lines)
  - Location badge: "Building from St. Lucia 🇱🇨"
  - Link to full About page

- Section 5: What I'm Looking For
  - 3 columns:
    - "Co-Founders" - Sales/Marketing partner for Harvester
    - "Beta Users" - Lawyers and travelers to test products
    - "Investors" - Pre-seed for either product
  - CTA: "Start a Conversation"

- Footer:
  - Email: truthfire@imagiisom.com
  - Social links: LinkedIn, Twitter/X, GitHub
  - "Built with spite and determination"

---

Page 2: HARVESTER (Product Page)
- Hero with product screenshot/mockup
- Problem statement: "Lawyers spend 60% of their time on case prep"
- Solution statement: "Harvester does it in minutes"
- Feature grid (4-6 features with icons):
  - Universal Evidence Upload
  - AI Fact Extraction
  - Timeline Generation
  - Contradiction Detection
  - Brief Generation
  - Case Strategy Analysis
- Tech stack badges (React, TypeScript, Supabase, Stripe)
- Pricing cards (Solo $79, Pro $129)
- CTA: "Request Beta Access"
- Testimonials section (placeholder for future)

---

Page 3: SAFETRAVEL (Product Page)
- Hero with app interface mockup
- Problem: "Generic travel advisories don't know you"
- Solution: "SafeTravel adapts to your psychology"
- Feature grid:
  - Voice AI Agent (Trav Talkr)
  - Cognitive Profiling
  - 4 Intelligence Tiers
  - Real-Time Alerts
  - Destination Comparison
  - Behavioral Learning
- Pricing cards (Free, Pro $9.99, Business $49.99)
- CTA: "Try Free" | "Go Pro"

---

Page 4: ABOUT / CREDENTIALS
- Full bio section
- Photo
- "The Short Version" - 3 paragraphs max
- "The Situation" - Geographic isolation angle, what I'm building toward
- Credentials accordion/tabs:
  - Business & Leadership
  - AI & Technology
  - Legal
  - Wellness & Coaching
  - Proprietary Frameworks
- Timeline of career/projects
- CTA: "Download Full CV" | "Schedule Call"

---

Page 5: WORK / PORTFOLIO
- Grid of projects:
  - Harvester (featured)
  - SafeTravel (featured)
  - Fire Roots (film project)
  - Audio Jingles
  - Video Generation
  - Client Work (if any)
- Filter by: Tech / Creative / Products
- Each card expands to show details or links out

---

Page 6: CONTACT
- Headline: "Let's Build Something"
- Contact form (Name, Email, Subject dropdown, Message)
- Subject options:
  - Beta Testing (Harvester)
  - Beta Testing (SafeTravel)
  - Partnership Inquiry
  - Investment Discussion
  - Consulting
  - Other
- Direct contact info:
  - Email: truthfire@imagiisom.com
  - Phone: +1 (758) 716-2802
  - Location: Castries, St. Lucia
- Calendly embed or link

---

DESIGN SYSTEM:

Color Palette:
- Primary: Deep navy (#0A1628) or Rich black (#0D0D0D)
- Accent 1: Electric blue (#00D4FF) or Cyan
- Accent 2: Gold/Amber (#FFB800) for CTAs
- Accent 3: Purple (#8B5CF6) for AI/tech elements
- Neutral: Cool grays (#1A1A2E, #2D2D44, #EAEAEA)
- Success: Green (#10B981)
- Warning: Orange (#F59E0B)

Typography:
- Headlines: Inter or Space Grotesk (bold, modern)
- Body: Inter or DM Sans (clean, readable)
- Code/Tech: JetBrains Mono or Fira Code
- Accent: Optional serif for quotes (Playfair Display)

Visual Style:
- Dark mode primary (light mode optional toggle)
- Glassmorphism cards with blur backgrounds
- Subtle gradients (navy to purple, or black to dark blue)
- Particle/network animations in hero sections
- Smooth scroll animations (fade in, slide up)
- Micro-interactions on hover (scale, glow, color shift)
- 3D elements optional (floating mockups, isometric icons)

Components:
- Buttons: Rounded corners, gradient or solid, hover glow effect
- Cards: Glass effect, subtle border, hover lift
- Badges: Pill-shaped, accent colors
- Icons: Lucide or Phosphor icons
- Navigation: Sticky header, transparent → solid on scroll
- Mobile: Hamburger menu, bottom nav optional

Imagery:
- Product mockups (browser frames, device frames)
- Abstract tech backgrounds (gradients, mesh, particles)
- Professional headshot
- Optional: Caribbean subtle elements (not touristy)

---

INTERACTIONS:

- Page transitions: Smooth fade or slide
- Scroll animations: Elements fade/slide in as they enter viewport
- Hover states: All interactive elements have clear hover feedback
- Loading states: Skeleton loaders or subtle spinners
- Form validation: Inline, real-time feedback
- Success states: Confirmation animations

---

TECHNICAL REQUIREMENTS:

- Framework: Next.js 14+ or Astro (for performance)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Forms: React Hook Form + validation
- Deployment: Vercel or Netlify
- Analytics: Plausible or Simple Analytics
- CMS (optional): Sanity or MDX for blog/updates

---

RESPONSIVE BREAKPOINTS:

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large: 1440px+

---

ACCESSIBILITY:

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader friendly
- Sufficient color contrast
- Focus indicators
- Alt text for all images

```

---

## PART 2: GOOGLE AI STUDIO PROMPT (Full Code Generation)

### PROMPT A: Complete Website Code Generation

```
You are an expert frontend developer specializing in modern React/Next.js applications with exceptional visual design skills.

Create a complete, production-ready personal portfolio website for Richard D. Fortune, a technical founder who has built two SaaS products (Harvester - legal tech, SafeTravel - travel intelligence).

REQUIREMENTS:

1. FRAMEWORK & STACK:
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Lucide React for icons
- Dark mode as default

2. DESIGN AESTHETIC:
- Premium, high-end tech startup feel
- Dark theme with electric blue (#00D4FF) and gold (#FFB800) accents
- Glassmorphism cards with backdrop blur
- Animated gradient backgrounds
- Smooth scroll animations
- Particle network effect in hero section
- Professional but not corporate - has personality

3. PAGES TO CREATE:

PAGE 1 - HOME (app/page.tsx):
- Hero section:
  - Large headline: "I Build Things That Work"
  - Subheadline: "Technical founder. Two shipped products. Zero excuses."
  - Animated particle/network background (use canvas or CSS)
  - Two CTA buttons with hover glow effects
  - Scroll indicator animation

- Products section:
  - Two product cards side by side (stack on mobile)
  - Card 1: Harvester - "AI Legal Case Preparation" - with law/AI icon
  - Card 2: SafeTravel - "Travel Risk Intelligence" - with globe/shield icon
  - Cards have glass effect, hover lift animation
  - "Live" status badge on each

- Stats bar:
  - Horizontal strip with key metrics
  - "2 Products Shipped" | "92% MVP Ready" | "15+ Certifications" | "Building from 🇱🇨"
  - Subtle gradient background

- About preview:
  - Grid with image placeholder and text
  - Brief intro paragraph
  - "Learn More" link to about page

- CTA section:
  - "What I'm Looking For" headline
  - Three columns: Co-Founders, Beta Users, Investors
  - Brief description under each
  - Central CTA button

- Footer:
  - Social links with hover effects
  - Contact email
  - Copyright
  - Subtle tagline

PAGE 2 - HARVESTER (app/harvester/page.tsx):
- Product hero with mockup placeholder
- Problem/Solution statements
- Feature grid (6 features with icons and descriptions):
  - Universal Evidence Upload
  - AI Fact Extraction  
  - Interactive Timeline
  - Contradiction Detection
  - Brief Generation
  - Case Strategy
- Tech stack badges
- Pricing section (two tiers: Solo $79/mo, Pro $129/mo)
- CTA: "Request Beta Access"

PAGE 3 - SAFETRAVEL (app/safetravel/page.tsx):
- Product hero with mockup placeholder
- Problem/Solution statements
- Feature grid (6 features):
  - Voice AI Agent
  - Cognitive Profiling
  - 4 Intelligence Tiers
  - Real-Time Alerts
  - Destination Comparison
  - Behavioral Learning
- Pricing section (three tiers: Free, Pro $9.99/mo, Business $49.99/mo)
- CTA: "Start Free"

PAGE 4 - ABOUT (app/about/page.tsx):
- Large hero with headline "The Builder"
- Photo placeholder (circular or rounded square)
- Bio section in clean typography
- "The Situation" section explaining geographic context
- Credentials section with expandable categories:
  - Business & Leadership
  - AI & Technology
  - Legal Knowledge
  - Wellness & Coaching
- Download CV button

PAGE 5 - CONTACT (app/contact/page.tsx):
- Hero: "Let's Build Something"
- Contact form with fields:
  - Name
  - Email
  - Subject (dropdown: Beta Testing, Partnership, Investment, Consulting, Other)
  - Message
- Form validation with error states
- Submit button with loading state
- Direct contact info sidebar:
  - Email: truthfire@imagiisom.com
  - Phone: +1 (758) 716-2802
  - Location: Castries, St. Lucia
- Social links

4. COMPONENTS TO CREATE:

components/Navigation.tsx:
- Sticky header
- Transparent initially, solid on scroll
- Logo/name on left
- Nav links center or right
- Mobile hamburger menu
- Smooth transition effects

components/Footer.tsx:
- Dark background
- Social links with icons
- Contact email
- Copyright
- Subtle branding

components/ProductCard.tsx:
- Reusable card for products
- Props: title, description, icon, status, link
- Glass effect background
- Hover lift and glow

components/FeatureCard.tsx:
- For feature grids
- Icon, title, description
- Hover effect

components/PricingCard.tsx:
- Tier name, price, features list, CTA
- Highlighted/featured variant
- Hover effects

components/Button.tsx:
- Primary and secondary variants
- Size variants
- Loading state
- Hover glow effect

components/SectionHeading.tsx:
- Consistent section headers
- Optional subheading
- Animated underline or accent

components/AnimatedBackground.tsx:
- Particle network or gradient mesh
- Subtle, not distracting
- Performance optimized

5. ANIMATIONS (use Framer Motion):
- Page load: Staggered fade-in of elements
- Scroll: Elements animate in when entering viewport
- Hover: Scale, glow, color transitions
- Page transitions: Smooth fade between pages
- Buttons: Subtle scale on click
- Cards: Lift effect on hover

6. STYLES:

globals.css should include:
- CSS variables for colors
- Smooth scroll behavior
- Custom scrollbar (subtle)
- Selection color
- Base dark theme

tailwind.config.ts should extend:
- Custom colors matching the palette
- Custom animations
- Custom fonts (Inter, Space Grotesk)
- Backdrop blur utilities

7. CODE QUALITY:
- TypeScript strict mode
- Proper component typing
- Clean, readable code
- Comments for complex logic
- Responsive at all breakpoints
- Accessible (ARIA labels, keyboard nav, focus states)

OUTPUT FORMAT:
Provide complete, copy-paste ready code for each file. Include:
- All page files
- All component files
- Layout file
- Global styles
- Tailwind config
- Package.json dependencies

Start with the file structure, then provide each file in full.
```

---

### PROMPT B: Hero Section with Advanced Animation

```
Create an advanced animated hero section for a developer portfolio using Next.js, TypeScript, Tailwind CSS, and Framer Motion.

REQUIREMENTS:

1. BACKGROUND ANIMATION:
Create an interactive particle network effect where:
- 50-100 small dots float slowly across the screen
- Dots near each other connect with subtle lines
- Mouse movement causes nearby particles to react (push away or attract)
- Use HTML Canvas for performance
- Dark background (#0A1628) with cyan (#00D4FF) particles
- Subtle gradient overlay

2. CONTENT:
- Main headline: "I Build Things That Work" 
  - Text should animate in letter by letter or word by word
  - Gradient text effect (cyan to purple)
  
- Subheadline: "Technical founder. Two shipped products. Zero excuses."
  - Fade in after headline completes
  - Slightly muted color

- Two buttons side by side:
  - Primary: "See My Work" - solid cyan, hover glow
  - Secondary: "Let's Talk" - outline style, hover fill
  - Both should have subtle hover animations

- Scroll indicator at bottom:
  - Animated chevron or mouse icon
  - Bouncing animation
  - Fades on scroll

3. RESPONSIVE:
- Full viewport height on desktop
- Adjusted for mobile (smaller text, stacked buttons)
- Particle count reduced on mobile for performance

4. PERFORMANCE:
- Use requestAnimationFrame for canvas
- Throttle mouse events
- Clean up on unmount
- Lazy load if below fold (though hero is above fold)

Provide complete TypeScript code with proper typing.
```

---

### PROMPT C: Glassmorphism Card Components

```
Create a set of premium glassmorphism card components for a dark-themed portfolio site using React, TypeScript, Tailwind CSS, and Framer Motion.

DESIGN SPECS:
- Background: rgba(255, 255, 255, 0.05) with backdrop-blur-xl
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border radius: 16px or 24px
- Subtle inner glow on hover
- Lift effect on hover (translateY and shadow)

CREATE THESE COMPONENTS:

1. ProductCard:
Props: {
  title: string
  description: string
  icon: ReactNode
  status: 'live' | 'beta' | 'coming-soon'
  href: string
  accentColor?: string
}
- Icon in top left with colored background circle
- Status badge in top right (green for live, yellow for beta)
- Title with gradient text on hover
- Description in muted text
- Arrow indicator that animates on hover
- Entire card is clickable link

2. FeatureCard:
Props: {
  title: string
  description: string
  icon: ReactNode
  index?: number (for stagger animation)
}
- Centered icon at top
- Title below
- Description in smaller, muted text
- Hover: subtle scale and glow

3. PricingCard:
Props: {
  tier: string
  price: string | number
  period?: string
  features: string[]
  cta: string
  featured?: boolean
  href: string
}
- Tier name at top
- Large price display
- List of features with checkmarks
- CTA button at bottom
- Featured variant has accent border and "Popular" badge

4. TestimonialCard:
Props: {
  quote: string
  author: string
  role: string
  company: string
  image?: string
}
- Quote icon at top
- Quote text
- Author info at bottom with optional image

5. StatCard:
Props: {
  value: string | number
  label: string
  icon?: ReactNode
}
- Large value display
- Label below
- Optional icon
- Number should animate counting up on scroll into view

Include Framer Motion animations:
- Fade in and slide up on scroll (useInView)
- Staggered animation for card grids
- Hover state transitions

Provide complete code with TypeScript interfaces and Tailwind classes.
```

---

### PROMPT D: Contact Form with Validation

```
Create a premium contact form component for a portfolio site using React, TypeScript, Tailwind CSS, React Hook Form, and Zod validation.

REQUIREMENTS:

1. FORM FIELDS:
- Name (required, min 2 chars)
- Email (required, valid email format)
- Subject (required, dropdown select):
  - "Beta Testing - Harvester"
  - "Beta Testing - SafeTravel"
  - "Partnership Inquiry"
  - "Investment Discussion"
  - "Consulting"
  - "Other"
- Message (required, min 10 chars, max 1000 chars)

2. DESIGN:
- Dark theme inputs with subtle borders
- Focus states with accent color glow
- Error states with red border and message
- Success state with green
- Floating labels or placeholder that moves on focus
- Character count for message field

3. SUBMIT BUTTON:
- Primary style with gradient or solid accent color
- Loading state with spinner
- Disabled state when form invalid
- Success state after submission

4. VALIDATION:
- Real-time validation as user types (debounced)
- Show errors only after field is touched
- Clear error when field becomes valid
- Form-level validation on submit

5. SUBMISSION:
- Simulate API call with 2 second delay
- Success message with animation
- Error handling with retry option
- Reset form after successful submission

6. ACCESSIBILITY:
- Proper labels and aria attributes
- Focus management
- Error announcements for screen readers
- Keyboard navigation

7. ANIMATIONS:
- Fields animate in on page load (staggered)
- Error messages slide in
- Success message fades in with checkmark animation
- Button state transitions

Provide complete code including:
- Form component
- Input components (text, email, select, textarea)
- Validation schema
- Types/interfaces
- Tailwind styles
```

---

### PROMPT E: Navigation with Scroll Effects

```
Create an advanced navigation component for a portfolio site using Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

REQUIREMENTS:

1. DESKTOP NAV:
- Sticky to top
- Initially transparent background
- Transitions to solid dark background on scroll (after 100px)
- Logo/name on left: "Richard Fortune" or "RF" monogram
- Nav links on right: Home, Harvester, SafeTravel, About, Contact
- Active link indicator (underline or highlight)
- Smooth background transition

2. MOBILE NAV:
- Hamburger menu icon on right
- Full screen overlay menu when open
- Links stacked vertically, centered
- Animated menu icon (hamburger to X)
- Staggered link animations
- Close on link click
- Close on escape key
- Prevent body scroll when open

3. SCROLL PROGRESS:
- Optional: thin progress bar at very top showing page scroll progress
- Accent color gradient

4. ANIMATIONS:
- Background opacity transition on scroll
- Link hover effects (underline slides in)
- Mobile menu slide in from right or fade in
- Menu links stagger in

5. ACTIVE STATE:
- Detect current route
- Highlight active nav link
- Use Next.js usePathname()

6. SMOOTH SCROLL:
- If linking to sections on same page, smooth scroll
- Offset for sticky header height

Provide complete code with:
- Navigation component
- Mobile menu component
- Logo component
- Scroll detection hook
- All TypeScript types
- Tailwind classes
```

---

## PART 3: CONTENT BLOCKS (Copy/Paste Ready)

### Hero Content:
```
Headline: I Build Things That Work
Subheadline: Technical founder. Two shipped products. Zero excuses.
CTA 1: See My Work
CTA 2: Let's Talk
```

### Products:
```
HARVESTER
Tagline: AI Legal Case Preparation
Description: Transform evidence chaos into case-ready briefs in minutes. Upload anything—PDFs, photos, documents, audio. Get AI-extracted facts, automated timelines, contradiction detection, and generated briefs.
Status: Live
CTA: Request Beta Access

SAFETRAVEL  
Tagline: Travel Risk Intelligence
Description: Personalized safety intel that adapts to your psychology. Voice AI agent, cognitive profiling, real-time alerts, and four intelligence tiers from surface to elite.
Status: Live
CTA: Try Free
```

### Stats:
```
2 - Products Shipped
92% - MVP Readiness
15+ - Certifications
🇱🇨 - Building from St. Lucia
```

### About (Short):
```
I'm Richard Fortune. I build software that solves real problems.

Over the past 18 months, I've single-handedly shipped two production-ready SaaS platforms—Harvester for legal case preparation and SafeTravel for travel risk intelligence. Modern tech stacks. Integrated payments. AI capabilities including voice agents and cognitive profiling.

I did this from St. Lucia, a Caribbean island with zero tech ecosystem, zero local investors, and zero founder network. No co-founder. No funding. Just work.

Now I'm looking for the network I couldn't build alone: co-founders, beta users, and investors who understand what it means to ship.
```

### What I'm Looking For:
```
CO-FOUNDERS
Sales or marketing partner for Harvester. I build, you sell. Equity conversation ready.

BETA USERS
Lawyers drowning in case prep. Digital nomads who want smarter travel intel. Free access in exchange for feedback.

INVESTORS
Pre-seed for either product. Traction-focused founders only need apply.
```

### Contact CTA:
```
Headline: Let's Build Something
Subheadline: Whether you want to test a product, explore a partnership, or just talk shop—I'm here.
```

---

## USAGE INSTRUCTIONS:

1. **Google AI Studio**: Copy PROMPT A in full. Run it. It will generate the complete codebase.

2. **For specific components**: Use PROMPTS B-E individually if you want to regenerate or customize specific parts.

3. **Stitch/Design Tools**: Use PART 1 as a reference document for any AI design tool to ensure consistency.

4. **Content**: Copy content blocks from PART 3 directly into your generated code.

5. **Iteration**: After initial generation, use follow-up prompts like:
   - "Make the hero section more dramatic with larger text"
   - "Add a dark/light mode toggle"
   - "Create a blog section"
   - "Add loading skeletons"
