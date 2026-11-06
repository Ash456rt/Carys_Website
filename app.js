/**
 * CAYRYS HAUTE BOTANIQUE & CELLULAR RADIANCE
 * Master Dynamic Application Engine, Real-Time State & REST Client
 */

// --- 1. Products Database & Formulations ---
const PRODUCTS = [
  {
    id: 'elixir-cellulaire',
    name: 'L’Élixir Cellulaire Doré',
    subtitle: 'The 24K Bio-Cellular Gold Serum',
    category: 'serums',
    categoryName: 'Cellular Serums',
    priceUSD: 185,
    volume: '30ml / 1.0 fl oz',
    badge: 'Award Winner 2026',
    batchNo: 'BATCH-2026-CH04',
    stockCount: 7,
    rating: 4.96,
    reviewsCount: 348,
    imgPrimary: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=85',
    imgHover: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=85',
    scent: 'Damask Rose Centifolia & Bergamot Zest',
    scentNotes: {
      top: 'Crystalline Italian Bergamot & White Tea',
      heart: 'Rose Centifolia from Grasse & Iris Petals',
      base: 'Golden Ambergris & Cashmere Sandalwood'
    },
    actives: ['15% Matrixyl 3000+ Oligopeptides', 'Swiss Alpine Edelweiss Stem Cells', 'Suspended 24K Bio-Gold Nanospheres', 'Multi-Molecular Hyaluronate'],
    description: 'An extraordinary cellular regenerative serum uniting Swiss high-alpine Edelweiss bio-stem cells with colloidal 24K bio-gold peptides. Accelerates mitochondrial renewal, restores cellular turgor, and reveals immediate glazed glass-skin luminescence.',
    clinical: '98% saw increased skin firmness in 14 days • 94% reported luminous barrier radiance.',
    tag: 'Flagship Formulation'
  },
  {
    id: 'creme-velours',
    name: 'Crème Velours Suprême',
    subtitle: 'The Obsidian Regenerative Crème',
    category: 'cremes',
    categoryName: 'Hydra-Crèmes',
    priceUSD: 220,
    volume: '50ml / 1.7 fl oz',
    badge: 'Clinical Favorite',
    batchNo: 'BATCH-2026-GE02',
    stockCount: 12,
    rating: 4.98,
    reviewsCount: 412,
    imgPrimary: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=85',
    imgHover: 'https://images.unsplash.com/photo-1567928815104-b7980ee5032e?auto=format&fit=crop&w=800&q=85',
    scent: 'White Truffle, Orris Root & Warm Cedar',
    scentNotes: {
      top: 'Wild Alpine Thyme & Violet Leaves',
      heart: 'Florentine Orris & White Truffle Essence',
      base: 'Virginian Cedar & Botanical Musk'
    },
    actives: ['Fermented Marine Glycoproteins', 'Ceramide NP / AP / EOP Lipid Matrix', 'Plant-Derived Squalane 8%', 'Alpine Snow Algae Extract'],
    description: 'A transformative barrier-restoring emulsion engineered in an ultra-dense bio-fermented lipid matrix. Melts upon dermal contact into an imperceptible velvet cushion, delivering 72-hour moisture lock and shielding against urban micro-pollutants.',
    clinical: '99% measured immediate dermal moisture surge • 91% noticed reduction in deep micro-grooves.',
    tag: 'Barrier Architect'
  },
  {
    id: 'nectar-nocturne',
    name: 'Nectar Botanique Nocturne',
    subtitle: 'The Midnight Recovery Concentrate',
    category: 'elixirs',
    categoryName: 'Botanical Elixirs',
    priceUSD: 165,
    volume: '30ml / 1.0 fl oz',
    badge: 'Bestseller',
    batchNo: 'BATCH-2026-FR09',
    stockCount: 4,
    rating: 4.92,
    reviewsCount: 289,
    imgPrimary: 'https://images.unsplash.com/photo-1608248597359-0a6231d680a3?auto=format&fit=crop&w=800&q=85',
    imgHover: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=85',
    scent: 'Wild Blue Tansy, Roman Chamomile & Neroli',
    scentNotes: {
      top: 'Neroli Petals & Bitter Orange',
      heart: 'Blue Tansy Chamazulene & Chamomile',
      base: 'Rare Frankincense & Vetiver Roots'
    },
    actives: ['Organic Blue Tansy Essential Extract', 'Cold-Pressed Wild Rosehip Seed Oil', 'Evening Primrose Gamma-Linolenic Acid', 'Vitamin F Forte Complex'],
    description: 'A nocturnal restorative elixir vacuum-pressed from 18 rare high-altitude botanicals. Operates in harmony with your circadian cellular mitosis to calm inflammation, soothe stressed tissue, and awaken waking complexion into rested dewy radiance.',
    clinical: '96% woke up with visibly calmed, soothed redness • 92% noted intensified skin elasticity.',
    tag: 'Nocturnal Repair'
  },
  {
    id: 'brume-celeste',
    name: 'Brume Céleste aux 7 Roses',
    subtitle: 'The Celestial Micro-Essence Mist',
    category: 'mists',
    categoryName: 'Restorative Mists',
    priceUSD: 95,
    volume: '100ml / 3.4 fl oz',
    badge: 'Maison Classic',
    batchNo: 'BATCH-2026-GR11',
    stockCount: 24,
    rating: 4.88,
    reviewsCount: 194,
    imgPrimary: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=85',
    imgHover: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=85',
    scent: 'Seven Grasse Heirloom Roses & Morning Dew',
    scentNotes: {
      top: 'May Rose Dew & Crisp Peony',
      heart: 'Damask Rose Otto & Rose Gallica',
      base: 'White Birch Sap & Clean Amber'
    },
    actives: ['Steam-Distilled Rose Centifolia Hydrosol', 'Low-Molecular Hyaluronate Oligomers', 'Niacinamide (Vitamin B3) 4%', 'Alpine Mineral Glacier Spring Water'],
    description: 'An ethereal micro-diffused facial veil crafted from dawn-harvested Grasse roses and pure Swiss glacial springs. Drenches the dermis in antioxidant bio-flavonoids and micro-hyaluronic acids, revitalizing parched skin instantly over or under makeup.',
    clinical: '100% immediate relief from tightness • Dermal hydration amplified by +114% in 5 minutes.',
    tag: 'Hydra-Infusion'
  },
  {
    id: 'regard-infini',
    name: 'Sérum Regard Infini',
    subtitle: 'The Eye Contour Architect',
    category: 'serums',
    categoryName: 'Cellular Serums',
    priceUSD: 140,
    volume: '15ml / 0.5 fl oz',
    badge: 'Ophthalmologist Tested',
    batchNo: 'BATCH-2026-CH08',
    stockCount: 9,
    rating: 4.91,
    reviewsCount: 176,
    imgPrimary: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=85',
    imgHover: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    scent: 'Fragrance-Free (Pure Botanic Bio-Ferment)',
    scentNotes: {
      top: 'Clean & Pure Non-Aromatic Base',
      heart: 'Hypoallergenic botanical extraction',
      base: 'Zero essential oils or synthetic aromas'
    },
    actives: ['Encapsulated Green Tea Caffeine 5%', 'Palmitoyl Tetrapeptide-7 Matrix', 'Micro-Circulatory Escin Extract', 'Cornflower Centaurea Hydrosol'],
    description: 'Formulated specifically for the delicate periorbital tissue. Features a custom sculpted cooling zamac alloy applicator to drain micro-lymphatic stagnation, fade hyper-pigmented dark circles, and sculpt the upper eyelid contour.',
    clinical: '89% noticed immediate de-puffing in 7 minutes • 86% verified reduction in fine crow’s feet.',
    tag: 'Periorbital Sculpt'
  },
  {
    id: 'aura-parfum',
    name: 'Extrait de Parfum "L’Aura"',
    subtitle: 'Haute Parfumerie Artisanale',
    category: 'parfum',
    categoryName: 'Haute Parfumerie',
    priceUSD: 260,
    volume: '50ml Extrait / 1.7 fl oz',
    badge: 'Limited Batch Harvest',
    batchNo: 'BATCH-2026-EX01',
    stockCount: 5,
    rating: 4.99,
    reviewsCount: 153,
    imgPrimary: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=85',
    imgHover: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=85',
    scent: 'Luminous Solar Iris, Centifolia & Rare Amber',
    scentNotes: {
      top: 'Pink Peppercorn, Candied Bergamot & Angelica',
      heart: 'May Rose Absolute & Tuscan Orris Butter',
      base: 'Grey Ambergris, Aged Benzoin & Cashmere Cedar'
    },
    actives: ['32% Extrait Concentration', 'Organic French Alcohol Base', 'Orris Concrete 15-Year Aged', 'Ethically Sourced Wild Flora'],
    description: 'The Maison’s signature olfactory creation. A magnetic portrait of alpine light dancing across velvet rose petals at dawn. Possesses an extraordinary 16-hour sillage that transforms uniquely with the wearer’s natural body chemistry.',
    clinical: '32% pure perfume oil concentration • Matured for 6 months in Grasse glass demijohns.',
    tag: 'Haute Parfumerie'
  }
];

// --- 2. AM / PM Protocols Database ---
const ROUTINES_DATA = {
  am: {
    title: 'Aura du Matin (Solar Defense & Glass Radiance)',
    description: 'Synchronized morning cellular shield designed to neutralize urban oxidative stress and impart immediate luminous bounce under daylight.',
    time: '4 Minutes',
    bundlePriceUSD: 455, // 95 + 185 + 220 = 500 -> 15% discount
    originalUSD: 500,
    productIds: ['brume-celeste', 'elixir-cellulaire', 'creme-velours'],
    steps: [
      {
        order: '01',
        name: 'Awaken & Ionize',
        product: 'Brume Céleste aux 7 Roses',
        volume: '4-5 Fine Mists',
        time: '30 Seconds',
        action: 'Hold 20cm away from face and inhale deeply. Drenches the stratum corneum in steam-distilled May rose hydrosol and micro-HA.'
      },
      {
        order: '02',
        name: 'Mitochondrial Energy',
        product: 'L’Élixir Cellulaire Doré',
        volume: '3-4 Golden Drops',
        time: '60 Seconds',
        action: 'Press gently into damp skin using upward gliding motions. 24K bio-gold peptides deliver immediate epidermal firming.'
      },
      {
        order: '03',
        name: 'Periorbital Drain',
        product: 'Sérum Regard Infini',
        volume: '1 Grain of Rice',
        time: '60 Seconds',
        action: 'Glide cooling zamac applicator around the orbital bone from inner eye to temples to drain lymphatic morning puffiness.'
      },
      {
        order: '04',
        name: 'Barrier Seal & Velvet Glaze',
        product: 'Crème Velours Suprême',
        volume: 'Dime-Sized Pearlescence',
        time: '90 Seconds',
        action: 'Warm between fingertips until transparent, then sweep over face and neck. Creates an imperceptible cashmere defense shield.'
      }
    ]
  },
  pm: {
    title: 'Repos Nocturne (Circadian Cellular Rebirth)',
    description: 'Deep nocturnal regenerative ritual calibrated for the peak cellular mitosis window (11 PM - 3 AM). Restores depleted lipid matrixes and calms inflammation.',
    time: '6 Minutes',
    bundlePriceUSD: 435, // 95 + 165 + 220 = 480 -> discount
    originalUSD: 480,
    productIds: ['brume-celeste', 'nectar-nocturne', 'creme-velours'],
    steps: [
      {
        order: '01',
        name: 'Soothe & Reset',
        product: 'Brume Céleste aux 7 Roses',
        volume: 'Generous Cloud Mist',
        time: '30 Seconds',
        action: 'Mist over cleansed skin to neutralize tap water minerals, restore pH 5.4 equilibrium, and prime cellular receptors.'
      },
      {
        order: '02',
        name: 'Circadian Lipid Repair',
        product: 'Nectar Botanique Nocturne',
        volume: '4 Drops Pressed Warm',
        time: '120 Seconds',
        action: 'Inhale soothing Blue Tansy and Roman Chamomile aromas. Press into cheeks and forehead to quench micro-inflammation.'
      },
      {
        order: '03',
        name: 'Dermal Barrier Matrix',
        product: 'Crème Velours Suprême',
        volume: 'Rich Emulsion Dollop',
        time: '90 Seconds',
        action: 'Layer over the botanical nectar. Marine glycoproteins form an overnight osmotic shield that locks hydration for 72 hours.'
      },
      {
        order: '04',
        name: 'Aroma-Sensory Release',
        product: 'Extrait de Parfum "L’Aura"',
        volume: '1 Pulse Touch',
        time: '30 Seconds',
        action: 'Touch inner wrists and collarbone. The relaxing notes of Tuscan Iris and Amber promote tranquil restorative sleep.'
      }
    ]
  }
};

let currentRoutineMode = 'am';

// --- 3. Dynamic Currency Rates ---
const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  JPY: { symbol: '¥', rate: 154.0 }
};

let currentCurrency = 'USD';

// --- 4. Application State Store ---
const AppState = {
  cart: [],
  wishlist: [],
  reviews: [],
  selectedSample: 'Damask Rose Elixir 5ml',
  appliedPromo: null,
  activeFilter: 'all',
  soundEnabled: false,
  freeShippingThresholdUSD: 150,
  freeGiftThresholdUSD: 200,
  currentUser: {
    isLoggedIn: false,
    name: 'Elena Rostova',
    email: 'vip@cayrys.com',
    tier: 'L’Alchimiste Privilège',
    points: 850
  },

  async init() {
    this.loadFromStorage();
    await this.fetchReviews();
    this.updateCartUI();
    this.updateWishlistUI();
    this.renderRoutineTimeline();
    this.initSocialProofTicker();
  },

  loadFromStorage() {
    try {
      const savedCart = localStorage.getItem('cayrys_cart');
      if (savedCart) this.cart = JSON.parse(savedCart);
      const savedWishlist = localStorage.getItem('cayrys_wishlist');
      if (savedWishlist) this.wishlist = JSON.parse(savedWishlist);
      const savedPromo = localStorage.getItem('cayrys_promo');
      if (savedPromo) this.appliedPromo = JSON.parse(savedPromo);
      const savedUser = localStorage.getItem('cayrys_user');
      if (savedUser) this.currentUser = JSON.parse(savedUser);
    } catch (e) {
      console.warn('Storage read failed', e);
    }
  },

  saveToStorage() {
    try {
      localStorage.setItem('cayrys_cart', JSON.stringify(this.cart));
      localStorage.setItem('cayrys_wishlist', JSON.stringify(this.wishlist));
      localStorage.setItem('cayrys_promo', JSON.stringify(this.appliedPromo));
      localStorage.setItem('cayrys_user', JSON.stringify(this.currentUser));
    } catch (e) {
      console.warn('Storage write failed', e);
    }
  },

  async fetchReviews() {
    try {
      const res = await fetch('/api/reviews');
      if (res.ok) {
        const json = await res.json();
        this.reviews = json.data;
        this.renderReviewsGrid();
        return;
      }
    } catch (e) {
      // Fallback
    }

    // Default reviews
    this.reviews = [
      {
        id: 1,
        author: 'Camille D.',
        location: 'Geneva, Switzerland',
        rating: 5,
        skinType: 'Dry & Sensitive',
        product: 'Crème Velours Suprême',
        quote: 'My skin has never exhibited this level of luminous glass bounce.',
        body: 'I have tried every luxury cream from Paris to Tokyo. Nothing compares to the Crème Velours Suprême. It sinks in without any greasy film, and my skin feels calm, cushioned, and completely reborn even through long winter flights.',
        verified: true,
        date: '2026-10-24'
      },
      {
        id: 2,
        author: 'Sophia V.',
        location: 'London, UK',
        rating: 5,
        skinType: 'Combination / Stressed',
        product: 'L’Élixir Cellulaire Doré',
        quote: 'L’Élixir Cellulaire Doré is nothing short of liquid alchemy.',
        body: 'Within 10 days, the redness around my cheeks vanished, and my makeup artist literally stopped in her tracks asking what treatment I had done. The subtle Damask Rose aroma turns morning application into a sacred ritual.',
        verified: true,
        date: '2026-10-28'
      },
      {
        id: 3,
        author: 'Hélène M.',
        location: 'Paris, France',
        rating: 5,
        skinType: 'Mature / Loss of Elasticity',
        product: 'Extrait de Parfum "L’Aura"',
        quote: 'The Extrait de Parfum L’Aura is my signature aura forever.',
        body: 'It is intoxicating in the most sophisticated, whisper-soft way. The solar iris and ambergris melt onto warm skin with an elegance that draws compliments everywhere I walk. Truly unforgettable craftsmanship.',
        verified: true,
        date: '2026-11-02'
      }
    ];
    this.renderReviewsGrid();
  },

  renderReviewsGrid() {
    const container = document.getElementById('reviews-dynamic-grid');
    if (!container) return;

    container.innerHTML = this.reviews.map(r => `
      <div class="review-card">
        <div class="review-stars">${'★'.repeat(r.rating)}</div>
        <h4 class="review-quote">“${r.quote}”</h4>
        <p class="review-body">${r.body}</p>
        <div class="reviewer-meta">
          <div>
            <span class="reviewer-name">${r.author} — ${r.location}</span>
            <div style="font-size:0.7rem; color:var(--color-gold);">${r.product} • ${r.skinType}</div>
          </div>
          <span class="verified-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Verified Patron
          </span>
        </div>
      </div>
    `).join('');
  },

  async submitNewReview(newReview) {
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview)
      });
      if (res.ok) {
        const json = await res.json();
        this.reviews.unshift(json.data);
      } else {
        this.reviews.unshift({ ...newReview, id: Date.now(), verified: true });
      }
    } catch (e) {
      this.reviews.unshift({ ...newReview, id: Date.now(), verified: true });
    }

    this.renderReviewsGrid();
    showToast('Your verified review has been published to the Maison records.');
    playAcousticChime('celebrate');
  },

  addToCart(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = this.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.cart[existingIndex].qty += qty;
    } else {
      this.cart.push({ id: productId, qty: qty });
    }

    this.saveToStorage();
    this.updateCartUI();
    showToast(`Added "${product.name}" to your luxury bag.`);
    playAcousticChime('add');
    openCartDrawer();
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveToStorage();
    this.updateCartUI();
    showToast('Item removed from your bag.');
  },

  updateQuantity(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      this.removeFromCart(productId);
    } else {
      this.saveToStorage();
      this.updateCartUI();
    }
  },

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    const product = PRODUCTS.find(p => p.id === productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      showToast(`Removed "${product.name}" from wishlist.`);
    } else {
      this.wishlist.push(productId);
      showToast(`Saved "${product.name}" to your wishlist.`);
      playAcousticChime('favorite');
    }
    this.saveToStorage();
    this.updateWishlistUI();
    renderProductCards();
  },

  getCartSubtotalUSD() {
    return this.cart.reduce((sum, item) => {
      const prod = PRODUCTS.find(p => p.id === item.id);
      return sum + (prod ? prod.priceUSD * item.qty : 0);
    }, 0);
  },

  getDiscountAmountUSD() {
    const subtotal = this.getCartSubtotalUSD();
    if (!this.appliedPromo) return 0;
    return subtotal * (this.appliedPromo.discountPercent / 100);
  },

  updateCartUI() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.qty, 0);
    const cartBadges = document.querySelectorAll('.cart-count-badge');
    cartBadges.forEach(b => {
      b.textContent = totalItems;
      b.style.display = totalItems > 0 ? 'flex' : 'none';
    });

    const itemsContainer = document.getElementById('cart-items-list');
    const emptyMsg = document.getElementById('cart-empty-state');
    const subtotalElem = document.getElementById('cart-subtotal-val');
    const shippingMeter = document.getElementById('shipping-meter-fill');
    const shippingText = document.getElementById('shipping-status-text');

    if (!itemsContainer) return;

    if (this.cart.length === 0) {
      itemsContainer.innerHTML = '';
      if (emptyMsg) emptyMsg.style.display = 'block';
      if (subtotalElem) subtotalElem.textContent = formatPrice(0);
      if (shippingMeter) shippingMeter.style.width = '0%';
      if (shippingText) shippingText.textContent = `Add ${formatPrice(this.freeShippingThresholdUSD)} for complimentary global shipping`;
      return;
    }

    if (emptyMsg) emptyMsg.style.display = 'none';

    // Render cart items
    itemsContainer.innerHTML = this.cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return '';
      return `
        <div class="cart-item-card">
          <img src="${product.imgPrimary}" alt="${product.name}" class="cart-item-img" />
          <div>
            <h4 class="cart-item-title">${product.name}</h4>
            <div class="cart-item-price">${formatPrice(product.priceUSD)}</div>
            <div class="qty-control-row">
              <button class="qty-btn" onclick="AppState.updateQuantity('${product.id}', -1)">−</button>
              <span>${item.qty}</span>
              <button class="qty-btn" onclick="AppState.updateQuantity('${product.id}', 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="AppState.removeFromCart('${product.id}')" title="Remove item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
      `;
    }).join('');

    const subtotalUSD = this.getCartSubtotalUSD();
    const discountUSD = this.getDiscountAmountUSD();
    const finalTotalUSD = Math.max(0, subtotalUSD - discountUSD);

    if (subtotalElem) {
      if (discountUSD > 0) {
        subtotalElem.innerHTML = `<span>${formatPrice(finalTotalUSD)}</span> <small style="font-size:0.8rem; text-decoration:line-through; color:var(--color-muted);">${formatPrice(subtotalUSD)}</small>`;
      } else {
        subtotalElem.textContent = formatPrice(finalTotalUSD);
      }
    }

    // Free shipping progress calculation
    const progressPercent = Math.min(100, (subtotalUSD / this.freeShippingThresholdUSD) * 100);
    if (shippingMeter) shippingMeter.style.width = `${progressPercent}%`;

    if (shippingText) {
      if (subtotalUSD >= this.freeShippingThresholdUSD) {
        shippingText.innerHTML = `✨ <strong>Unlocked:</strong> Complimentary Global White-Glove Shipping!`;
      } else {
        const remaining = this.freeShippingThresholdUSD - subtotalUSD;
        shippingText.textContent = `Add ${formatPrice(remaining)} more to unlock complimentary white-glove shipping!`;
      }
    }
  },

  updateWishlistUI() {
    const count = this.wishlist.length;
    const badges = document.querySelectorAll('.wishlist-count-badge');
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  renderRoutineTimeline() {
    const grid = document.getElementById('routine-steps-grid');
    const title = document.getElementById('routine-bundle-title');
    const desc = document.getElementById('routine-bundle-desc');
    const price = document.getElementById('routine-bundle-price');
    if (!grid) return;

    const data = ROUTINES_DATA[currentRoutineMode];
    if (!data) return;

    if (title) title.textContent = `Complete ${data.title}`;
    if (desc) desc.textContent = data.description;
    if (price) price.textContent = formatPrice(data.bundlePriceUSD);

    grid.innerHTML = data.steps.map(step => `
      <div class="routine-step-card">
        <div class="routine-step-badge">${step.order}</div>
        <div class="routine-step-time">⏱ ${step.time} • ${step.volume}</div>
        <h4 class="routine-step-title">${step.name}</h4>
        <div class="routine-step-product">${step.product}</div>
        <p class="routine-step-instruction">${step.action}</p>
      </div>
    `).join('');
  },

  initSocialProofTicker() {
    const feed = [
      'Camille from Geneva just acquired Crème Velours Suprême.',
      'A patron from London completed the Cellular Assessment.',
      'Sophia from Paris unlocked Complimentary White-Glove Delivery.',
      'Limited Harvest: Only 4 bottles remaining in Batch 04-GE.',
      'Elena from Tokyo reserved Extrait de Parfum "L’Aura".'
    ];
    let idx = 0;

    setInterval(() => {
      showToast(feed[idx % feed.length]);
      idx++;
    }, 18000);
  }
};

// --- 5. Currency Formatter ---
function formatPrice(usdAmount) {
  const curr = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const converted = usdAmount * curr.rate;
  if (currentCurrency === 'JPY') {
    return `${curr.symbol}${Math.round(converted).toLocaleString()}`;
  }
  return `${curr.symbol}${converted.toFixed(2)}`;
}

function handleCurrencyChange(newCurrency) {
  if (!CURRENCIES[newCurrency]) return;
  currentCurrency = newCurrency;
  AppState.updateCartUI();
  AppState.renderRoutineTimeline();
  renderProductCards();
  showToast(`Currency adjusted to ${newCurrency}.`);
}

// --- 6. Product Grid Renderer ---
function renderProductCards(category = AppState.activeFilter) {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  let filtered = PRODUCTS;
  if (category && category !== 'all') {
    filtered = PRODUCTS.filter(p => p.category === category);
  }

  // Sorting
  const sortSelect = document.getElementById('sort-products-select');
  const sortValue = sortSelect ? sortSelect.value : 'featured';
  if (sortValue === 'price-asc') {
    filtered.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (sortValue === 'price-desc') {
    filtered.sort((a, b) => b.priceUSD - a.priceUSD);
  } else if (sortValue === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  container.innerHTML = filtered.map(product => {
    const isFavorited = AppState.wishlist.includes(product.id);
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image-stage">
          <span class="product-tag-chip">${product.badge}</span>
          <button class="btn-wishlist ${isFavorited ? 'active' : ''}" onclick="AppState.toggleWishlist('${product.id}')" title="Save to wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFavorited ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </button>
          
          <img src="${product.imgPrimary}" alt="${product.name}" class="product-img img-primary" loading="lazy" />
          <img src="${product.imgHover}" alt="${product.name} texture" class="product-img img-hover" loading="lazy" />
          
          <button class="btn-quick-view" onclick="openQuickView('${product.id}')">Quick View</button>
        </div>

        <div class="product-meta-header">
          <span class="product-category-sub">${product.categoryName}</span>
          <span class="product-volume">${product.volume}</span>
        </div>

        <h3 class="product-title">${product.name}</h3>
        <p class="product-scent-line">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          ${product.scent}
        </p>

        <div class="product-rating-row">
          <div class="star-group">
            ${'★'.repeat(5)}
          </div>
          <span class="review-count">(${product.rating} • ${product.reviewsCount} verified reviews)</span>
        </div>

        <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--color-sage); margin-bottom:8px;">
          ✦ ${product.batchNo} • Only ${product.stockCount} Bottled
        </div>

        <div class="product-card-footer">
          <span class="product-price">${formatPrice(product.priceUSD)}</span>
          <button class="btn-add-to-bag" onclick="AppState.addToCart('${product.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Add to Bag
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// --- 7. Quick View Modal ---
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickview-modal');
  const content = document.getElementById('quickview-dynamic-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="quickview-gallery">
      <img src="${product.imgPrimary}" alt="${product.name}" />
    </div>
    <div class="quickview-details">
      <span class="tracking-widest-luxury" style="color:var(--color-gold); margin-bottom: 0.5rem; display:block;">${product.categoryName} • ${product.volume}</span>
      <h2 style="font-family:var(--font-serif); font-size:2.2rem; font-weight:400; line-height:1.15; margin-bottom:0.6rem;">${product.name}</h2>
      <p style="font-size:1.05rem; font-style:italic; color:var(--color-gold-hover); margin-bottom:1rem;">${product.subtitle}</p>
      
      <div style="font-size:1.6rem; font-weight:600; margin-bottom:1.4rem;">${formatPrice(product.priceUSD)}</div>
      
      <p style="font-size:0.92rem; line-height:1.7; color:var(--color-charcoal); margin-bottom:1.4rem;">
        ${product.description}
      </p>

      <div class="scent-pyramid-box">
        <h5 style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-muted); margin-bottom:6px;">Olfactory Architecture</h5>
        <div class="scent-note-row"><span class="scent-note-level">Top:</span> <span>${product.scentNotes.top}</span></div>
        <div class="scent-note-row"><span class="scent-note-level">Heart:</span> <span>${product.scentNotes.heart}</span></div>
        <div class="scent-note-row"><span class="scent-note-level">Base:</span> <span>${product.scentNotes.base}</span></div>
      </div>

      <div style="background:var(--color-porcelain); padding:12px 16px; border-radius:var(--radius-sm); margin-bottom:1.6rem; font-size:0.82rem;">
        <strong>Clinical Evidence:</strong> ${product.clinical}
      </div>

      <div style="display:flex; gap:12px; align-items:center;">
        <div class="qty-control-row" style="padding:6px 14px; font-size:1rem;">
          <button class="qty-btn" id="qv-qty-minus">−</button>
          <span id="qv-qty-val">1</span>
          <button class="qty-btn" id="qv-qty-plus">+</button>
        </div>
        <button class="btn-primary" style="flex-grow:1;" id="qv-add-btn">
          Add ${formatPrice(product.priceUSD)} to Bag
        </button>
      </div>
    </div>
  `;

  let qvQty = 1;
  const minus = document.getElementById('qv-qty-minus');
  const plus = document.getElementById('qv-qty-plus');
  const val = document.getElementById('qv-qty-val');
  const addBtn = document.getElementById('qv-add-btn');

  minus.onclick = () => { if (qvQty > 1) { qvQty--; val.textContent = qvQty; addBtn.textContent = `Add ${formatPrice(product.priceUSD * qvQty)} to Bag`; } };
  plus.onclick = () => { qvQty++; val.textContent = qvQty; addBtn.textContent = `Add ${formatPrice(product.priceUSD * qvQty)} to Bag`; };
  addBtn.onclick = () => {
    AppState.addToCart(product.id, qvQty);
    closeQuickView();
  };

  modal.classList.add('open');
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  if (modal) modal.classList.remove('open');
}

// --- 8. Cart Slide-Out Drawer Controls ---
function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  const drawer = document.getElementById('cart-drawer');
  if (overlay && drawer) {
    overlay.classList.add('open');
    drawer.classList.add('open');
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  const drawer = document.getElementById('cart-drawer');
  if (overlay && drawer) {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
  }
}

// --- 9. Routine Protocol Switcher ---
function switchRoutineMode(mode) {
  currentRoutineMode = mode;
  document.getElementById('btn-routine-am').classList.toggle('active', mode === 'am');
  document.getElementById('btn-routine-pm').classList.toggle('active', mode === 'pm');
  AppState.renderRoutineTimeline();
  playAcousticChime('step');
}

function addCurrentRoutineBundle() {
  const data = ROUTINES_DATA[currentRoutineMode];
  if (!data) return;
  data.productIds.forEach(id => AppState.addToCart(id, 1));
  showToast(`Added Complete ${data.title} to your bag (15% Bundle Savings applied).`);
  playAcousticChime('celebrate');
}

// --- 10. Interactive AI Beauty Concierge ("Consultant CAYRYS") ---
function toggleConcierge() {
  const overlay = document.getElementById('concierge-overlay');
  const drawer = document.getElementById('concierge-drawer');
  if (overlay && drawer) {
    overlay.classList.toggle('open');
    drawer.classList.toggle('open');
  }
}

async function sendConciergeQuery(queryText) {
  const chatBody = document.getElementById('concierge-chat-body');
  if (!chatBody) return;

  // Append user bubble
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble user';
  userBubble.textContent = queryText;
  chatBody.appendChild(userBubble);
  chatBody.scrollTop = chatBody.scrollHeight;

  // Fetch or simulate AI response
  try {
    const res = await fetch('/api/concierge/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: queryText })
    });
    if (res.ok) {
      const data = await res.json();
      appendBotReply(data.reply, data.suggestedProductId);
      return;
    }
  } catch (e) {
    // Fallback
  }

  // Client-side intelligent NLP engine
  const clientResult = evaluateClientConciergeNLP(queryText);
  appendBotReply(clientResult.reply, clientResult.suggestedProductId);
}

function evaluateClientConciergeNLP(queryRaw) {
  const q = String(queryRaw || '').toLowerCase().trim();

  // If empty or undefined
  if (!q || q === 'undefined' || q === 'null') {
    return {
      reply: "Bonjour and welcome to Maison CAYRYS. I am your personal Bio-Cellular Beauty Consultant. You can ask me about treating fine lines, calming redness, dark circles, proper product layering, or our Swiss cryo-botanicals.",
      suggestedProductId: 'elixir-cellulaire'
    };
  }

  // 1. Greetings & Pleasantries
  if (/^(hi|hello|hey|bonjour|good morning|good afternoon|good evening|salut|greetings)\b/.test(q)) {
    return {
      reply: "Bonjour and welcome to Maison CAYRYS. I am your personal Bio-Cellular Beauty Consultant. Whether you wish to address a specific skin concern, discover our Grasse & Swiss Alps formulations, or curate a bespoke ritual, I am entirely at your service. Where shall we begin?",
      suggestedProductId: null
    };
  }

  if (/who are you|who made you|what are you|your purpose/.test(q)) {
    return {
      reply: "I am Consultant CAYRYS, an intelligent advisor trained on our Swiss cellular biology archives, Grasse botanical harvests, and clinical trial databases. My mission is to assist patrons in achieving transcendent skin health through synchronized bio-botanical protocols.",
      suggestedProductId: null
    };
  }

  if (/thank|merci|grateful|appreciate|helpful/.test(q)) {
    return {
      reply: "It is an absolute pleasure to assist your skin sanctuary journey. If you need any further advice on formulations, molecular absorption, or white-glove delivery, please do not hesitate to ask. May your day be luminous.",
      suggestedProductId: null
    };
  }

  // 2. Eyes, Dark Circles & Puffiness
  if (/eye|dark circle|puff|bag|crow|undereye|orbital/.test(q)) {
    return {
      reply: "For the periorbital contour, the dermis is five times thinner than the rest of the face. Our Sérum Regard Infini ($140) combines 5% micro-encapsulated green tea caffeine with Palmitoyl Tetrapeptide-7 and a custom sculpted cooling zamac alloy applicator tip. It drains morning lymphatic stagnation in under 7 minutes and strengthens micro-capillaries to diminish dark circles.",
      suggestedProductId: 'regard-infini'
    };
  }

  // 3. Aging, Wrinkles, Firmness & Elasticity
  if (/wrinkle|aging|age|anti-aging|fine line|firm|elastic|sag|mature|lift|collagen|youth/.test(q)) {
    return {
      reply: "Our cellular anti-aging paradigm is powered by Swiss Alpine Edelweiss stem cells and 24K Bio-Gold Peptides. In independent clinical trials, L’Élixir Cellulaire Doré ($185) stimulated a +48% increase in pro-collagen I synthesis within 14 days. For comprehensive firming, pair it with Crème Velours Suprême to cushion depleted skin volume and visibly soften micro-grooves.",
      suggestedProductId: 'elixir-cellulaire'
    };
  }

  // 4. Dryness vs Dehydration
  if (/dry|dehydrat|flak|parch|tight|quench|moistur/.test(q)) {
    return {
      reply: "It is essential to distinguish between dehydration (lack of water in the epidermis) and dryness (depletion of protective lipids). For dehydration, Brume Céleste ($95) infuses multi-weight oligo-hyaluronic acid oligomers. For lipid dryness, Crème Velours Suprême ($220) provides an ultra-dense bio-fermented ceramide matrix (NP, AP, EOP) and plant squalane that locks in deep moisture for 72 continuous hours.",
      suggestedProductId: 'creme-velours'
    };
  }

  // 5. Redness, Sensitivity, Rosacea & Barrier Repair
  if (/red|sensitiv|rosacea|irritat|barrier|compromised|burn|inflam|eczema/.test(q)) {
    return {
      reply: "For reactive or barrier-compromised skin, aggressive treatments must be avoided. Our Nectar Botanique Nocturne ($165) contains 18.4% pure Mediterranean Blue Tansy chamazulene, renowned for halting cellular lipid peroxidation and soothing erythema overnight. Follow with Crème Velours Suprême to rebuild the protective lipid shield without stinging.",
      suggestedProductId: 'nectar-nocturne'
    };
  }

  // 6. Acne, Blemishes, Pores & Sebum
  if (/acne|breakout|pimple|blemish|pore|congest|oil|t-zone|blackhead|sebum/.test(q)) {
    return {
      reply: "Traditional acne treatments often strip the skin barrier, triggering compensatory sebum overdrive. CAYRYS balances cellular homeostasis: Brume Céleste contains 4% Niacinamide to refine pores and regulate sebum, while Nectar Botanique Nocturne utilizes organic blue tansy and cold-pressed wild rosehip oil to decongest pores and calm post-blemish redness with zero heavy pore-clogging residue.",
      suggestedProductId: 'brume-celeste'
    };
  }

  // 7. Glass Skin, Radiance & Glow
  if (/glow|glass skin|radiance|bright|dull|luster|dewy|complexion/.test(q)) {
    return {
      reply: "To attain the coveted 'glazed glass skin' radiance, the secret is molecular layering: apply 3-4 drops of L’Élixir Cellulaire Doré immediately following a generous misting of Brume Céleste. The suspended 24K bio-gold nanospheres reflect multidirectional light while bio-peptides plump epidermal turgor for a translucent, lit-from-within sheen.",
      suggestedProductId: 'elixir-cellulaire'
    };
  }

  // 8. Bestsellers & Where to Start
  if (/bestseller|best seller|popular|most loved|top seller|top product|recommend|where to start|what should i buy|iconic/.test(q)) {
    return {
      reply: "The definitive cornerstone of the Maison is our award-winning 'Royal Cellular Longevity Ritual' duo: L’Élixir Cellulaire Doré (30ml) and Crème Velours Suprême (50ml). Together, they address 98% of all cellular renewal markers—firmness, luminous glow, deep barrier replenishment, and protection against environmental stress.",
      suggestedProductId: 'elixir-cellulaire'
    };
  }

  // 9. Routine, Layering Order & Protocol Steps
  if (/routine|layer|order|step|how to use|when to use|morning|evening|am|pm|night/.test(q)) {
    return {
      reply: "Our French-Swiss layering protocol follows molecular density from lightest to richest:\n1. Awaken & Tone: Brume Céleste aux 7 Roses\n2. Active Target: L’Élixir Cellulaire Doré (AM) or Nectar Nocturne (PM)\n3. Eye Contour: Sérum Regard Infini with zamac tip\n4. Barrier Seal: Crème Velours Suprême.\nAllow 45 seconds between steps for optimal cellular absorption.",
      suggestedProductId: 'brume-celeste'
    };
  }

  // 10. Discount Codes, Vouchers & Promotions
  if (/discount|code|promo|voucher|coupon|sale|offer|deal|saving/.test(q)) {
    return {
      reply: "As a welcome to the Maison, you may apply privilege invitation code LUXE15 during checkout to receive 15% savings on your first ritual. Alternatively, CAYRYS10 grants 10% savings. Furthermore, all orders above $150 automatically unlock complimentary global white-glove shipping and deluxe sample gifts.",
      suggestedProductId: null
    };
  }

  // 11. Ingredients & Formulation Philosophy
  if (/ingredient|formula|science|technology|gold|edelweiss|matrixyl|biotechnology/.test(q)) {
    return {
      reply: "Maison CAYRYS formulates without compromises. We reject synthetic fillers and water dilution. Every formulation is infused with bioactive extracts: Swiss Alpine Edelweiss stem cells (-40°C cryo-extracted), colloidal 24K Bio-Gold peptides, Grasse May Rose hydrosol, and fermented marine glycoproteins. All ingredients are Ecocert certified, biocompatible at pH 5.4, and clinically proven.",
      suggestedProductId: 'elixir-cellulaire'
    };
  }

  // 12. Clean, Cruelty-Free, Vegan & Eco-Standards
  if (/clean|cruelty|vegan|animal|organic|ecocert|paraben|silicone|toxic|chemical|safe/.test(q)) {
    return {
      reply: "CAYRYS adheres to the strictest European clean luxury standards: 100% Leaping Bunny certified cruelty-free, zero parabens, zero silicones, zero phthalates, and zero artificial dyes. Furthermore, our formulations are bottled in Swiss Miron violet glass—a patented biophotonic glass that blocks visible light degradation to protect bio-actives naturally without synthetic preservatives.",
      suggestedProductId: null
    };
  }

  // 13. Parfumerie & Fragrance
  if (/parfum|perfume|fragrance|scent|smell|aura|olfactory|note|sillage/.test(q)) {
    return {
      reply: "Extrait de Parfum 'L’Aura' ($260, 50ml) is our signature artisanal creation. Formulated at a generous 32% pure extrait concentration in Grasse, it unveils crystalline Italian Bergamot and Pink Pepper, blossoms into Tuscan Iris butter and heirloom May Rose Centifolia, and rests on a magnetic bed of natural Grey Ambergris and Virginian Cedarwood with an extraordinary 16-hour sillage.",
      suggestedProductId: 'aura-parfum'
    };
  }

  // 14. Shipping, Delivery, Tracking & Returns
  if (/shipping|delivery|ship|courier|track|return|refund|custom|tax|worldwide/.test(q)) {
    return {
      reply: "We offer complimentary temperature-controlled white-glove global delivery on all orders exceeding $150. Formulations are bottled fresh in Geneva and Grasse, sealed in velvet presentation cases, and dispatched via express courier with tracked 2-3 business day transit. We provide effortless 30-day complimentary returns on all unopened items.",
      suggestedProductId: null
    };
  }

  // 15. Pregnancy & Dermatological Safety
  if (/pregnant|pregnancy|breastfeed|nursing|baby|allerg|dermatol/.test(q)) {
    return {
      reply: "All CAYRYS formulations are dermatologically tested, non-comedogenic, and hypoallergenic. We deliberately formulate without synthetic retinoids, hydroquinone, or aggressive BHA peels. However, during pregnancy and nursing, hormones can alter skin sensitivity; we recommend reviewing our published botanical ingredient lists with your physician.",
      suggestedProductId: null
    };
  }

  // 16. Prices & Currency
  if (/price|cost|how much|dollar|euro|pound|yen|expensive|worth it/.test(q)) {
    return {
      reply: "CAYRYS formulations range from $95 (Brume Céleste aux 7 Roses) to $260 (Extrait de Parfum L'Aura). You can toggle between USD ($), EUR (€), GBP (£), and JPY (¥) in the upper navigation bar. Because our formulas are 100% bio-active without inert water filler, a single bottle typically lasts 3 to 4 months of daily ritual application.",
      suggestedProductId: null
    };
  }

  // 17. Intelligent Contextual Semantic Fallback
  return {
    reply: `Regarding "${queryRaw}": At Maison CAYRYS, every formula is calibrated for cellular longevity and botanical purity. I recommend exploring our Flagship L’Élixir Cellulaire Doré for cellular rejuvenation, or our Crème Velours Suprême for deep barrier restoration. You may also take our 3-Step Cellular Assessment quiz on this page to receive a custom protocol tailored to your exact skin typology.`,
    suggestedProductId: 'elixir-cellulaire'
  };
}

function appendBotReply(replyText, suggestedProductId) {
  const chatBody = document.getElementById('concierge-chat-body');
  if (!chatBody) return;

  const botBubble = document.createElement('div');
  botBubble.className = 'chat-bubble bot';
  botBubble.innerHTML = `
    <p>${replyText}</p>
    ${suggestedProductId ? `
      <div style="margin-top:10px; padding-top:10px; border-top:1px dashed var(--color-sandstone); display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:600; font-size:0.8rem; color:var(--color-gold-hover);">Recommended: ${PRODUCTS.find(p=>p.id===suggestedProductId)?.name || ''}</span>
        <button class="btn-primary" style="padding:6px 14px; font-size:0.72rem;" onclick="AppState.addToCart('${suggestedProductId}'); toggleConcierge();">Add to Bag</button>
      </div>
    ` : ''}
  `;
  chatBody.appendChild(botBubble);
  chatBody.scrollTop = chatBody.scrollHeight;
  playAcousticChime('step');
}

function handleConciergeSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('concierge-text-input');
  if (!input || !input.value.trim()) return;
  const val = input.value.trim();
  input.value = '';
  sendConciergeQuery(val);
}

// --- 11. Review Submission Modal ---
function openReviewModal() {
  const modal = document.getElementById('review-submit-modal');
  if (modal) modal.classList.add('open');
}

function closeReviewModal() {
  const modal = document.getElementById('review-submit-modal');
  if (modal) modal.classList.remove('open');
}

function handleReviewFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('rev-input-name').value.trim();
  const location = document.getElementById('rev-input-location').value.trim();
  const product = document.getElementById('rev-input-product').value;
  const skinType = document.getElementById('rev-input-skintype').value;
  const rating = document.getElementById('rev-input-rating').value;
  const quote = document.getElementById('rev-input-quote').value.trim();
  const body = document.getElementById('rev-input-body').value.trim();

  AppState.submitNewReview({
    author: name,
    location: location,
    product: product,
    skinType: skinType,
    rating: Number(rating),
    quote: quote,
    body: body
  });

  closeReviewModal();
  e.target.reset();
}

// --- 12. VIP Member Portal Modal ---
function openMemberModal() {
  const modal = document.getElementById('member-portal-modal');
  if (modal) modal.classList.add('open');
}

function closeMemberModal() {
  const modal = document.getElementById('member-portal-modal');
  if (modal) modal.classList.remove('open');
}

// --- 13. Mobile Navigation Drawer ---
function toggleMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) drawer.classList.toggle('open');
}

// --- 14. Skin Diagnostic Quiz Engine ---
const QuizEngine = {
  currentStep: 1,
  answers: { skinType: null, ambition: null, cadence: null },

  selectOption(step, key, cardElement) {
    this.answers[key] = cardElement.getAttribute('data-value');
    const parent = cardElement.parentElement;
    parent.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');
  },

  nextStep(step) {
    if (step < 3) {
      document.getElementById(`quiz-step-${step}`).style.display = 'none';
      document.getElementById(`quiz-step-${step + 1}`).style.display = 'block';
      this.currentStep = step + 1;
      
      const fill = document.getElementById('quiz-progress-fill');
      if (fill) fill.style.width = `${((step + 1) / 3) * 100}%`;
      playAcousticChime('step');
    } else {
      this.calculateResults();
    }
  },

  prevStep(step) {
    if (step > 1) {
      document.getElementById(`quiz-step-${step}`).style.display = 'none';
      document.getElementById(`quiz-step-${step - 1}`).style.display = 'block';
      this.currentStep = step - 1;
      const fill = document.getElementById('quiz-progress-fill');
      if (fill) fill.style.width = `${((step - 1) / 3) * 100}%`;
    }
  },

  calculateResults() {
    for (let i = 1; i <= 3; i++) {
      const el = document.getElementById(`quiz-step-${i}`);
      if (el) el.style.display = 'none';
    }

    const resultPanel = document.getElementById('quiz-result-panel');
    if (!resultPanel) return;

    let matchedRegimen = {
      title: 'The Royal Cellular Longevity Ritual',
      affinity: '99.4% Biocompatibility',
      summary: 'Engineered specifically for cellular revitalization, multi-depth moisture restoration, and firming turgor. Formulated with our flagship 24K bio-gold peptides and Swiss alpine edelweiss stem cells.',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=85',
      products: ['elixir-cellulaire', 'creme-velours'],
      bundlePriceUSD: 360,
      originalUSD: 405
    };

    if (this.answers.ambition === 'barrier' || this.answers.skinType === 'sensitive') {
      matchedRegimen = {
        title: 'The Soothing Bio-Barrier Shield Ritual',
        affinity: '98.8% Biocompatibility',
        summary: 'Targeted calming protocol with Mediterranean Blue Tansy, Grasse May Rose hydrosols, and fermented marine lipid glycoproteins to soothe reactivity and lock in 72-hour calm.',
        image: 'https://images.unsplash.com/photo-1608248597359-0a6231d680a3?auto=format&fit=crop&w=800&q=85',
        products: ['nectar-nocturne', 'brume-celeste'],
        bundlePriceUSD: 230,
        originalUSD: 260
      };
    }

    document.getElementById('regimen-affinity-val').textContent = matchedRegimen.affinity;
    document.getElementById('regimen-title-val').textContent = matchedRegimen.title;
    document.getElementById('regimen-summary-val').textContent = matchedRegimen.summary;
    document.getElementById('regimen-img-val').src = matchedRegimen.image;
    document.getElementById('regimen-bundle-price').textContent = formatPrice(matchedRegimen.bundlePriceUSD);
    document.getElementById('regimen-original-price').textContent = formatPrice(matchedRegimen.originalUSD);

    const bundleBtn = document.getElementById('btn-add-quiz-bundle');
    bundleBtn.onclick = () => {
      matchedRegimen.products.forEach(pId => AppState.addToCart(pId, 1));
      showToast(`Added Complete "${matchedRegimen.title}" to your bag!`);
    };

    resultPanel.style.display = 'block';
    playAcousticChime('celebrate');
  },

  restart() {
    this.currentStep = 1;
    this.answers = { skinType: null, ambition: null, cadence: null };
    document.getElementById('quiz-result-panel').style.display = 'none';
    document.getElementById('quiz-step-1').style.display = 'block';
    document.getElementById('quiz-progress-fill').style.width = '33.3%';
    document.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
  }
};

// --- 15. Interactive Before/After Split Slider ---
function initBeforeAfterSlider() {
  const container = document.getElementById('before-after-container');
  const handle = document.getElementById('slider-handle');
  const afterLayer = document.getElementById('after-img-layer');

  if (!container || !handle || !afterLayer) return;

  let isDragging = false;

  const updateSlider = (clientX) => {
    const rect = container.getBoundingClientRect();
    let posX = clientX - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;
    const percentage = (posX / rect.width) * 100;

    handle.style.left = `${percentage}%`;
    afterLayer.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
  };

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches[0]) updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches[0]) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => { isDragging = false; });
}

// --- 16. Search Modal Engine ---
function openSearchModal() {
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-main-input');
  if (modal) {
    modal.classList.add('open');
    if (input) {
      input.value = '';
      input.focus();
      handleSearchInput('');
    }
  }
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) modal.classList.remove('open');
}

function handleSearchInput(query) {
  const resultsContainer = document.getElementById('search-results-list');
  if (!resultsContainer) return;

  const q = query.trim().toLowerCase();
  if (q.length === 0) {
    resultsContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--color-muted); padding: 40px 0;">Enter keywords such as "serum", "rose", "gold", "eyes", or "creme"...</p>';
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.categoryName.toLowerCase().includes(q) ||
    p.scent.toLowerCase().includes(q) ||
    p.actives.some(a => a.toLowerCase().includes(q))
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--color-muted); padding: 40px 0;">No formulations found matching "${query}".</p>`;
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div style="display:flex; gap:16px; align-items:center; background:#fff; padding:14px; border-radius:var(--radius-sm); border:1px solid var(--color-sandstone); cursor:pointer;" onclick="closeSearchModal(); openQuickView('${p.id}');">
      <img src="${p.imgPrimary}" style="width:64px; height:64px; border-radius:var(--radius-xs); object-fit:cover;" />
      <div>
        <h4 style="font-family:var(--font-serif); font-size:1.1rem; margin-bottom:2px;">${p.name}</h4>
        <div style="font-size:0.75rem; color:var(--color-gold); font-weight:600;">${p.categoryName}</div>
        <div style="font-size:0.85rem; font-weight:600; margin-top:4px;">${formatPrice(p.priceUSD)}</div>
      </div>
    </div>
  `).join('');
}

// --- 17. Promo Code Engine ---
function applyPromoCode() {
  const input = document.getElementById('promo-code-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  const validPromos = {
    'LUXE15': { discountPercent: 15, message: 'VIP Privilege: 15% Savings applied!' },
    'CAYRYS10': { discountPercent: 10, message: 'Welcome Gift: 10% Savings applied!' },
    'GLOW20': { discountPercent: 20, message: 'Maison Master: 20% Privilege applied!' }
  };

  if (validPromos[code]) {
    AppState.appliedPromo = { code: code, discountPercent: validPromos[code].discountPercent };
    AppState.saveToStorage();
    AppState.updateCartUI();
    showToast(validPromos[code].message);
    playAcousticChime('celebrate');
    input.value = '';
  } else {
    showToast('Invalid invitation code. Try LUXE15 or CAYRYS10.');
  }
}

// --- 18. Luxury Sound Synthesizer (Web Audio API) ---
let audioCtx = null;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

function toggleSensoryAudio() {
  initAudioContext();
  AppState.soundEnabled = !AppState.soundEnabled;
  const audioBtns = document.querySelectorAll('.audio-toggle-btn');
  audioBtns.forEach(btn => {
    btn.classList.toggle('playing', AppState.soundEnabled);
  });

  if (AppState.soundEnabled) {
    showToast('Sensory Soundscapes enabled.');
    playAcousticChime('celebrate');
  } else {
    showToast('Sensory Soundscapes muted.');
  }
}

function playAcousticChime(type = 'add') {
  if (!AppState.soundEnabled) return;
  initAudioContext();
  if (!audioCtx || audioCtx.state === 'suspended') {
    audioCtx && audioCtx.resume();
  }

  const now = audioCtx.currentTime;

  if (type === 'add') {
    playTone(523.25, now, 0.4);
    playTone(659.25, now + 0.08, 0.5);
    playTone(783.99, now + 0.16, 0.6);
  } else if (type === 'step') {
    playTone(440, now, 0.25);
    playTone(554.37, now + 0.05, 0.3);
  } else if (type === 'favorite') {
    playTone(587.33, now, 0.35);
    playTone(739.99, now + 0.09, 0.45);
  } else if (type === 'celebrate') {
    playTone(523.25, now, 0.4);
    playTone(659.25, now + 0.1, 0.45);
    playTone(783.99, now + 0.2, 0.5);
    playTone(1046.50, now + 0.3, 0.7);
  }
}

function playTone(freq, startTime, duration) {
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.08, startTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  } catch (e) {
    // Silent fail
  }
}

// --- 19. Hero Dynamic Golden Spores Canvas ---
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4 - 0.15,
      alpha: Math.random() * 0.6 + 0.2,
      fadeSpeed: (Math.random() * 0.008 + 0.002) * (Math.random() > 0.5 ? 1 : -1)
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.alpha += p.fadeSpeed;

      if (p.alpha > 0.75 || p.alpha < 0.15) {
        p.fadeSpeed = -p.fadeSpeed;
      }

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(197, 160, 89, ${p.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(197, 160, 89, 0.4)';
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}

// --- 20. Magnetic Custom Cursor ---
function initMagneticCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const interactiveSelectors = 'button, a, input, select, .quiz-option-card, .product-card, .texture-card';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      ring.classList.add('hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      ring.classList.remove('hovering');
    }
  });
}

// --- 21. Toast Notification Utility ---
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `
    <span style="color:var(--color-gold);">✦</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3400);
}

// --- 22. Sample Selection in Bag ---
function selectSample(sampleName, pillElement) {
  AppState.selectedSample = sampleName;
  document.querySelectorAll('.sample-chip').forEach(c => c.classList.remove('selected'));
  pillElement.classList.add('selected');
  showToast(`Complimentary sample: "${sampleName}" chosen.`);
}

// --- 23. Mock Checkout & Printable Order Confirmation ---
function openCheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast('Your bag is currently empty.');
    return;
  }

  const subtotalUSD = AppState.getCartSubtotalUSD();
  const discountUSD = AppState.getDiscountAmountUSD();
  const finalUSD = Math.max(0, subtotalUSD - discountUSD);

  const modal = document.getElementById('checkout-modal');
  const details = document.getElementById('checkout-order-summary');
  if (!modal || !details) return;

  details.innerHTML = `
    <div style="background:var(--color-porcelain); padding:20px; border-radius:var(--radius-sm); margin-bottom:1.5rem;">
      <h4 style="font-family:var(--font-serif); font-size:1.2rem; margin-bottom:10px;">Order Summary (${AppState.cart.reduce((s,i)=>s+i.qty,0)} Items)</h4>
      ${AppState.cart.map(item => {
        const prod = PRODUCTS.find(p => p.id === item.id);
        return `<div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:6px;">
          <span>${item.qty}x ${prod.name}</span>
          <span>${formatPrice(prod.priceUSD * item.qty)}</span>
        </div>`;
      }).join('')}
      <div style="border-top:1px dashed var(--color-sandstone); margin-top:10px; padding-top:10px; font-size:0.85rem;">
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <span>Complimentary Sample:</span>
          <span style="color:var(--color-gold-hover); font-weight:600;">${AppState.selectedSample}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <span>Delivery:</span>
          <span>${subtotalUSD >= AppState.freeShippingThresholdUSD ? 'Complimentary White-Glove' : formatPrice(15)}</span>
        </div>
        ${discountUSD > 0 ? `<div style="display:flex; justify-content:space-between; color:var(--color-sage); margin-bottom:4px;">
          <span>Privilege Discount:</span>
          <span>-${formatPrice(discountUSD)}</span>
        </div>` : ''}
        <div style="display:flex; justify-content:space-between; font-weight:700; font-size:1.1rem; margin-top:8px; border-top:1px solid var(--color-sandstone); padding-top:8px;">
          <span>Total:</span>
          <span>${formatPrice(finalUSD + (subtotalUSD >= AppState.freeShippingThresholdUSD ? 0 : 15))}</span>
        </div>
      </div>
    </div>
  `;

  closeCartDrawer();
  modal.classList.add('open');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('open');
}

async function confirmMockOrder(e) {
  e.preventDefault();
  const subtotalUSD = AppState.getCartSubtotalUSD();
  const discountUSD = AppState.getDiscountAmountUSD();
  const finalUSD = Math.max(0, subtotalUSD - discountUSD);

  const payload = {
    customer: {
      firstName: e.target.querySelector('input[placeholder="First Name"]').value,
      email: e.target.querySelector('input[type="email"]').value,
    },
    items: AppState.cart,
    sample: AppState.selectedSample,
    totalUSD: finalUSD
  };

  let orderId = `CYR-CH-${Math.floor(100000 + Math.random() * 900000)}`;

  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json();
      orderId = data.data.orderId;
    }
  } catch (err) {}

  closeCheckoutModal();
  AppState.cart = [];
  AppState.saveToStorage();
  AppState.updateCartUI();

  // Show luxury receipt modal
  openReceiptModal(orderId, payload.customer.firstName, finalUSD);
  playAcousticChime('celebrate');
}

function openReceiptModal(orderId, name, total) {
  const modal = document.getElementById('receipt-modal');
  const content = document.getElementById('receipt-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="text-align:center; margin-bottom:1.5rem;">
      <img src="assets/crest-transparent.png" alt="CAYRYS Monogram" style="height:48px; margin:0 auto 10px;" />
      <h3 style="font-family:var(--font-serif); font-size:1.8rem; margin-bottom:4px;">Dispatch Confirmed</h3>
      <p style="font-size:0.85rem; color:var(--color-muted);">Thank you, ${name}. Your ritual has been sealed and dispatched.</p>
    </div>

    <div style="background:var(--color-porcelain); padding:20px; border-radius:var(--radius-sm); font-size:0.86rem; line-height:1.7; margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between;"><strong>Order Reference:</strong> <span style="font-family:var(--font-mono); color:var(--color-gold-hover);">${orderId}</span></div>
      <div style="display:flex; justify-content:space-between;"><strong>Origin:</strong> Geneva Bio-Laboratory &amp; Grasse</div>
      <div style="display:flex; justify-content:space-between;"><strong>Courier:</strong> Temperature-Controlled White-Glove</div>
      <div style="display:flex; justify-content:space-between;"><strong>Estimated Delivery:</strong> Within 2-3 Business Days</div>
      <div style="display:flex; justify-content:space-between; border-top:1px dashed var(--color-sandstone); margin-top:8px; padding-top:8px; font-weight:700;">
        <span>Amount Settled:</span>
        <span>${formatPrice(total)}</span>
      </div>
    </div>

    <button class="btn-primary" style="width:100%;" onclick="closeReceiptModal()">
      Return to Maison
    </button>
  `;

  modal.classList.add('open');
}

function closeReceiptModal() {
  const modal = document.getElementById('receipt-modal');
  if (modal) modal.classList.remove('open');
}

// --- 24. Initialization on DOM Load ---
document.addEventListener('DOMContentLoaded', () => {
  AppState.init();
  renderProductCards();
  initHeroCanvas();
  initMagneticCursor();
  initBeforeAfterSlider();

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.activeFilter = pill.getAttribute('data-category');
      renderProductCards(AppState.activeFilter);
    });
  });

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input && input.value) {
        showToast('Welcome to the CAYRYS Inner Circle. Your 15% code LUXE15 is ready.');
        input.value = '';
        playAcousticChime('favorite');
      }
    });
  }
});


// ==========================================================================
// 3D MOLECULAR STUDIO, DERMAL DEPTH SIMULATOR & THEME SWITCHER
// ==========================================================================

// --- Theme Switcher ---
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const target = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', target);
  localStorage.setItem('cayrys_theme', target);
  
  const icon = document.getElementById('theme-toggle-icon');
  if (icon) {
    icon.innerHTML = target === 'dark' 
      ? '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
      : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  }

  showToast(target === 'dark' ? 'Obsidian Velvet Salon activated.' : 'Alabaster Pearl Day Sanctuary activated.');
  playAcousticChime('step');
}

// Check saved theme on load
(function checkInitialTheme() {
  const saved = localStorage.getItem('cayrys_theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  }
})();

// --- 3D Molecular Cellular Canvas Simulation ---
let molRotX = 0;
let molRotY = 0;
let isDraggingMol = false;
let lastMouseX = 0;
let lastMouseY = 0;
let molParticleCount = 80;
let molSpeed = 0.008;

function initMolecularCanvas() {
  const canvas = document.getElementById('molecular-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  // Mouse / Touch rotation listeners
  canvas.addEventListener('mousedown', (e) => {
    isDraggingMol = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDraggingMol) return;
    const deltaX = e.clientX - lastMouseX;
    const deltaY = e.clientY - lastMouseY;
    molRotY += deltaX * 0.008;
    molRotX += deltaY * 0.008;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => { isDraggingMol = false; });

  // Touch support
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches[0]) {
      isDraggingMol = true;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDraggingMol || !e.touches[0]) return;
    const deltaX = e.touches[0].clientX - lastMouseX;
    const deltaY = e.touches[0].clientY - lastMouseY;
    molRotY += deltaX * 0.008;
    molRotX += deltaY * 0.008;
    lastMouseX = e.touches[0].clientX;
    lastMouseY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', () => { isDraggingMol = false; });

  // Generate 3D sphere points
  const points = [];
  const radius = Math.min(width, height) * 0.35;

  for (let i = 0; i < 140; i++) {
    const theta = Math.acos(2 * Math.random() - 1);
    const phi = 2 * Math.PI * Math.random();
    points.push({
      x: radius * Math.sin(theta) * Math.cos(phi),
      y: radius * Math.sin(theta) * Math.sin(phi),
      z: radius * Math.cos(theta),
      size: Math.random() * 2.5 + 1.2,
      isGold: Math.random() > 0.4
    });
  }

  function renderMol() {
    ctx.clearRect(0, 0, width, height);

    if (!isDraggingMol) {
      molRotY += molSpeed;
      molRotX += molSpeed * 0.3;
    }

    const cosX = Math.cos(molRotX), sinX = Math.sin(molRotX);
    const cosY = Math.cos(molRotY), sinY = Math.sin(molRotY);
    const centerX = width / 2;
    const centerY = height / 2;

    // Center nucleus glow
    const grad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, radius * 0.6);
    grad.addColorStop(0, 'rgba(197, 160, 89, 0.45)');
    grad.addColorStop(0.5, 'rgba(197, 160, 89, 0.12)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI * 2);
    ctx.fill();

    // Projected points
    const projected = [];

    points.forEach(p => {
      // Rotate Y
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;

      // Rotate X
      const y1 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      // Perspective projection
      const fov = 400;
      const scale = fov / (fov + z2);
      const projX = centerX + x1 * scale;
      const projY = centerY + y1 * scale;
      const alpha = (z2 + radius) / (2 * radius);

      projected.push({
        x: projX,
        y: projY,
        z: z2,
        scale: scale,
        size: p.size * scale,
        alpha: Math.max(0.15, Math.min(1.0, alpha)),
        isGold: p.isGold
      });
    });

    // Sort by depth
    projected.sort((a, b) => a.z - b.z);

    // Draw connecting lines between nearest points
    ctx.strokeStyle = 'rgba(197, 160, 89, 0.14)';
    ctx.lineWidth = 0.8;
    for (let i = 0; i < projected.length; i += 2) {
      for (let j = i + 1; j < Math.min(i + 6, projected.length); j++) {
        const dist = Math.hypot(projected[i].x - projected[j].x, projected[i].y - projected[j].y);
        if (dist < 65) {
          ctx.beginPath();
          ctx.moveTo(projected[i].x, projected[i].y);
          ctx.lineTo(projected[j].x, projected[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    projected.forEach(pt => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
      if (pt.isGold) {
        ctx.fillStyle = `rgba(229, 200, 139, ${pt.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(197, 160, 89, 0.6)';
      } else {
        ctx.fillStyle = `rgba(255, 255, 255, ${pt.alpha * 0.8})`;
        ctx.shadowBlur = 3;
        ctx.shadowColor = '#fff';
      }
      ctx.fill();
    });

    requestAnimationFrame(renderMol);
  }

  renderMol();
}

// --- Dermal Layer Selector ---
function selectDermalLayer(layerIndex, element) {
  document.querySelectorAll('.dermal-depth-item').forEach(el => el.classList.remove('active'));
  element.classList.add('active');

  if (layerIndex === 1) {
    molSpeed = 0.005;
    showToast('Surface Layer (0-15µm): Plant Squalane & High-MW HA form breathable barrier.');
  } else if (layerIndex === 2) {
    molSpeed = 0.01;
    showToast('Mid-Epidermis (15-50µm): Marine Glycoproteins restore desmosome cell junctions.');
  } else if (layerIndex === 3) {
    molSpeed = 0.018;
    showToast('Deep Basal Dermis (50-120µm): 24K Bio-Gold Peptides ignite ATP mitochondrial synthesis.');
  }

  playAcousticChime('step');
}

// Attach to DOM load
document.addEventListener('DOMContentLoaded', () => {
  initMolecularCanvas();
});


// ==========================================================================
// BOTTLE ENGRAVING STUDIO & OLFACTORY SILLAGE RADAR ENGINE
// ==========================================================================

let currentFoilStyle = 'gold';

function updateLiveEngraving(text) {
  const display = document.getElementById('engraving-preview-text');
  if (!display) return;
  display.textContent = text.trim() ? text.trim().toUpperCase() : 'MADAME ROSTOVA';
}

function setFoilStyle(style, btn) {
  currentFoilStyle = style;
  document.querySelectorAll('.foil-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const textEl = document.getElementById('engraving-preview-text');
  if (!textEl) return;

  if (style === 'platinum') {
    textEl.style.color = '#E2E6EF';
    textEl.style.textShadow = '0 1px 3px rgba(255,255,255,0.4)';
  } else if (style === 'rose-gold') {
    textEl.style.color = '#C79B90';
    textEl.style.textShadow = '0 1px 3px rgba(199,155,144,0.4)';
  } else {
    textEl.style.color = '#C5A059';
    textEl.style.textShadow = '0 1px 3px rgba(197,160,89,0.4)';
  }

  showToast(`Engraving foil changed to ${style.toUpperCase()}.`);
  playAcousticChime('step');
}

function addEngravedBottleToCart() {
  const input = document.getElementById('engraving-input-text');
  const customText = input && input.value.trim() ? input.value.trim().toUpperCase() : 'MADAME ROSTOVA';
  const prodSelect = document.getElementById('engraving-product-select');
  const prodId = prodSelect ? prodSelect.value : 'aura-parfum';

  const product = PRODUCTS.find(p => p.id === prodId);
  if (!product) return;

  AppState.addToCart(prodId, 1);
  showToast(`Added custom engraved "${product.name}" [${customText}] to your bag.`);
  playAcousticChime('celebrate');
}

// Olfactory Sillage Data
const OLFACTORY_TIMELINE = {
  hour1: {
    phase: 'Top Notes: Immediate Luminous Radiance',
    timeSpan: 'Hour 0 – Hour 2',
    sillage: '2.5 Meters (High Projection)',
    notes: 'Italian Bergamot, Candied Pink Peppercorn & Angelica Root',
    action: 'Crystalline citrus oils burst upon pulse-point warmth, providing a vibrant, invigorating solar opening.'
  },
  hour4: {
    phase: 'Heart Notes: Floral Velvet Opulence',
    timeSpan: 'Hour 2 – Hour 8',
    sillage: '1.5 Meters (Intimate Radius)',
    notes: 'May Rose Centifolia from Grasse & 15-Year Aged Florentine Orris Butter',
    action: 'The crisp citrus softens into a powdery, narcotic floral cloud that bonds directly with skin lipids.'
  },
  hour16: {
    phase: 'Base Notes: Golden Ambergris Sillage',
    timeSpan: 'Hour 8 – Hour 16+',
    sillage: 'Subtle Dermal Aura',
    notes: 'Natural Grey Ambergris, Virginian Cedarwood & Rare Tonka Bean',
    action: 'Sensual, balsamic warmth lingers as an imperceptible second skin throughout the entire evening and night.'
  }
};

function selectOlfactoryHour(hourKey, btn) {
  document.querySelectorAll('.olfactory-time-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const data = OLFACTORY_TIMELINE[hourKey];
  if (!data) return;

  document.getElementById('olfactory-phase-title').textContent = data.phase;
  document.getElementById('olfactory-timespan').textContent = data.timeSpan;
  document.getElementById('olfactory-sillage-val').textContent = data.sillage;
  document.getElementById('olfactory-notes-val').textContent = data.notes;
  document.getElementById('olfactory-action-desc').textContent = data.action;

  playAcousticChime('step');
}




// ==========================================================================
// WHATSAPP CONCIERGE ORDER & VERIFICATION ENGINE
// ==========================================================================

let MAISON_WHATSAPP_NUMBER = localStorage.getItem('cayrys_owner_wa') || '919876543210';

function updateMaisonWhatsAppNumber(newNumber) {
  if (!newNumber) return;
  const clean = newNumber.replace(/[^\d]/g, '');
  if (clean.length < 8) {
    showToast('Please enter a valid phone number with country code.');
    return;
  }
  MAISON_WHATSAPP_NUMBER = clean;
  localStorage.setItem('cayrys_owner_wa', clean);
  showToast(`Maison WhatsApp Order number updated to: +${clean}`);
}

async function submitOrderToWhatsApp(e) {
  if (e) e.preventDefault();

  if (AppState.cart.length === 0) {
    showToast('Your bag is currently empty.');
    return;
  }

  // Get customer inputs
  const form = document.getElementById('checkout-form');
  const firstName = form ? form.querySelector('input[placeholder="First Name"]').value.trim() : 'Valued';
  const lastName = form ? form.querySelector('input[placeholder="Last Name"]').value.trim() : 'Patron';
  const phone = document.getElementById('checkout-phone-input') ? document.getElementById('checkout-phone-input').value.trim() : 'Client Phone';
  const email = form ? form.querySelector('input[type="email"]').value.trim() : 'client@email.com';
  const address = form ? form.querySelector('input[placeholder="Shipping Address"]').value.trim() : 'Delivery Address';
  const city = form ? form.querySelector('input[placeholder="City"]').value.trim() : 'City';
  const postal = form ? form.querySelector('input[placeholder="Postal Code"]').value.trim() : 'Postal Code';
  const country = form ? form.querySelector('input[placeholder="Country"]').value.trim() : 'Country';
  const notes = document.getElementById('checkout-notes-input') ? document.getElementById('checkout-notes-input').value.trim() : '';

  const subtotalUSD = AppState.getCartSubtotalUSD();
  const discountUSD = AppState.getDiscountAmountUSD();
  const shippingUSD = subtotalUSD >= AppState.freeShippingThresholdUSD ? 0 : 15;
  const finalUSD = Math.max(0, subtotalUSD - discountUSD) + shippingUSD;

  const orderId = `CYR-CH-${Math.floor(100000 + Math.random() * 900000)}`;
  const dateStr = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  // Build itemized text
  const itemsText = AppState.cart.map((item, idx) => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    return `${idx + 1}. *${prod ? prod.name : item.id}*\n   Qty: ${item.qty} | Price: ${formatPrice(prod ? prod.priceUSD * item.qty : 0)}`;
  }).join('\n');

  // Format WhatsApp Message
  const waMessage = 
`👑 *NEW ORDER RESERVATION — MAISON CAYRYS*
──────────────────────────────
📋 *Order Reference:* ${orderId}
📅 *Date:* ${dateStr}

👤 *PATRON DOSSIER:*
• Name: ${firstName} ${lastName}
• WhatsApp: ${phone}
• Email: ${email}
• Delivery: ${address}, ${city} ${postal}, ${country}

🛍️ *ORDERED FORMULATIONS:*
${itemsText}

🎁 *COMPLIMENTARY DELUXE SAMPLE:*
• ${AppState.selectedSample}

💰 *FINANCIAL SUMMARY:*
• Subtotal: ${formatPrice(subtotalUSD)}
${discountUSD > 0 ? `• VIP Privilege (${AppState.appliedPromo ? AppState.appliedPromo.code : 'PROMO'}): -${formatPrice(discountUSD)}\n` : ''}• Courier Delivery: ${shippingUSD === 0 ? 'COMPLIMENTARY White-Glove' : formatPrice(shippingUSD)}
• *TOTAL PAYABLE: ${formatPrice(finalUSD)}*
${notes ? `\n📝 *SPECIAL INSTRUCTIONS / ENGRAVING:*\n"${notes}"\n` : ''}
──────────────────────────────
💬 *CLIENT VERIFICATION REQUEST:*
"Hello Maison CAYRYS Concierge, please verify our batch availability and reply with the secure payment options (Credit Card / Bank Transfer / UPI / Apple Pay). Thank you!"`;

  // Clean target number
  const cleanNumber = MAISON_WHATSAPP_NUMBER.replace(/[^\d]/g, '');
  const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(waMessage)}`;

  // Save order to backend/local state
  try {
    await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer: { firstName, lastName, phone, email, address, city, country },
        items: AppState.cart,
        sample: AppState.selectedSample,
        totalUSD: finalUSD,
        shippingType: 'WhatsApp Concierge Verification'
      })
    });
  } catch (err) {}

  // Open WhatsApp in a new tab/window
  window.open(waUrl, '_blank');

  // Empty cart and update UI
  AppState.cart = [];
  AppState.saveToStorage();
  AppState.updateCartUI();
  closeCheckoutModal();

  // Show verification success modal
  openWhatsAppConfirmationModal(orderId, firstName, formatPrice(finalUSD), cleanNumber);
  playAcousticChime('celebrate');
}

function openWhatsAppConfirmationModal(orderId, name, total, number) {
  const modal = document.getElementById('whatsapp-confirmed-modal');
  const details = document.getElementById('whatsapp-confirmed-content');
  if (!modal || !details) return;

  details.innerHTML = `
    <div style="text-align:center; margin-bottom:1.5rem;">
      <div style="width:60px; height:60px; border-radius:50%; background:#25D366; color:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 12px; box-shadow:0 8px 24px rgba(37,211,102,0.4);">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </div>
      <span class="whatsapp-badge-pill">Dispatched to WhatsApp Concierge</span>
      <h3 style="font-family:var(--font-serif); font-size:1.9rem; margin:8px 0 4px;">Order Dossier Sent</h3>
      <p style="font-size:0.86rem; color:var(--color-muted);">Thank you, ${name}. Your itemized reservation has been transmitted to our private desk.</p>
    </div>

    <div class="whatsapp-step-box">
      <div class="whatsapp-step-row">
        <span class="whatsapp-step-num">1</span>
        <strong>Order Transmitted to WhatsApp (+${number})</strong>
      </div>
      <p style="font-size:0.8rem; color:var(--color-muted); margin-left:30px; margin-bottom:10px;">
        Your order list and reference (${orderId}) are now in the WhatsApp chat.
      </p>

      <div class="whatsapp-step-row">
        <span class="whatsapp-step-num">2</span>
        <strong>Concierge Stock &amp; Batch Verification</strong>
      </div>
      <p style="font-size:0.8rem; color:var(--color-muted); margin-left:30px; margin-bottom:10px;">
        Our Geneva &amp; Grasse cellar master verifies fresh batch bottling.
      </p>

      <div class="whatsapp-step-row">
        <span class="whatsapp-step-num">3</span>
        <strong>Payment Link Dispatched in Chat</strong>
      </div>
      <p style="font-size:0.8rem; color:var(--color-muted); margin-left:30px;">
        You will receive a secure payment link directly in WhatsApp to settle ${total}.
      </p>
    </div>

    <button class="btn-primary" style="width:100%;" onclick="closeWhatsAppConfirmationModal()">
      Return to Maison
    </button>
  `;

  modal.classList.add('open');
}

function closeWhatsAppConfirmationModal() {
  const modal = document.getElementById('whatsapp-confirmed-modal');
  if (modal) modal.classList.remove('open');
}

// Prompt for changing WhatsApp Number
function promptChangeWhatsAppNumber() {
  const current = MAISON_WHATSAPP_NUMBER;
  const input = prompt('Enter the WhatsApp Business Phone Number to receive customer orders (with Country Code, no spaces, e.g. 919876543210):', current);
  if (input !== null && input.trim() !== '') {
    updateMaisonWhatsAppNumber(input);
  }
}


// Direct Quick WhatsApp Chat Opener
function openDirectWhatsAppChat() {
  const cleanNumber = MAISON_WHATSAPP_NUMBER.replace(/[^\d]/g, '');
  const msg = "Bonjour Maison CAYRYS. I am exploring your formulations on the website and would like personalized skincare consultation.";
  window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

let includeGiftPackaging = false;
function toggleGiftPackaging(checked) {
  includeGiftPackaging = checked;
  const slider = document.getElementById('gift-toggle-slider');
  if (slider) {
    slider.style.backgroundColor = checked ? 'var(--color-gold)' : 'var(--color-sandstone)';
  }
  showToast(checked ? 'Complimentary Maison Velvet Gift Box included.' : 'Standard packaging selected.');
  playAcousticChime('step');
}
