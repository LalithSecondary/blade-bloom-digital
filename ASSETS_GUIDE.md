# 📸 Asset Guide - Demon Slayer CSS Battle

## Asset Overview

All image assets are located in the `src/assets/` directory of this project. Download them for your competition submission.

---

## Hero Section

### hero-tanjiro.jpg
**Dimensions:** 1920 x 1080 (Full HD 16:9)  
**File Size:** ~450KB  
**Description:** Epic cinematic shot of Tanjiro Kamado in dramatic pose with his black nichirin sword. Water breathing effects swirl around him in vibrant cyan and blue colors. Dark atmospheric background features a blood-red moon, mist, and cherry blossom petals.

**Usage:**
```css
.hero {
  background-image: url('assets/hero-tanjiro.jpg');
  background-size: cover;
  background-position: center;
}
```

**Key Features:**
- Subject positioned center-left for text overlay space
- High contrast for readability
- Red and cyan color scheme matches site palette
- Atmospheric depth with multiple layers

---

## Character Portraits

### character-tanjiro.jpg
**Dimensions:** 800 x 800 (1:1 square)  
**File Size:** ~180KB  
**Character:** Tanjiro Kamado  
**Description:** Close-up portrait showing distinctive red eyes and hanafuda earrings, determined expression, wearing green and black checkered haori.

**Key Visual Elements:**
- Red eyes with intense gaze
- Golden hanafuda earrings (family heirloom)
- Dark green checkered pattern
- Dramatic red accent lighting

---

### character-nezuko.jpg
**Dimensions:** 800 x 800 (1:1 square)  
**File Size:** ~175KB  
**Character:** Nezuko Kamado  
**Description:** Portrait with iconic bamboo muzzle, pink glowing eyes, long black hair with orange tips, wearing pink kimono.

**Key Visual Elements:**
- Bamboo muzzle (demon control)
- Pink/magenta eyes
- Black and coral hair gradient
- Soft pink lighting
- Purple background

---

### character-zenitsu.jpg
**Dimensions:** 800 x 800 (1:1 square)  
**File Size:** ~170KB  
**Character:** Zenitsu Agatsuma  
**Description:** Blonde-yellow hair, determined expression despite anxious personality, wearing yellow and orange haori, lightning effects.

**Key Visual Elements:**
- Bright yellow hair
- Golden eyes
- Orange/yellow clothing
- Lightning bolt effects
- Dark contrasting background

---

### character-inosuke.jpg
**Dimensions:** 800 x 800 (1:1 square)  
**File Size:** ~185KB  
**Character:** Inosuke Hashibira  
**Description:** Wearing iconic boar mask with tusks, muscular bare chest, dual wielding serrated swords, wild and feral pose.

**Key Visual Elements:**
- Brown boar mask with horns
- Dual jagged swords
- Muscular physique
- Green forest atmosphere
- Fierce, aggressive stance

---

## Gallery Images

### gallery-battle.jpg
**Dimensions:** 1280 x 720 (16:9)  
**File Size:** ~380KB  
**Description:** Epic night battle scene with multiple demon slayers fighting under a full moon. Glowing sword techniques in various colors (water blue, fire red, lightning yellow). Cherry blossoms and dramatic action poses.

**Key Scene Elements:**
- Multiple characters in dynamic poses
- Glowing weapon effects
- Full moon backdrop
- Cherry blossom petals
- Colorful breathing technique displays

**Best For:** Action showcase, power demonstration

---

### gallery-shrine.jpg
**Dimensions:** 1280 x 720 (16:9)  
**File Size:** ~320KB  
**Description:** Beautiful serene Japanese shrine at sunset with torii gate silhouette. Wisteria flowers blooming (demon-repelling flowers from the series). Warm orange and purple sky creates peaceful atmosphere.

**Key Scene Elements:**
- Torii gate structure
- Wisteria flowers (purple)
- Sunset gradient (orange to purple)
- Traditional architecture
- Peaceful, spiritual mood

**Best For:** Atmosphere, world-building, contrast to action

---

### gallery-hashira.jpg
**Dimensions:** 1280 x 720 (16:9)  
**File Size:** ~410KB  
**Description:** Group shot of the Hashira (elite demon slayers) standing together in heroic poses. Each surrounded by their unique colored aura and wielding their signature weapons.

**Key Scene Elements:**
- 9 characters in formation
- Multicolored auras (red, blue, yellow, pink, etc.)
- Dramatic backlighting
- Power and unity theme
- Dark atmospheric background

**Best For:** Team showcase, power hierarchy demonstration

---

### gallery-sword.jpg
**Dimensions:** 1280 x 720 (16:9)  
**File Size:** ~280KB  
**Description:** Close-up of a glowing nichirin sword with water breathing technique effects in cyan and blue. Cherry blossoms floating around, dark atmospheric background with dramatic lighting.

**Key Scene Elements:**
- Glowing cyan sword blade
- Water/liquid effects
- Cherry blossom petals
- Dramatic lighting beams
- Dark blue background

**Best For:** Detail shot, breathing technique showcase, aesthetic appeal

---

## Image Optimization Tips

### For Competition Submission
1. **Compress before submission** (use tools like TinyPNG or ImageOptim)
2. **Target file sizes:**
   - Hero: < 400KB
   - Characters: < 150KB each
   - Gallery: < 300KB each
3. **Format:** JPG for photos (best compression)
4. **Quality:** 85% JPEG quality is optimal

### Responsive Images
```html
<!-- Example with srcset for different screen sizes -->
<img 
  src="assets/hero-tanjiro.jpg"
  srcset="
    assets/hero-tanjiro-mobile.jpg 768w,
    assets/hero-tanjiro.jpg 1920w
  "
  sizes="100vw"
  alt="Tanjiro Kamado with water breathing effects"
>
```

### Lazy Loading
```html
<img 
  src="assets/character-tanjiro.jpg" 
  loading="lazy"
  alt="Tanjiro Kamado portrait"
>
```

---

## Color Analysis of Images

### Dominant Colors by Image

**hero-tanjiro.jpg**
- Primary: Cyan/Teal (#00D4D4)
- Secondary: Crimson Red (#DC2626)
- Background: Dark Navy (#0F1419)

**character-tanjiro.jpg**
- Primary: Forest Green (#059669)
- Accent: Crimson Red (#DC2626)
- Background: Black (#000000)

**character-nezuko.jpg**
- Primary: Pink/Magenta (#EC4899)
- Secondary: Black/Purple (#1F0A2E)
- Accent: Coral/Orange (#F97316)

**character-zenitsu.jpg**
- Primary: Golden Yellow (#FACC15)
- Secondary: Orange (#F97316)
- Background: Black (#000000)

**character-inosuke.jpg**
- Primary: Brown (#92400E)
- Secondary: Forest Green (#065F46)
- Accent: Silver (swords)

---

## Alternative Asset Sources

If you need additional images (beyond competition requirements):

### Free Resources
- **Unsplash:** Japanese landscapes, shrines, traditional patterns
- **Pexels:** Atmospheric backgrounds, night scenes
- **Pixabay:** Japanese cultural elements

### Pattern Backgrounds
```css
/* Japanese dot pattern */
background-image: radial-gradient(circle, #DC2626 1px, transparent 1px);
background-size: 20px 20px;

/* Diagonal lines */
background-image: repeating-linear-gradient(
  45deg,
  transparent,
  transparent 10px,
  rgba(220, 38, 38, 0.1) 10px,
  rgba(220, 38, 38, 0.1) 11px
);
```

---

## Asset Attribution

All images in this competition kit were generated specifically for this CSS Battle and are free to use for competition purposes.

**Terms:**
- ✅ Use in competition submissions
- ✅ Modify/edit for your design
- ✅ Include in portfolio after competition
- ❌ Resell or redistribute separately
- ❌ Claim as original photography

---

## Image Credits Format

Include in your README:
```markdown
## Image Assets
All character images and backgrounds provided by 
[Competition Organizers] for Demon Slayer CSS Battle 2025.

Demon Slayer™ intellectual property belongs to 
Koyoharu Gotouge and Ufotable.
```

---

## Troubleshooting

### Images Not Loading?
```css
/* Check relative paths */
background-image: url('../assets/hero.jpg');  /* Up one directory */
background-image: url('./assets/hero.jpg');   /* Same directory */
background-image: url('/assets/hero.jpg');    /* From root */
```

### Images Blurry?
- Check `background-size: cover` vs `contain`
- Ensure image dimensions match usage size
- Avoid scaling up small images

### Slow Loading?
- Compress images before upload
- Use lazy loading for below-fold images
- Consider using `<picture>` with multiple sources

---

## Quick Reference: All Assets

```
src/assets/
├── hero-tanjiro.jpg       (1920x1080, ~450KB)
├── character-tanjiro.jpg  (800x800, ~180KB)
├── character-nezuko.jpg   (800x800, ~175KB)
├── character-zenitsu.jpg  (800x800, ~170KB)
├── character-inosuke.jpg  (800x800, ~185KB)
├── gallery-battle.jpg     (1280x720, ~380KB)
├── gallery-shrine.jpg     (1280x720, ~320KB)
├── gallery-hashira.jpg    (1280x720, ~410KB)
└── gallery-sword.jpg      (1280x720, ~280KB)

Total: 9 images, ~2.5MB uncompressed
```

---

Download all assets from the competition package or access them at: [Competition Asset Repository]

Good luck with your CSS Battle submission! 🗡️✨
