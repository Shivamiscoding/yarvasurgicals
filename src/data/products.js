export const PRODUCTS = [
  {
    id: 'cotton-roll',
    name: 'Absorbent Cotton Roll',
    category: 'Medical Cotton & Wound-Care Supplies',
    image: '/images/cotton-roll.jpg',
    description:
      'Soft, absorbent cotton intended for routine medical, nursing, and personal care applications where absorbent cotton is appropriate.',
    applications: [
      'Cleaning & general medical care',
      'Absorption of fluids during routine procedures',
      'Dressing & wound-care preparation',
      'Use in clinics, hospitals, pharmacies & healthcare facilities',
    ],
    sizes: ['10g', '25g', '50g', '100g', '200g', '400g', '500g'],
    sizesLabel: 'Pack Sizes',
  },
  {
    id: 'gamjee-roll',
    name: 'Gamjee Roll',
    category: 'Absorbent Wound-Dressing Material',
    image: '/images/gamjee-roll.jpg',
    description:
      'A padded dressing material generally made using an absorbent cotton layer with an appropriate covering.',
    applications: [
      'Wound care, dressing & padding',
      'Absorption of wound exudate as appropriate',
      'General dressing applications in hospitals & clinics',
      'Use by healthcare professionals during dressing procedures',
    ],
    sizes: ['10cm × 3m', '15cm × 3m'],
    sizesLabel: 'Available Sizes',
  },
  {
    id: 'cotton-balls',
    name: 'Cotton Balls',
    category: 'Medical Cotton Supplies',
    image: '/images/cotton-balls.jpg',
    description:
      'Cotton formed into small, soft balls suitable for cleaning, application, and routine healthcare tasks.',
    applications: [
      'General cleaning & healthcare applications',
      'Application or removal of suitable topical products',
      'Routine nursing & clinic use',
      'General-purpose use where cotton balls are appropriate',
    ],
    sizes: ['10 pieces', '50 pieces', '100 pieces'],
    sizesLabel: 'Pack Sizes',
  },
  {
    id: 'gauze-swabs',
    name: 'Gauze Swabs',
    category: 'Wound Dressing & Absorbent Gauze Products',
    image: '/images/gauze-swabs-new.jpg',
    description:
      'Folded gauze pieces intended for appropriate wound-care, cleaning and dressing applications.',
    applications: [
      'Cleaning & covering wounds as directed by healthcare professional',
      'Absorbing fluids during dressing procedures',
      'General medical & nursing applications',
      'Use in clinics, hospitals & dressing rooms',
    ],
    sizes: ['5cm × 5cm', '7.5cm × 7.5cm', '10cm × 10cm'],
    sizesLabel: 'Available Sizes',
  },
  {
    id: 'crepe-bandage',
    name: 'Crepe Bandage',
    category: 'Elastic Support & Bandaging Products',
    image: '/images/crepe-bandage-new.jpg',
    description:
      'A stretchable bandage designed to provide support and help secure dressings when used appropriately.',
    applications: [
      'Supporting selected soft-tissue injuries',
      'Securing suitable wound dressings',
      'Providing external support',
      'Routine first-aid & clinical use',
    ],
    sizes: ['6cm × 4m', '8cm × 4m', '10cm × 4m (stretched)'],
    sizesLabel: 'Available Sizes',
  },
  {
    id: 'cotton-bandage-roll',
    name: 'Cotton Bandage Roll',
    category: 'Bandaging & Dressing Accessories',
    image: '/images/cotton-bandage-roll.jpg',
    description:
      'A cotton bandage roll for suitable dressing, wrapping, and bandaging applications.',
    applications: [
      'Securing appropriate wound dressing',
      'General bandaging in clinics & hospitals',
      'First aid & nursing applications',
      'Routine medical supply use',
    ],
    sizes: ['5cm × 3m', '7.5cm × 3m', '10cm × 3m'],
    sizesLabel: 'Available Sizes',
  },
  {
    id: 'examination-gloves',
    name: 'Examination Gloves',
    category: 'Medical Gloves & Protective Supplies',
    image: '/images/nitrile-gloves.jpg',
    variantBadge: 'Latex & Nitrile',
    variants: ['Latex Gloves', 'Nitrile Gloves'],
    variantDetails: [
      { name: 'Nitrile Gloves', image: '/images/nitrile-gloves.jpg' },
      { name: 'Latex Gloves', image: '/images/latex-gloves.jpg' },
    ],
    description:
      'Medical gloves designed for the specific protective purpose indicated by their product classification and labelling.',
    applications: [
      'Appropriate medical procedures',
      'Examination & patient-care activities, depending on type of gloves',
      'Healthcare settings requiring hand protection',
    ],
    sizes: ['100 pieces per box', 'Sizes: S, M, L, XL'],
    sizesLabel: 'Pack Sizes & Details',
  },
  {
    id: 'surgical-masks',
    name: 'Surgical Masks',
    category: 'Medical Face Masks',
    image: '/images/surgical-masks.jpg',
    variantBadge: '3-Ply Masks',
    variants: ['3-Ply Face Masks'],
    description:
      'Disposable face masks designed for the intended protective use stated on their labelling.',
    applications: [
      'Healthcare environments where medical masks are indicated',
      'Clinical & patient-care settings, subject to the product’s intended use',
    ],
    sizes: ['100 pieces per box'],
    sizesLabel: 'Pack Sizes',
  },
  {
    id: 'disposable-caps',
    name: 'Disposable Caps',
    category: 'Disposable Healthcare & Hygiene Supply',
    image: '/images/bouffant-caps.jpg',
    variantBadge: 'Bouffant & Surgeon',
    variants: ['Bouffant Caps', 'Surgeon Caps'],
    variantDetails: [
      { name: 'Bouffant Caps', image: '/images/bouffant-caps.jpg' },
      { name: 'Surgeon Caps', image: '/images/surgical-caps.jpg' },
    ],
    description:
      'Single-use head covers designed to cover hair in settings where the product is suitable for the intended hygiene or contamination-control purpose.',
    applications: [
      'Hospitals & clinics',
      'Laboratories & suitable healthcare work areas',
      'Other environments requiring disposable head covers',
    ],
    sizes: ['100 pieces per box'],
    sizesLabel: 'Pack Sizes',
  },
  {
    id: 'adhesive-bandage-strips',
    name: 'Adhesive Bandage Strips',
    category: 'Minor Wound-Care Products',
    image: '/images/adhesive-bandage-strips.jpg',
    description:
      'Adhesive strips with a wound-contact pad, intended to cover and protect minor wounds.',
    applications: [
      'Covering suitable minor cuts & abrasions',
      'Protecting a wound from everyday contact',
      'First-aid kits, clinics, pharmacies & healthcare facilities',
    ],
    sizes: ['100 pieces per pack'],
    sizesLabel: 'Pack Sizes',
  },
];

export const COMPANY = {
  name: 'Yarva Surgicals',
  tagline: 'Quality • Care • Better Tomorrow',
  address: 'SHOP NO.1. GR. FLR. GATE NO. 145. 2973/1A. BALAJI NAGAR, PIRANGUT. TAL. MULSHI, DIST. PUNE- 412115',
  business: 'Surgical & Wound Care Supplies',
};
