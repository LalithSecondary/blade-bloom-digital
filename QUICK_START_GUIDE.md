# ⚡ Quick Start Guide - Demon Slayer CSS Battle

## 🏁 Getting Started (5 minutes)

### Step 1: Download Assets
```bash
# Extract competition package
unzip demon-slayer-css-battle.zip
cd demon-slayer-css-battle

# Verify assets
ls assets/
# Should show 9 .jpg files
```

### Step 2: Set Up Project Structure
```
demon-slayer-battle/
├── index.html          ← Start here
├── styles.css          ← Your CSS goes here
├── script.js           ← Optional JavaScript
├── assets/
│   └── [9 images]
└── README.md
```

### Step 3: HTML Boilerplate
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demon Slayer: The Hashira Chronicles</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@400;600;700;900&family=Bebas+Neue&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Your content here -->
  <script src="script.js"></script>
</body>
</html>
```

---

## 📝 Essential CSS Setup (First 15 Minutes)

### CSS Variables (Copy & Paste This)
```css
:root {
  /* Colors - HSL Format */
  --bg: 220 40% 5%;
  --fg: 0 0% 98%;
  --primary: 0 85% 55%;
  --accent: 185 85% 55%;
  --secondary: 270 50% 35%;
  --card: 220 35% 8%;
  --border: 220 25% 20%;
  --muted: 220 25% 15%;
  
  /* Spacing */
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 96px;
  
  /* Typography */
  --font-display: 'Cinzel', serif;
  --font-jp: 'Noto Serif JP', serif;
  --font-accent: 'Bebas Neue', cursive;
  --font-body: 'Montserrat', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: hsl(var(--bg));
  color: hsl(var(--fg));
  font-family: var(--font-body);
  line-height: 1.6;
}
```

---

## 🎯 Section-by-Section Checklist

### ✅ Hero Section (30 minutes)
```html
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <h1>DEMON SLAYER</h1>
    <h2 class="japanese">鬼滅の刃：柱の物語</h2>
    <h3>The Hashira Chronicles</h3>
    <p>The ultimate battle...</p>
    <div class="buttons">
      <button class="btn-primary">▶ Watch Trailer</button>
      <button class="btn-outline">ⓘ More Info</button>
    </div>
  </div>
</section>
```

**Must-Have CSS:**
```css
.hero {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: url('assets/hero-tanjiro.jpg') center/cover;
  background-attachment: fixed; /* Parallax */
}

.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  animation: fadeInLeft 0.8s 0.2s both;
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}
```

---

### ✅ Character Cards (45 minutes)
```html
<section class="characters">
  <h2>Meet The Heroes</h2>
  <div class="character-grid">
    <div class="character-card">
      <div class="card-image">
        <img src="assets/character-tanjiro.jpg" alt="Tanjiro">
      </div>
      <div class="card-content">
        <h3>Tanjiro Kamado</h3>
        <p>A kindhearted boy...</p>
      </div>
    </div>
    <!-- Repeat for 4 characters -->
  </div>
</section>
```

**Must-Have CSS:**
```css
.character-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.character-card {
  background: rgba(28, 32, 41, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.5s;
}

.character-card:hover {
  transform: scale(1.02);
  border-color: hsl(var(--primary));
  box-shadow: 0 0 20px hsl(var(--primary) / 0.5);
}

.card-image {
  aspect-ratio: 1;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s;
}

.character-card:hover img {
  transform: scale(1.1);
}
```

---

### ✅ Gallery Grid (30 minutes)
```html
<section class="gallery">
  <h2>Gallery</h2>
  <div class="gallery-grid">
    <img src="assets/gallery-battle.jpg" alt="Battle">
    <img src="assets/gallery-shrine.jpg" alt="Shrine">
    <img src="assets/gallery-hashira.jpg" alt="Hashira">
    <img src="assets/gallery-sword.jpg" alt="Sword">
  </div>
</section>
```

**Must-Have CSS:**
```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.gallery-grid img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5s;
}

.gallery-grid img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px hsl(var(--accent) / 0.6);
}
```

---

## ⚡ Performance Tips

### 1. Load Fonts Efficiently
```html
<!-- In <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### 2. Optimize Images
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### 3. Smooth Animations
```css
* {
  /* Hardware acceleration */
  transform: translateZ(0);
  backface-visibility: hidden;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 🎨 Copy-Paste Utilities

### Button Styles
```css
.btn-primary {
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  background: hsl(var(--primary));
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 0 20px hsl(var(--primary) / 0.5);
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px hsl(var(--primary));
}

.btn-outline {
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  background: transparent;
  color: hsl(var(--accent));
  border: 2px solid hsl(var(--accent));
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-outline:hover {
  background: hsl(var(--accent));
  color: hsl(var(--bg));
}
```

### Section Spacing
```css
section {
  padding: var(--space-xl) var(--space-sm);
  max-width: 1200px;
  margin: 0 auto;
}

section h2 {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  text-align: center;
  margin-bottom: var(--space-lg);
}
```

### Glassmorphism Effect
```css
.glass {
  background: rgba(28, 32, 41, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

## 🐛 Common Issues & Fixes

### Issue: Images not showing
```css
/* Fix: Check path */
background: url('./assets/hero.jpg');  /* Relative */
background: url('../assets/hero.jpg'); /* Up one level */
```

### Issue: Fonts not loading
```html
<!-- Add this to <head> BEFORE your CSS -->
<link rel="preconnect" href="https://fonts.googleapis.com">
```

### Issue: Parallax not smooth
```javascript
// Add to script.js
let scrollY = 0;
window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
  document.querySelector('.hero-bg').style.transform = 
    `translateY(${scrollY * 0.5}px)`;
});
```

### Issue: Animation janky
```css
/* Add hardware acceleration */
.animated-element {
  will-change: transform;
  transform: translateZ(0);
}
```

---

## ⏱️ Time Management Strategy

### Hour 1: Foundation (Structure + Basic Styles)
- [ ] 0-15min: HTML structure for all sections
- [ ] 15-30min: CSS variables + reset
- [ ] 30-45min: Hero section complete
- [ ] 45-60min: Character cards layout

### Hour 2: Advanced Styling
- [ ] 60-75min: Glassmorphism + animations
- [ ] 75-90min: Gallery section
- [ ] 90-105min: About section
- [ ] 105-120min: Footer

### Hour 3: Polish + Responsive
- [ ] 120-135min: Mobile responsive
- [ ] 135-150min: Hover effects
- [ ] 150-165min: Cross-browser testing
- [ ] 165-180min: Final polish + submission

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
.character-grid {
  grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 768px) {
  .character-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .character-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## ✅ Pre-Submission Checklist

- [ ] All images load correctly
- [ ] No console errors
- [ ] Responsive on mobile (375px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1440px)
- [ ] All hover effects work
- [ ] Animations are smooth (60fps)
- [ ] Fonts load correctly
- [ ] Code is commented
- [ ] README.md included
- [ ] Files are organized

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/demon-slayer
git push -u origin main
# Enable GitHub Pages in repo settings
```

### Option 2: Netlify (Easiest)
1. Drag & drop your folder to netlify.com
2. Copy the generated URL
3. Submit URL with your files

### Option 3: CodePen
1. Paste HTML in HTML panel
2. Paste CSS in CSS panel
3. Upload images via Settings → Assets
4. Share CodePen URL

---

## 💡 Pro Tips

1. **Test early, test often** - Check your work every 15 minutes
2. **Use DevTools** - Ctrl+Shift+I to inspect and debug
3. **Save frequently** - Auto-save might not work everywhere
4. **Comment your code** - Judges appreciate clarity
5. **Keep it simple** - Working basics beat broken fancy
6. **Mobile first** - Start with small screens
7. **Use variables** - Makes changes faster
8. **Check console** - Fix errors immediately

---

## 📞 Emergency Resources

- **CSS Reference:** developer.mozilla.org/en-US/docs/Web/CSS
- **Flexbox Guide:** css-tricks.com/snippets/css/a-guide-to-flexbox
- **Grid Guide:** css-tricks.com/snippets/css/complete-guide-grid
- **Color Picker:** hslpicker.com
- **Can I Use:** caniuse.com (check browser support)

---

**You've got this! Start with the basics, build incrementally, and have fun!** 🔥🗡️

Remember: The goal is to learn and create something awesome. Don't stress about perfection - focus on progress!
