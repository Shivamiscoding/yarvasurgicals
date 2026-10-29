export const PRODUCTS = [
  {
    id: 'gauze-swabs',
    name: 'Absorbent Gauze Swabs (Sterilized)',
    shortDesc: '100% pure absorbent cotton swabs, ETO sterilized with sterile barrier packaging.',
    category: 'Sterile Surgical Consumables',
    badge: 'ETO Sterilized • 12 Ply',
    image: '/images/gauze-swabs.jpg',
    certifications: ['ISO 13485:2016', '100% Absorbent Cotton', 'Sterilized EO Method'],
    specs: {
      'Dimensions': '5 cm x 5 cm',
      'Ply Count': '12 Ply',
      'Sterilization Method': 'Ethylene Oxide (ETO) with verification strip',
      'Packaging': 'Sterile Peel-Pouch (4 Pcs/pack) & Master Hospital Box',
      'Material Composition': '100% Bleached Surgical Absorbent Cotton',
      'Lint Level': 'Ultra-low lint with tucked-in non-fray edges',
      'Compliance': 'Hospital OT Grade / ISO 13485:2016',
      'Application': 'Aseptic wound dressing, surgical swabs, fluid absorption',
    },
    highlights: [
      'Pre-sterilized by Ethylene Oxide (ETO) method',
      'Guaranteed sterility unless pouch is damaged or opened',
      '12-ply dense woven structure for maximum exudate retention',
      'Folded edges prevent loose threads and fiber migration',
      'Dual chemical indicator (Brown in Steam / EO indicator)'
    ],
    inStock: true,
    minOrderQty: '50 Packs (Bulk Hospital Rates available)',
  },
  {
    id: 'cotton-wool',
    name: 'Absorbent Cotton Wool I.P.',
    shortDesc: 'Premium surgical grade absorbent cotton roll compliant with Indian Pharmacopoeia standards.',
    category: 'Wound Care & Hospital Dressing',
    badge: 'I.P. Standard • ISO 9001/13485',
    image: '/images/cotton-wool.jpg',
    certifications: ['Indian Pharmacopoeia (I.P.)', 'ISO 9001:2015', 'ISO 13485:2016'],
    specs: {
      'Standard Grade': 'Indian Pharmacopoeia (I.P.)',
      'Net Weight': '400g (500g Gross)',
      'Fiber Quality': 'Long-staple pure natural cotton',
      'Absorbency Rate': 'Rapid fluid uptake (<10 seconds sink time)',
      'Odor & Chemicals': 'Completely odorless, zero optical brighteners',
      'Packaging': 'Protective moisture-barrier roll wrapping',
      'Sterility State': 'Clean medical grade (to be autoclaved/sterilized before OT use)',
      'Application': 'Clinical dressing, orthopaedic padding, fluid containment',
    },
    highlights: [
      'Certified compliant with Indian Pharmacopoeia (I.P.)',
      'Hyper cleanliness and luxurious medical softness',
      'Strong liquid and exudate absorbency without fiber disintegration',
      'Free from foreign matter, impurities, and chemical fragrances',
      'Ideal for hospital wards, labs, dressing rooms & surgical setups'
    ],
    inStock: true,
    minOrderQty: '20 Rolls (Carton pack available)',
  },
  {
    id: 'crepe-bandage',
    name: 'Cotton Crepe Bandage',
    shortDesc: 'High-stretch cotton crepe bandage for firm compression, joint stability, and therapeutic warmth.',
    category: 'Orthopedic & Compression Support',
    badge: '10cm x 4m • Skin Friendly',
    image: '/images/crepe-bandage.jpg',
    certifications: ['Medical Grade Elasticity', 'Dermatologically Safe', 'ISO Certified'],
    specs: {
      'Size (Stretched)': '10 cm x 4 m (Stretched Length)',
      'Weave & Fabric': 'High-stretch breathable cotton-rich crepe weave',
      'Container': 'Rigid transparent jar with moisture-lock green lid',
      'Edges': 'Fast, non-fraying selvedge edges for repeated clinical washing',
      'Compression': 'Sustained firm elasticity without slipping',
      'Skin Safety': 'Hypoallergenic, breathable, latex-free contact surface',
      'Washability': 'Reusable and washable in lukewarm water to restore stretch',
      'Application': 'Sprains, strains, varicose veins, post-fracture stabilization',
    },
    highlights: [
      'Delivers uniform, therapeutic compression and warmth',
      'Packaged in an airtight protective container for dust-free storage',
      'Supports fast relief from muscle sprains and post-orthopedic strain',
      'Maintains consistent elasticity through multiple wash cycles',
      'Skin-friendly texture prevents irritation during extended wear'
    ],
    inStock: true,
    minOrderQty: '30 Units (Dispenser container included)',
  },
];

export const COMPANY_INFO = {
  name: 'Yarva Surgicals',
  tagline: 'Quality • Care • Better Tomorrow',
  address: 'H No 1534 Lawale Phata, Balaji Nagar, Pirangut, Mulshi, Pune, Maharashtra 412115',
  phone: '+91 98220 00000', // Customizable
  email: 'contact@yarvasurgicals.com',
  whatsapp: '919822000000',
  businessHours: 'Mon – Sat: 9:00 AM – 7:30 PM (Emergency OT dispatch 24/7)',
  gst: '27AAAAA0000A1Z5',
  certifications: [
    'ISO 9001:2015 Certified Quality Management',
    'ISO 13485:2016 Medical Devices Standard',
    'Indian Pharmacopoeia (I.P.) Compliant Supplies',
    'Cleanroom / ETO Sterilization Validated',
    'Registered MSME Medical Equipment Supplier'
  ],
  stats: [
    { label: 'Hospitals & Clinics Supplied', value: '180+' },
    { label: 'Sterile & Medical Consumables', value: '100% Compliant' },
    { label: 'Dispatch Speed Across Pune/MH', value: 'Same Day' },
    { label: 'Customer Retention Rate', value: '99.4%' },
  ]
};
