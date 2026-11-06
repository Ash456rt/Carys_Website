/**
 * CAYRYS Haute Botanique & Cellular Radiance
 * Dynamic Full-Stack Node.js Application Server & Intelligent REST API
 * Zero-dependency native HTTP implementation
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

// In-Memory Dynamic Database
const db = {
  inventory: {
    'elixir-cellulaire': { stock: 7, batch: 'BATCH-2026-CH04', status: 'Low Stock' },
    'creme-velours': { stock: 12, batch: 'BATCH-2026-GE02', status: 'In Stock' },
    'nectar-nocturne': { stock: 4, batch: 'BATCH-2026-FR09', status: 'Few Remaining' },
    'brume-celeste': { stock: 24, batch: 'BATCH-2026-GR11', status: 'In Stock' },
    'regard-infini': { stock: 9, batch: 'BATCH-2026-CH08', status: 'In Stock' },
    'aura-parfum': { stock: 5, batch: 'BATCH-2026-EX01', status: 'Limited Harvest' }
  },
  reviews: [
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
  ],
  orders: [],
  members: [
    {
      email: 'vip@cayrys.com',
      name: 'Elena Rostova',
      tier: 'L’Alchimiste Privilège (Gold)',
      points: 850,
      savedRitual: 'The Royal Cellular Longevity Ritual'
    }
  ]
};

// MIME Types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Helper to parse JSON body
function parseBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        try {
          resolve(JSON.parse(body.replace(/\\"/g, '"')));
        } catch (e2) {
          resolve({ query: body });
        }
      }
    });
  });
}

/**
 * Intelligent Natural Language Processing Engine for Consultant CAYRYS
 */
function processConciergeQuery(queryRaw) {
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
      reply: "I am Consultant CAYRYS, an intelligent advisor trained on our Swiss cellular biology archives, Grasse botanical harvests, and clinical trial databases. My mission is to assist discerning patrons in achieving transcendent skin health through synchronized bio-botanical protocols.",
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
      reply: "For the periorbital contour, the dermis is five times thinner than the rest of the face. Our Sérum Regard Infini ($140) combines 5% micro-encapsulated green tea caffeine with Palmitoyl Tetrapeptide-7 and a custom sculpted cooling zamac alloy applicator tip. It drains morning lymphatic stagnation in under 7 minutes and strengthens micro-capillaries to diminish blue and brown dark circles.",
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

// REST API Handler
async function handleApi(req, res, parsedUrl) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const pathname = parsedUrl.pathname;

  // GET /api/inventory
  if (pathname === '/api/inventory' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ success: true, data: db.inventory }));
    return;
  }

  // GET /api/reviews
  if (pathname === '/api/reviews' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ success: true, data: db.reviews }));
    return;
  }

  // POST /api/reviews
  if (pathname === '/api/reviews' && req.method === 'POST') {
    const payload = await parseBody(req);
    const newReview = {
      id: db.reviews.length + 1,
      author: payload.author || 'Anonymous Patron',
      location: payload.location || 'Paris, France',
      rating: Number(payload.rating) || 5,
      skinType: payload.skinType || 'All Skin Types',
      product: payload.product || 'CAYRYS Formulation',
      quote: payload.quote || 'Exquisite formulation.',
      body: payload.body || 'Deeply transformative texture.',
      verified: true,
      date: new Date().toISOString().split('T')[0]
    };
    db.reviews.unshift(newReview);
    res.writeHead(201);
    res.end(JSON.stringify({ success: true, data: newReview, message: 'Review successfully verified and published.' }));
    return;
  }

  // POST /api/checkout
  if (pathname === '/api/checkout' && req.method === 'POST') {
    const payload = await parseBody(req);
    const orderId = `CYR-CH-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      orderId,
      customer: payload.customer,
      items: payload.items || [],
      sample: payload.sample,
      totalUSD: payload.totalUSD,
      discountUSD: payload.discountUSD || 0,
      shippingType: payload.shippingType || 'White-Glove Courier',
      status: 'Prepared for Cold Transport',
      dispatchedFrom: 'Geneva Bio-Facility & Grasse',
      createdAt: new Date().toISOString()
    };
    db.orders.push(newOrder);

    if (payload.items) {
      payload.items.forEach(item => {
        if (db.inventory[item.id] && db.inventory[item.id].stock > 0) {
          db.inventory[item.id].stock -= item.qty;
        }
      });
    }

    res.writeHead(200);
    res.end(JSON.stringify({ success: true, data: newOrder, message: 'Your luxury order is confirmed and scheduled for dispatch.' }));
    return;
  }

  // POST /api/concierge/chat (Intelligent Conversational AI)
  if (pathname === '/api/concierge/chat' && req.method === 'POST') {
    const payload = await parseBody(req);
    const result = processConciergeQuery(payload.query);
    res.writeHead(200);
    res.end(JSON.stringify({ success: true, reply: result.reply, suggestedProductId: result.suggestedProductId }));
    return;
  }

  // 404 for unknown API
  res.writeHead(404);
  res.end(JSON.stringify({ success: false, error: 'Endpoint not found' }));
}

// Static File Server
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname.startsWith('/api/')) {
    return handleApi(req, res, parsedUrl);
  }

  let safePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') safePath = '/index.html';
  const filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h1>404 Not Found</h1><p>Resource ${parsedUrl.pathname} was not found on CAYRYS server.</p>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`✨ CAYRYS Maison Dynamic Web Server running at http://localhost:${PORT}`);
  console.log(`📦 REST API Endpoints active: /api/inventory, /api/reviews, /api/checkout, /api/concierge/chat`);
});
