# 🎨 Design Reference Guide - Demon Slayer CSS Battle

## Visual Design Breakdown

### Hero Section Layout
```
┌─────────────────────────────────────────────────────┐
│ [Parallax Background - Tanjiro with Water Effects] │
│                                                     │
│  ┌───────────────────────────┐                    │
│  │ DEMON SLAYER              │  ← Cinzel 900      │
│  │ 鬼滅の刃：柱の物語          │  ← Noto Serif JP   │
│  │ The Hashira Chronicles    │  ← Bebas Neue      │
│  │                           │                    │
│  │ Description text...        │  ← Montserrat 400 │
│  │                           │                    │
│  │ [▶ Watch Trailer] [ⓘ More Info] │            │
│  └───────────────────────────┘                    │
│                                                     │
│ [Floating Particles ✦ ✦ ✦]                        │
└─────────────────────────────────────────────────────┘
```

**Spacing:**
- Container: max-width 768px, padding 16px
- Title margin-bottom: 24px
- Subtitle margin-bottom: 16px
- Description margin-bottom: 32px
- Button gap: 16px

---

### Katana Slash Transition
```
─────────────────────────────────────────────
        ════════════▶ [Glowing Slash]
    ✦   ✦     ✦    ✦     ✦    ✦  [Particles]
─────────────────────────────────────────────
```

**Timing:**
- Slash duration: 2s
- Particle delays: 0s, 0.2s, 0.4s, 0.6s, 0.8s, 1s
- Total animation: 2s

---

### Character Card Design
```
┌──────────────────────────────┐
│                              │
│   ┌────────────────────┐    │
│   │                    │    │
│   │   Character        │    │
│   │      Image         │    │  ← Clip-path cut
│   │                    │    │
│   │              ┌─────┤    │  ← Corner accent
│   └──────────────┴─────┘    │
│                              │
│   Character Name             │  ← Cinzel 700
│   Description text here...   │  ← Montserrat 400
│   ────                       │  ← Decorative line
│                              │
└──────────────────────────────┘
     ↑
  Glassmorphism blur
```

**Card Dimensions:**
- Width: 100% (responsive)
- Aspect ratio: 1:1.4
- Border-radius: 12px
- Padding: 24px

**Hover State:**
- Scale: 1.02
- Border: red glow
- Image: scale 1.1
- Decorative line: expand from 0 to 100%

---

### About Section Layout
```
┌─────────────────────────────────────────┐
│  [Dot Pattern Background - 5% opacity]  │
│                                         │
│         The Epic Saga                   │
│         鬼滅の刃の世界                    │
│                                         │
│    Long description text centered...    │
│    explaining the demon slayer world    │
│                                         │
│  ┌────────┐  ┌────────┐  ┌────────┐   │
│  │   12   │  │   9    │  │   ∞    │   │
│  │Breathing│  │ Hashira│  │  Epic  │   │
│  │ Styles  │  │ Pillars│  │Battles │   │
│  └────────┘  └────────┘  └────────┘   │
│      ↑ Glassmorphism cards             │
└─────────────────────────────────────────┘
```

**Stats Grid:**
- 3 columns on desktop
- 1 column on mobile
- Gap: 24px
- Card padding: 24px

---

### Gallery Grid Layout
```
Desktop (2x2):
┌─────────────┬─────────────┐
│             │             │
│  Battle     │   Shrine    │
│  Scene      │   Sunset    │
│             │             │
├─────────────┼─────────────┤
│             │             │
│  Hashira    │   Sword     │
│  Group      │   Glow      │
│             │             │
└─────────────┴─────────────┘

Mobile (1 column):
┌─────────────┐
│   Battle    │
├─────────────┤
│   Shrine    │
├─────────────┤
│   Hashira   │
├─────────────┤
│   Sword     │
└─────────────┘
```

**Image Treatment:**
- Aspect ratio: 16:9
- Clip-path: alternating angles
- Hover overlay: glassmorphism
- Border: 2px transparent → cyan on hover

---

## Color Usage Map

### Primary Elements
| Element | Color | Usage |
|---------|-------|-------|
| Main titles | `foreground` | All H1, H2 headings |
| Japanese text | `accent` (cyan) | Subtitle text |
| Primary CTA | `primary` (red) | Watch Trailer button |
| Secondary CTA | `accent` (cyan) | More Info button |
| Card borders | `border` → `primary` | Default → Hover |
| Glow effects | `primary` / `accent` | Box shadows |

### Gradient Usage
```css
/* Hero title gradient */
background: linear-gradient(135deg, 
  hsl(0 85% 55%),     /* Red */
  hsl(270 50% 35%)    /* Purple */
);

/* Button shimmer effect */
background: linear-gradient(to right,
  transparent,
  rgba(255, 255, 255, 0.2),
  transparent
);

/* Section backgrounds */
background: linear-gradient(180deg,
  hsl(220 40% 5%),    /* Dark base */
  hsl(270 30% 10%)    /* Purple tint */
);
```

---

## Typography Scale

### Desktop
```
H1 (Main Title):     96px / 900 weight / -2px letter-spacing
H2 (Japanese):       48px / 700 weight / 0px letter-spacing
H3 (Subtitle):       32px / 600 weight / 2px letter-spacing
Body:                20px / 400 weight / 0.5px letter-spacing
Button Text:         18px / 600 weight / 1px letter-spacing
Card Title:          24px / 700 weight / 0px letter-spacing
Card Description:    16px / 400 weight / 0.3px letter-spacing
```

### Mobile
```
H1:                  48px
H2:                  32px
H3:                  24px
Body:                16px
Button:              16px
Card Title:          20px
Card Description:    14px
```

---

## Animation Timing Reference

### Entrance Animations
```javascript
Hero Elements:
- Title:        fade-in-left 0.8s @ 0.2s delay
- Japanese:     fade-in-left 0.8s @ 0.4s delay
- Subtitle:     fade-in-left 0.8s @ 0.5s delay
- Description:  fade-in-left 0.8s @ 0.7s delay
- Buttons:      fade-in-left 0.8s @ 0.9s delay

Character Cards:
- Card 1:       scale-in 0.6s @ 0s delay
- Card 2:       scale-in 0.6s @ 0.15s delay
- Card 3:       scale-in 0.6s @ 0.3s delay
- Card 4:       scale-in 0.6s @ 0.45s delay
```

### Hover Animations
```css
Cards:           all 0.5s ease
Images:          transform 0.7s ease
Buttons:         all 0.3s ease
Gallery Items:   all 0.5s ease
```

### Continuous Animations
```css
Particles:       8s linear infinite
Glow Pulse:      2s ease-in-out infinite
Float:           3s ease-in-out infinite
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 768px) {
  /* Tablet styles */
  .character-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  /* Desktop styles */
  .character-grid { grid-template-columns: repeat(4, 1fr); }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1280px) {
  /* Large desktop */
  .container { max-width: 1200px; }
}
```

### Layout Changes
| Breakpoint | Hero | Characters | Gallery | Stats |
|------------|------|------------|---------|-------|
| < 768px | Stack | 1 col | 1 col | 1 col |
| 768px - 1023px | Stack | 2 cols | 1 col | 3 cols |
| ≥ 1024px | Side-by-side | 4 cols | 2 cols | 3 cols |

---

## Spacing System

```css
/* Use consistent spacing multiples of 4px */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
```

### Section Padding
- Hero: 0 (full bleed)
- Characters: 96px vertical, 16px horizontal
- About: 96px vertical, 16px horizontal
- Gallery: 96px vertical, 16px horizontal
- Footer: 48px vertical, 16px horizontal

---

## Z-Index Layers

```css
.parallax-background:   0
.section-content:       10
.katana-slash:          20
.floating-particles:    5
.character-cards:       1
.modal-overlay:         1000
.modal-content:         1001
```

---

## Browser Support Target

**Must Support:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**CSS Features Required:**
- CSS Grid
- Flexbox
- CSS Custom Properties (variables)
- Backdrop-filter
- Clip-path
- @keyframes
- Transform 3D

---

## Accessibility Requirements

### Color Contrast
- Text on dark bg: minimum 4.5:1 ratio
- Interactive elements: minimum 3:1 ratio
- Focus indicators: visible and high contrast

### Keyboard Navigation
- Tab order follows visual order
- Focus visible on all interactive elements
- Skip links for major sections

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

This design reference should provide all technical specifications needed to accurately recreate the Demon Slayer promotional website. Refer to this document alongside the competition brief for complete implementation details.
