# 🔥 Demon Slayer CSS Battle — Official Competition Brief

## 🎯 Competition Overview

**Theme:** Demon Slayer (Kimetsu no Yaiba) - To the Hashira Training  
**Challenge:** Recreate the official promotional website using pure HTML, CSS, and vanilla JavaScript  
**Time Limit:** 3 hours  
**Difficulty:** Advanced

---

## 🌸 Theme & Style Guidelines

### Color Palette (HSL Values)
```css
/* Primary Colors */
--background: 220 40% 5%;           /* Deep Black */
--foreground: 0 0% 98%;             /* Off White */

/* Accent Colors */
--primary: 0 85% 55%;               /* Crimson Red (Fire Breathing) */
--accent: 185 85% 55%;              /* Glowing Cyan (Water Breathing) */
--secondary: 270 50% 35%;           /* Deep Purple (Demon Night) */

/* UI Elements */
--card: 220 35% 8%;                 /* Card Background */
--muted: 220 25% 15%;               /* Muted Elements */
--border: 220 25% 20%;              /* Borders */
```

### Typography
- **Headers:** Cinzel (900, 700, 600 weight)
- **Japanese Text:** Noto Serif JP (700, 600 weight)
- **Accents:** Bebas Neue
- **Body:** Montserrat (400, 500, 600 weight)

### Design Philosophy
- **Dark & Cinematic:** Film-like atmospheric backgrounds
- **Glowing Effects:** Red and cyan glows on hover
- **Glassmorphism:** Backdrop blur with semi-transparent overlays
- **Japanese Aesthetics:** Traditional patterns and typography
- **Anime-Inspired:** Sharp angles, dramatic lighting, dynamic poses

---

## 📐 Website Structure

### 1. Hero Section
**Requirements:**
- Full viewport height (100vh)
- Background: Tanjiro with water breathing effects
- Parallax scrolling effect (0.5x speed)
- Animated floating particles (8 particles)
- Title overlay with fade-in animation

**Elements:**
```html
<section class="hero">
  <div class="hero-bg parallax"></div>
  <div class="hero-content">
    <h1>DEMON SLAYER</h1>
    <h2 class="japanese">鬼滅の刃：柱の物語</h2>
    <h3>The Hashira Chronicles</h3>
    <p>Description text...</p>
    <div class="cta-buttons">
      <button class="btn-primary">▶ Watch Trailer</button>
      <button class="btn-outline">ⓘ More Info</button>
    </div>
  </div>
  <div class="particles"></div>
</section>
```

**Animations:**
- Title: fade-in-left (0.2s delay)
- Japanese title: fade-in-left (0.4s delay)
- Subtitle: fade-in-left (0.5s delay)
- Description: fade-in-left (0.7s delay)
- Buttons: fade-in-left (0.9s delay)
- Parallax: `transform: translateY(scrollY * 0.5px)`

---

### 2. Katana Slash Transition
**Requirements:**
- Appears between each major section
- Glowing cyan/red slash animation
- 6 floating particles
- 2-second slide animation

**CSS Properties:**
```css
.katana-slash {
  height: 128px;
  overflow: hidden;
  position: relative;
}

.slash-line {
  height: 3px;
  background: linear-gradient(to right, transparent, cyan, transparent);
  box-shadow: 0 0 20px cyan, 0 0 40px cyan;
  animation: slide-slash 2s ease-in-out;
}

@keyframes slide-slash {
  0% { transform: translateX(-100%) rotate(-10deg); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%) rotate(-10deg); opacity: 0; }
}
```

---

### 3. Character Showcase Section
**Requirements:**
- 4 character cards in grid layout (responsive: 1 col mobile, 2 tablet, 4 desktop)
- Each card has glassmorphism effect
- Clip-path angular cuts
- Hover animations (scale, glow, border change)

**Characters Required:**
1. **Tanjiro Kamado**
   - Quote: "A kindhearted boy who becomes a demon slayer to save his sister Nezuko and avenge his family."

2. **Nezuko Kamado**
   - Quote: "Tanjiro's younger sister who was turned into a demon but retains her humanity and fights alongside her brother."

3. **Zenitsu Agatsuma**
   - Quote: "A cowardly but powerful demon slayer who mastered Thunder Breathing and fights with lightning speed."

4. **Inosuke Hashibira**
   - Quote: "A feral warrior raised by boars who wears a boar mask and fights with dual serrated swords."

**Card Structure:**
```html
<div class="character-card">
  <div class="character-image">
    <img src="assets/character-tanjiro.jpg" alt="Tanjiro Kamado">
    <div class="corner-accent"></div>
  </div>
  <div class="character-info">
    <h3>Tanjiro Kamado</h3>
    <p>Description...</p>
    <div class="decorative-line"></div>
  </div>
</div>
```

**CSS Effects:**
```css
.character-card {
  background: rgba(28, 32, 41, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s;
}

.character-card:hover {
  border-color: hsl(0, 85%, 55%);
  transform: scale(1.02);
  box-shadow: 0 0 20px hsl(0, 85%, 55%);
}

.character-image {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
}

.corner-accent {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 80px;
  background: rgba(239, 68, 68, 0.2);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  backdrop-filter: blur(4px);
}
```

---

### 4. About Section
**Requirements:**
- Centered content (max-width: 1024px)
- Background pattern (radial dots or diagonal lines at 5% opacity)
- Japanese subtitle (鬼滅の刃の世界)
- 3 stat cards with glassmorphism

**Stat Cards:**
1. **12** - Breathing Styles
2. **9** - Hashira Pillars  
3. **∞** - Epic Battles

**CSS for Patterns:**
```css
.about-pattern {
  background-image: radial-gradient(circle at 20px 20px, currentColor 1px, transparent 0);
  background-size: 40px 40px;
  opacity: 0.05;
}
```

---

### 5. Gallery Section
**Requirements:**
- 2x2 grid (responsive: 1 col mobile, 2 desktop)
- Each image has alternating clip-path cuts
- Glassmorphism overlay on hover
- "View Full Size" text appears
- Modal/lightbox functionality (optional bonus)

**Images:**
- gallery-battle.jpg
- gallery-shrine.jpg
- gallery-hashira.jpg
- gallery-sword.jpg

**Clip Paths:**
```css
.gallery-item:nth-child(odd) {
  clip-path: polygon(0 0, 100% 0, 97% 100%, 0 100%);
}

.gallery-item:nth-child(even) {
  clip-path: polygon(3% 0, 100% 0, 100% 100%, 0 100%);
}
```

---

### 6. Footer
**Requirements:**
- Social media icons (GitHub, Twitter, Instagram, YouTube)
- Copyright text
- Japanese text: 鬼滅の刃
- Border-top separator

---

## 🎨 Required CSS Techniques

### 1. Keyframe Animations
```css
@keyframes fade-in-left {
  0% { opacity: 0; transform: translateX(-30px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes particle-float {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
}

@keyframes glow-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

### 2. Backdrop Filter (Glassmorphism)
```css
.glass-card {
  background: rgba(28, 32, 41, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### 3. Clip-Path
```css
.angular-cut {
  clip-path: polygon(0 0, 100% 0, 97% 100%, 0 100%);
}

.triangle-corner {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
}
```

### 4. Box Shadow Glows
```css
.glow-red {
  box-shadow: 0 0 20px hsl(0 85% 55% / 0.5);
}

.glow-cyan {
  box-shadow: 0 0 20px hsl(185 85% 55% / 0.5);
}
```

---

## 📦 Asset List

All images are provided in the `/assets` folder:

### Hero
- `hero-tanjiro.jpg` (1920x1080) - Main hero background

### Characters
- `character-tanjiro.jpg` (800x800)
- `character-nezuko.jpg` (800x800)
- `character-zenitsu.jpg` (800x800)
- `character-inosuke.jpg` (800x800)

### Gallery
- `gallery-battle.jpg` (1280x720)
- `gallery-shrine.jpg` (1280x720)
- `gallery-hashira.jpg` (1280x720)
- `gallery-sword.jpg` (1280x720)

---

## 🏆 Judging Criteria (100 Points Total)

### 1. Visual Accuracy (30 points)
- Layout matches reference design
- Color palette accuracy
- Typography implementation
- Spacing and alignment

### 2. CSS Complexity (30 points)
- Advanced animations (keyframes, transitions)
- Use of modern CSS (clip-path, backdrop-filter, gradients)
- Glassmorphism implementation
- Parallax effects
- Particle animations

### 3. Responsiveness (20 points)
- Mobile layout (< 768px)
- Tablet layout (768px - 1024px)
- Desktop layout (> 1024px)
- Smooth breakpoint transitions

### 4. Code Quality (10 points)
- Clean, organized CSS structure
- Semantic HTML
- Proper naming conventions
- Comments and documentation

### 5. Extra Features (10 points)
- Modal/lightbox gallery
- Custom cursor effects
- Additional animations
- Sound effects (optional)
- Loading screen

---

## ⚡ Bonus Challenges (+15 Extra Points)

1. **Parallax Layers** (+5): Implement multi-layer parallax with different scroll speeds
2. **Custom Cursor** (+3): Create katana-themed cursor with trail effect
3. **Smooth Scroll** (+2): Add smooth scrolling between sections
4. **Easter Eggs** (+3): Hidden animations or effects when clicking specific elements
5. **Accessibility** (+2): ARIA labels, keyboard navigation, screen reader support

---

## 📋 Submission Requirements

### File Structure
```
demon-slayer-battle/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── hero-tanjiro.jpg
│   ├── character-tanjiro.jpg
│   ├── character-nezuko.jpg
│   ├── character-zenitsu.jpg
│   ├── character-inosuke.jpg
│   ├── gallery-battle.jpg
│   ├── gallery-shrine.jpg
│   ├── gallery-hashira.jpg
│   └── gallery-sword.jpg
└── README.md
```

### Mandatory Elements
- ✅ All 6 sections implemented
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ At least 5 CSS animations
- ✅ Glassmorphism on cards
- ✅ Parallax hero section
- ✅ Katana slash transitions
- ✅ Working hover effects

### Submission Format
- ZIP file named: `[TeamName]_DemonSlayer_CSSBattle.zip`
- Include live demo link (CodePen, Netlify, Vercel)
- Brief documentation of techniques used

---

## 🚫 Restrictions

**NOT ALLOWED:**
- CSS frameworks (Bootstrap, Tailwind, Material UI)
- JavaScript frameworks (React, Vue, Angular)
- Pre-built animation libraries (GSAP, Anime.js)
- External APIs or third-party scripts

**ALLOWED:**
- Vanilla JavaScript
- Pure CSS animations
- Google Fonts
- SVG icons (inline only)
- CSS preprocessors (Sass/SCSS - must be compiled)

---

## ⏱️ Timeline

- **09:00 AM** - Competition starts, brief revealed
- **10:00 AM** - Check-in #1 (progress update)
- **11:30 AM** - Check-in #2 (halfway point)
- **12:00 PM** - Final submission deadline
- **12:30 PM** - Judging begins
- **01:30 PM** - Winners announced

---

## 🎯 Tips for Success

1. **Start with Structure:** Build HTML skeleton first
2. **Mobile First:** Design for mobile, then scale up
3. **Test Animations:** Keep them smooth (60fps target)
4. **Use CSS Variables:** Makes color changes easier
5. **Comment Your Code:** Helps judges understand your approach
6. **Test Cross-Browser:** Check Chrome, Firefox, Safari
7. **Optimize Images:** Compress for faster loading
8. **Plan Your Time:**
   - Hour 1: HTML structure + basic styling
   - Hour 2: Advanced CSS + animations
   - Hour 3: Polish + responsive + testing

---

## 📞 Support During Competition

- Technical issues: Contact organizers immediately
- Clarification questions: Check FAQ board first
- Asset problems: Backup assets available at help desk

---

## 🏅 Prizes

- **1st Place:** Grand Prize + Feature on official site
- **2nd Place:** Runner-up Prize
- **3rd Place:** Bronze Prize
- **Best Animation:** Special Recognition
- **Most Creative:** Special Recognition

---

## 📄 License & Credits

This competition is created for educational purposes. All Demon Slayer intellectual property belongs to Koyoharu Gotouge and Ufotable.

**Competition Organizers:** [Your Organization Name]  
**Date:** 2025  
**Version:** 1.0

---

Good luck, demon slayers! May your CSS be sharp as a nichirin blade. 🗡️✨
