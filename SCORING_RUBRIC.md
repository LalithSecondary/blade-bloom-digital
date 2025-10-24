# 📊 Scoring Rubric - Demon Slayer CSS Battle

## Total Points: 115 (100 base + 15 bonus)

---

## 1. Visual Accuracy (30 points)

### Layout & Structure (12 points)
- [ ] **Hero section** - Full viewport height with proper positioning (3 pts)
- [ ] **Character grid** - Responsive grid with correct breakpoints (3 pts)
- [ ] **About section** - Centered content with pattern background (2 pts)
- [ ] **Gallery grid** - Proper 2x2 layout on desktop (2 pts)
- [ ] **Footer** - Correct alignment and spacing (2 pts)

### Color Palette (8 points)
- [ ] **Background colors** - Matches dark theme (hsl(220 40% 5%)) (2 pts)
- [ ] **Primary accent** - Correct crimson red (hsl(0 85% 55%)) (2 pts)
- [ ] **Secondary accent** - Correct cyan (hsl(185 85% 55%)) (2 pts)
- [ ] **Gradient usage** - Hero and button gradients accurate (2 pts)

### Typography (6 points)
- [ ] **Font families** - Cinzel, Noto Serif JP, Bebas, Montserrat loaded (2 pts)
- [ ] **Font sizing** - Correct scale on desktop and mobile (2 pts)
- [ ] **Japanese characters** - 鬼滅の刃 displayed correctly (2 pts)

### Spacing & Alignment (4 points)
- [ ] **Section padding** - Consistent 96px vertical spacing (1 pt)
- [ ] **Card spacing** - Proper gaps in grids (24px) (1 pt)
- [ ] **Content alignment** - Centered where appropriate (1 pt)
- [ ] **Button spacing** - 16px gap between CTAs (1 pt)

**Deductions:**
- -1 pt per missing section
- -2 pts for incorrect color values (off by >10% hue/saturation)
- -1 pt for wrong font families

---

## 2. CSS Complexity (30 points)

### Advanced Properties (12 points)
- [ ] **Backdrop-filter** - Glassmorphism on cards (blur: 12px) (3 pts)
- [ ] **Clip-path** - Angular cuts on cards and gallery (3 pts)
- [ ] **Box-shadow glows** - Red and cyan glows on hover (3 pts)
- [ ] **CSS gradients** - Multiple gradient usage (3 pts)

### Animations (12 points)
- [ ] **Keyframe animations** - At least 5 @keyframes defined (4 pts)
- [ ] **Entrance animations** - fade-in-left with staggered delays (3 pts)
- [ ] **Hover effects** - Smooth transitions on cards (2 pts)
- [ ] **Continuous animations** - Floating particles, glow pulse (3 pts)

### Special Effects (6 points)
- [ ] **Parallax scrolling** - Hero background moves at 0.5x (3 pts)
- [ ] **Katana slash** - Animated slash between sections (2 pts)
- [ ] **Particle effects** - 8+ floating particles in hero (1 pt)

**Scoring Guide:**
- **Full points:** Effect implemented perfectly, smooth 60fps
- **Partial points:** Effect present but janky or incomplete
- **Zero points:** Missing or broken

---

## 3. Responsiveness (20 points)

### Mobile Layout (< 768px) - 7 points
- [ ] Hero text readable, buttons stack (2 pts)
- [ ] Character cards single column (2 pts)
- [ ] Gallery images single column (2 pts)
- [ ] No horizontal scroll (1 pt)

### Tablet Layout (768px - 1023px) - 6 points
- [ ] Character cards 2x2 grid (2 pts)
- [ ] Hero content properly scaled (2 pts)
- [ ] Navigation accessible (2 pts)

### Desktop Layout (≥ 1024px) - 5 points
- [ ] Character cards 4 columns (2 pts)
- [ ] Gallery 2x2 grid (2 pts)
- [ ] Max-width container (1200px) (1 pt)

### Breakpoint Smoothness - 2 points
- [ ] No layout jumps between breakpoints (1 pt)
- [ ] Images scale proportionally (1 pt)

**Testing:**
- Test at: 375px, 768px, 1024px, 1440px
- Use Chrome DevTools device mode
- Check both portrait and landscape on mobile

---

## 4. Code Quality (10 points)

### HTML Structure (3 points)
- [ ] Semantic HTML5 tags (`<header>`, `<section>`, `<main>`, `<footer>`) (1 pt)
- [ ] Proper heading hierarchy (h1 → h2 → h3) (1 pt)
- [ ] Alt text on all images (1 pt)

### CSS Organization (4 points)
- [ ] CSS variables for colors and spacing (1 pt)
- [ ] Logical grouping of styles (1 pt)
- [ ] Consistent naming convention (BEM, camelCase, etc.) (1 pt)
- [ ] No !important overuse (max 2 instances) (1 pt)

### Code Comments (2 points)
- [ ] Section headers in CSS (1 pt)
- [ ] Complex animations explained (1 pt)

### Code Efficiency (1 point)
- [ ] No duplicate code (DRY principle) (0.5 pt)
- [ ] Optimized selectors (0.5 pt)

**Red Flags (deductions):**
- Inline styles: -2 pts
- Repeated code blocks: -1 pt
- Excessive nesting (>4 levels): -1 pt

---

## 5. Extra Features (10 points)

### Modal/Lightbox (4 points)
- [ ] Gallery images open in modal (2 pts)
- [ ] Close button functional (1 pt)
- [ ] Overlay click closes modal (1 pt)

### Smooth Interactions (3 points)
- [ ] Smooth scroll to sections (1.5 pts)
- [ ] Button ripple effect (1.5 pts)

### Polish (3 points)
- [ ] Loading animation (1 pt)
- [ ] Custom 404 handling (1 pt)
- [ ] Favicon included (1 pt)

---

## Bonus Challenges (+15 points)

### 1. Multi-Layer Parallax (+5 points)
**Requirements:**
- 3+ elements moving at different speeds
- Smooth performance (60fps)
- Visible depth effect

**Scoring:**
- 5 pts: 3+ layers, buttery smooth
- 3 pts: 2 layers working well
- 1 pt: Single parallax layer

### 2. Custom Cursor (+3 points)
**Requirements:**
- Katana-themed cursor design
- Trail effect following mouse
- Changes on hover (e.g., becomes red on buttons)

**Scoring:**
- 3 pts: Full custom cursor with trail
- 2 pts: Custom cursor, no trail
- 1 pt: Hover states only

### 3. Smooth Scroll (+2 points)
**Requirements:**
- Easing function applied
- Scroll-to-section on navigation click
- URL hash updates

**Scoring:**
- 2 pts: All requirements met
- 1 pt: Basic smooth scroll only

### 4. Easter Eggs (+3 points)
**Examples:**
- Clicking logo triggers special animation
- Konami code unlocks secret mode
- Hidden character appears on scroll

**Scoring:**
- 3 pts: Creative, well-integrated easter egg
- 2 pts: Simple hidden animation
- 1 pt: Minor surprise element

### 5. Accessibility Features (+2 points)
**Requirements:**
- ARIA labels on interactive elements
- Keyboard navigation (Tab, Enter, Esc)
- Skip to content link
- Screen reader tested

**Scoring:**
- 2 pts: Comprehensive accessibility
- 1 pt: Basic ARIA labels only

---

## Deductions & Penalties

### Major Penalties (10+ points each)
- **Using forbidden frameworks:** -20 pts (disqualification)
- **Copied code from external sources:** -30 pts (disqualification)
- **Missing required sections:** -10 pts per section

### Moderate Penalties (5-9 points)
- **Broken functionality:** -5 pts per broken feature
- **Images not loading:** -3 pts per image
- **No mobile responsiveness:** -10 pts

### Minor Penalties (1-4 points)
- **Console errors:** -1 pt per error (max -5 pts)
- **Missing hover states:** -2 pts
- **Typography mismatches:** -1 pt per font
- **Color inaccuracies:** -1 pt per off color

---

## Scoring Examples

### Perfect Score (115/115)
✅ All sections pixel-perfect  
✅ 8+ keyframe animations  
✅ Fully responsive (3 breakpoints)  
✅ Glassmorphism + parallax + clip-path  
✅ Clean, commented code  
✅ Modal gallery working  
✅ All 5 bonus challenges completed

### Excellent Score (95-100/100)
✅ All required sections  
✅ 6+ animations  
✅ Responsive with minor issues  
✅ Most advanced CSS techniques  
✅ Good code quality  
✅ 1-2 extra features

### Good Score (75-85/100)
✅ All sections present  
✅ 4-5 animations  
✅ Responsive on desktop + mobile  
✅ Some advanced CSS  
⚠️ Missing some polish  
⚠️ Code needs cleanup

### Passing Score (60-70/100)
✅ Core sections working  
✅ 2-3 animations  
✅ Desktop layout correct  
⚠️ Limited mobile support  
⚠️ Basic CSS only  
⚠️ Missing extra features

### Failing Score (<60/100)
❌ Missing sections  
❌ Minimal animations  
❌ Not responsive  
❌ Basic styling only  
❌ Poor code quality

---

## Judge's Checklist

### Pre-Judging
- [ ] Verify file structure correct
- [ ] Check all assets load
- [ ] Test in Chrome, Firefox, Safari
- [ ] Review console for errors

### During Judging
- [ ] Open in 3 different viewport sizes
- [ ] Test all hover effects
- [ ] Scroll through entire page
- [ ] Click all interactive elements
- [ ] Review code in DevTools

### Tie-Breakers (if scores equal)
1. Better mobile experience
2. Smoother animations (lower frame drop)
3. Cleaner code structure
4. More creative implementation
5. Faster page load time

---

## Final Notes

### Time Stamps Matter
- Submissions after deadline: -5 pts per minute late (max 15 mins)
- After 15 minutes: disqualified

### Presentation Bonus
- If site loads within 3 seconds: +2 pts
- If all images optimized (<200KB each): +2 pts
- If passes WAVE accessibility test: +3 pts

### Judge's Discretion
Judges may award up to 5 additional points for:
- Exceptional creativity
- Outstanding attention to detail
- Innovative use of CSS
- Going above and beyond requirements

---

**Good luck! Remember: clean code beats flashy effects. Nail the fundamentals first, then add the magic.** ✨
