# CAYRYS Haute Botanique & Cellular Radiance
### Awwwards-Caliber Luxury Beauty & Bio-Cellular Skincare Website

An ultra-luxury e-commerce and brand experience crafted for **CAYRYS**, incorporating world-class design principles inspired by Awwwards-winning beauty platforms (*Typology Paris, Aesop, Rhode, Augustinus Bader, and Dior Prestige*).

---

## 🌟 Visual Identity & The CAYRYS Crest

The entire visual system was constructed around the original brand emblem (`cayrys logo.jpeg`):
- **Botanical Petal Monogram ("C" + "A")**: Symbolizes rare high-alpine flora and human artistic alchemical refinement.
- **Metallic Duo-Tone Opalescence**: Fluid gradients transitioning between Imperial Champagne Gold and Twilight Indigo.
- **Editorial Typography**: Pairing classical sculpted serifs (*Cormorant Garamond*) with modern Swiss geometric sans-serifs (*Plus Jakarta Sans*) and clinical taxonomy mono (*JetBrains Mono*).

---

## 💎 Features & Interactive Modules

1. **Awwwards-Level Motion & Micro-Interactions**:
   - **Magnetic Custom Cursor**: Golden tracking dot with fluid trailing aura that expands and reacts to interactive surfaces.
   - **Dynamic Golden Spores Hero Canvas**: Bioluminescent botanical particle field animated via HTML5 Canvas.
   - **Smooth Scroll & Parallax Imagery**: High-fashion editorial art direction with subtle hover cross-fades.

2. **Sensory Soundscapes (Web Audio API)**:
   - Built-in real-time audio synthesizer for calming crystalline spa chimes upon adding items to bag, completing diagnostics, or unlocking discounts—zero external audio file dependencies.

3. **Interactive Skin Diagnostic Quiz ("The CAYRYS Cellular Assessment")**:
   - 3-step personalized clinical skin assessment analyzing constitution, ambition, and cadence.
   - Computes biocompatibility percentage and delivers a customized regimen bundle with 1-click add to bag and bundle discount.

4. **Curated Formulations Catalog & Quick View**:
   - Dynamic category filter tabs (*Serums, Crèmes, Elixirs, Mists, Haute Parfumerie*).
   - Instant sorting (*Featured, Rating, Price*).
   - Rich **Quick View Modal** featuring Olfactory Architecture (Top, Heart, Base notes), key active percentages, and clinical evidence.

5. **Clinical Proof of Efficacy (Before & After Slider)**:
   - Interactive split-screen comparison slider showcasing 28-day clinical results with real-time mouse/touch drag physics.

6. **Formula Laboratory & Rare Botanical Encyclopedia**:
   - Interactive tabbed explorer for Swiss Alpine Edelweiss, 24K Bio-Gold Peptides, Grasse Rose Centifolia, Marine Glycoprotein Ferments, and Blue Tansy with cryo-extraction metrics.

7. **Tactile Texture & Finish Explorer**:
   - Four sensory finish swatches (*Liquid Silk, Velvet Soufflé, Golden Nectar, Ethereal Cloud*) highlighting absorption speeds and skin feel.

8. **Interactive Slide-Out Bag (Cart Experience)**:
   - Real-time Free White-Glove Shipping Progress Bar ($150 threshold).
   - Complimentary Deluxe Sample selector (*Damask Rose 5ml, Crème Velours 7ml, Blue Tansy 5ml*).
   - Promo Code verification engine with celebration effects (Try codes: `LUXE15`, `CAYRYS10`, `GLOW20`).
   - Mock Checkout Modal with order receipt generation.

9. **Live Multi-Currency Converter**:
   - Instant dynamic price conversion across USD ($), EUR (€), GBP (£), and JPY (¥).

10. **Full-Screen Predictive Search & Wishlist**:
    - Instant real-time formulation lookup with trending tags and quick-add actions.

---

## 🚀 How to Run the Website

### Option 1: Direct Browser Opening (No Server Needed)
Simply double-click `index.html` or drag it into any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox, Brave). Everything is self-contained.

### Option 2: Local HTTP Server (npm / npx)
```bash
# Using npx serve
npx serve .

# Or using Python's built-in HTTP server
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

---

## 📁 File Structure

```
Carys_Website/
├── assets/
│   ├── logo.jpg                   # Original CAYRYS logo
│   ├── logo-transparent.png       # Transparent high-res master logo
│   ├── crest-transparent.png      # Isolated botanical crest monogram
│   ├── wordmark-transparent.png   # Sculpted CAYRYS typographic wordmark
│   └── favicon.png                # Tab icon
├── index.html                     # Semantic HTML5 architecture & layout
├── styles.css                     # Custom design tokens, glassmorphism, responsive grid
├── app.js                         # Application state, cart engine, quiz, sound synthesizer
├── design.md                      # Comprehensive Design System & Brand Identity Bible
├── package.json                   # Project metadata & npm scripts
└── README.md                      # Documentation
```

---

*CAYRYS Haute Botanique & Cellular Radiance • Grasse & Genève*

