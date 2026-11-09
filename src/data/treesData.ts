export interface TreeData {
  id: string;
  name: string;
  tamilName: string;
  botanicalName: string;
  category: 'Immunity & Lungs' | 'Ayurvedic & Gut' | 'Cooling & Microclimate' | 'Cardio & Longevity' | 'Skin & Vitality' | 'Stress & Cortisol';
  shortBenefit: string;
  fullBenefits: string[];
  activeCompounds: string[];
  canopyDiameterMeters: number;
  heightMeters: number;
  oxygenRating: 'Exceptional' | 'High' | 'Very High';
  traditionalUse: string;
  healingAttributes: {
    airPurification: number; // 1-10
    stressRelief: number;
    medicinalValue: number;
    microclimateCooling: number;
  };
  colorAccent: string;
}

export const TREES_LIST: TreeData[] = [
  {
    id: 'neem',
    name: 'Neem',
    tamilName: 'வேம்பு (Vembu)',
    botanicalName: 'Azadirachta indica',
    category: 'Immunity & Lungs',
    shortBenefit: 'Nature\'s pharmacy: potent antimicrobial, blood purifier, and night-time oxygen emitter.',
    fullBenefits: [
      'Releases air-cleansing phytoncides that destroy airborne bacteria and viral vectors.',
      'Bark and leaves provide powerful anti-inflammatory and blood sugar regulating glycosides.',
      'Natural insect-repelling canopy creates a mosquito-free living buffer around your home.'
    ],
    activeCompounds: ['Azadirachtin', 'Nimbin', 'Nimbidol', 'Quercetin'],
    canopyDiameterMeters: 14,
    heightMeters: 18,
    oxygenRating: 'Exceptional',
    traditionalUse: 'Revered in Siddha & Ayurveda as "Sarva Roga Nivarini" (curer of all ailments).',
    healingAttributes: { airPurification: 10, stressRelief: 8, medicinalValue: 10, microclimateCooling: 9 },
    colorAccent: '#3B6E47'
  },
  {
    id: 'moringa',
    name: 'Drumstick / Moringa',
    tamilName: 'முருங்கை (Murungai)',
    botanicalName: 'Moringa oleifera',
    category: 'Ayurvedic & Gut',
    shortBenefit: 'Superfood tree rich in 92 nutrients, 46 antioxidants, and bioavailable iron.',
    fullBenefits: [
      'Daily leaf harvest provides superior plant-based amino acids, iron, and potassium.',
      'Extracts proven in clinical trials to lower systemic CRP and cellular inflammation.',
      'Pods promote healthy gut microbiome diversity and optimal digestion.'
    ],
    activeCompounds: ['Moringine', 'Chlorogenic Acid', 'Isothiocyanates', 'Beta-Carotene'],
    canopyDiameterMeters: 6,
    heightMeters: 10,
    oxygenRating: 'High',
    traditionalUse: 'Ancient Tamil dietary staple to enhance cellular vitality and postpartum recovery.',
    healingAttributes: { airPurification: 7, stressRelief: 7, medicinalValue: 10, microclimateCooling: 7 },
    colorAccent: '#507D3E'
  },
  {
    id: 'amla',
    name: 'Indian Gooseberry / Amla',
    tamilName: 'நெல்லி (Nelli)',
    botanicalName: 'Phyllanthus emblica',
    category: 'Immunity & Lungs',
    shortBenefit: 'Ultimate Vitamin C reservoir, anti-aging rasayana, and collagen protectant.',
    fullBenefits: [
      'Possesses 20x the Vitamin C concentration of an orange with stable heat-resistant tannins.',
      'Powerful adaptogen reducing oxidative stress and shielding telomeres from degradation.',
      'Enhances respiratory endurance and boosts pulmonary surfactant production.'
    ],
    activeCompounds: ['Emblicanin A & B', 'Gallic Acid', 'Ellagic Acid', 'Ascorbic Acid'],
    canopyDiameterMeters: 8,
    heightMeters: 12,
    oxygenRating: 'Very High',
    traditionalUse: 'Cornerstone ingredient of Triphala and Chyawanprash for longevity and youthfulness.',
    healingAttributes: { airPurification: 8, stressRelief: 8, medicinalValue: 10, microclimateCooling: 8 },
    colorAccent: '#6C8C3E'
  },
  {
    id: 'peepal',
    name: 'Sacred Fig / Peepal',
    tamilName: 'அரசு (Arasu)',
    botanicalName: 'Ficus religiosa',
    category: 'Cooling & Microclimate',
    shortBenefit: '24-hour oxygen release via Crassulacean Acid Metabolism and profound aura of calm.',
    fullBenefits: [
      'Heart-shaped flutter leaves generate continuous white-noise sound frequencies that lower cortisol.',
      'Continuously emits ozone and negative ions in the late twilight hours.',
      'Massive shade canopy reduces ambient ambient ground temperature by up to 6°C.'
    ],
    activeCompounds: ['Beta-Sitosterol', 'Campesterol', 'Stigmasterol', 'Flavonols'],
    canopyDiameterMeters: 22,
    heightMeters: 25,
    oxygenRating: 'Exceptional',
    traditionalUse: 'Meditation tree under which Gautama Buddha attained enlightenment; calms the nervous system.',
    healingAttributes: { airPurification: 10, stressRelief: 10, medicinalValue: 9, microclimateCooling: 10 },
    colorAccent: '#2F5C3E'
  },
  {
    id: 'banyan',
    name: 'Banyan Tree',
    tamilName: 'ஆல் (Aal)',
    botanicalName: 'Ficus benghalensis',
    category: 'Cooling & Microclimate',
    shortBenefit: 'Monolithic living biosphere, aerial root stability, and natural microclimate shield.',
    fullBenefits: [
      'Creates self-sustaining microclimates hosting over 100 native birds and beneficial insects.',
      'Aerial prop roots filter ground particulate matter and stabilize groundwater percolation.',
      'Bark decoction has proven astringent and hypoglycemic therapeutic properties.'
    ],
    activeCompounds: ['Bengalenoside', 'Flavonoid Glycosides', 'Triterpenes'],
    canopyDiameterMeters: 28,
    heightMeters: 22,
    oxygenRating: 'Exceptional',
    traditionalUse: 'Symbol of eternal longevity and community assembly in traditional South Indian villages.',
    healingAttributes: { airPurification: 10, stressRelief: 10, medicinalValue: 8, microclimateCooling: 10 },
    colorAccent: '#2B4A34'
  },
  {
    id: 'jamun',
    name: 'Java Plum / Jamun',
    tamilName: 'நாவல் (Naaval)',
    botanicalName: 'Syzygium cumini',
    category: 'Ayurvedic & Gut',
    shortBenefit: 'Renowned for glycemic control, pancreas rejuvenation, and antioxidant polyphenols.',
    fullBenefits: [
      'Seeds and fruit contain jamboline that halts the pathological conversion of starch into sugar.',
      'Rich in anthocyanins that protect coronary endothelium and blood vessels.',
      'Deep purple fruits provide natural bioflavonoids for vibrant digestive tract health.'
    ],
    activeCompounds: ['Jamboline', 'Anthocyanins', 'Ellagic Acid', 'Myricetin'],
    canopyDiameterMeters: 12,
    heightMeters: 16,
    oxygenRating: 'Very High',
    traditionalUse: 'Siddha prescription for diabetes management, liver toning, and oral mucosal health.',
    healingAttributes: { airPurification: 8, stressRelief: 8, medicinalValue: 10, microclimateCooling: 9 },
    colorAccent: '#4D3B62'
  },
  {
    id: 'sandalwood',
    name: 'Indian Sandalwood',
    tamilName: 'சந்தனம் (Chandanam)',
    botanicalName: 'Santalum album',
    category: 'Stress & Cortisol',
    shortBenefit: 'Rare heartwood fragrance rich in alpha-santalol, soothing the amygdala and mind.',
    fullBenefits: [
      'Inhaling natural sandalwood aromatics triggers immediate parasympathetic calming.',
      'Potent neuroprotective and dermatological cell regenerator.',
      'Deep roots draw and cycle subsoil trace minerals across the topsoil layer.'
    ],
    activeCompounds: ['Alpha-Santalol', 'Beta-Santalol', 'Santalenes', 'Phenolics'],
    canopyDiameterMeters: 8,
    heightMeters: 12,
    oxygenRating: 'High',
    traditionalUse: 'Ancient ritual cooling paste and aromatherapeutic sleep aid across Indian civilization.',
    healingAttributes: { airPurification: 8, stressRelief: 10, medicinalValue: 10, microclimateCooling: 7 },
    colorAccent: '#9A7B4F'
  },
  {
    id: 'bael',
    name: 'Golden Apple / Bael',
    tamilName: 'வில்வம் (Vilvam)',
    botanicalName: 'Aegle marmelos',
    category: 'Ayurvedic & Gut',
    shortBenefit: 'Supreme digestive healer, prebiotic powerhouse, and sacred respiratory cleaner.',
    fullBenefits: [
      'Rich in mucilage and pectin that repairs leaky gut lining and colitis ulcers.',
      'Leaf volatiles display documented bronchodilator and anti-asthmatic properties.',
      'Anti-microbial against drug-resistant gut pathogens while preserving friendly flora.'
    ],
    activeCompounds: ['Marmelosin', 'Luvangetin', 'Aegeline', 'Psoralen'],
    canopyDiameterMeters: 8,
    heightMeters: 12,
    oxygenRating: 'High',
    traditionalUse: 'Sacred Shiva temple tree used for gut cleansing and summer body heat dissipation.',
    healingAttributes: { airPurification: 9, stressRelief: 9, medicinalValue: 10, microclimateCooling: 8 },
    colorAccent: '#7D8C42'
  },
  {
    id: 'arjun',
    name: 'Arjuna Tree',
    tamilName: 'மருதம் (Marudham)',
    botanicalName: 'Terminalia arjuna',
    category: 'Cardio & Longevity',
    shortBenefit: 'Nature\'s cardiac tonic: strengthens myocardium, arterial elasticity, and circulation.',
    fullBenefits: [
      'Co-enzyme Q10 synergistic glycosides strengthen cardiac muscle contraction force.',
      'Lowers LDL oxidation and reduces atherosclerotic plaque formation.',
      'Fast-growing riverine tree with heavy foliage that buffers dust and noise pollution.'
    ],
    activeCompounds: ['Arjunic Acid', 'Arjunetin', 'Arjunolone', 'Terminic Acid'],
    canopyDiameterMeters: 14,
    heightMeters: 20,
    oxygenRating: 'Exceptional',
    traditionalUse: 'Prescribed by Vagbhata and Charaka as the primary herb for cardiac health and blood pressure.',
    healingAttributes: { airPurification: 9, stressRelief: 8, medicinalValue: 10, microclimateCooling: 9 },
    colorAccent: '#8A5A36'
  },
  {
    id: 'pongamia',
    name: 'Indian Beech / Pongamia',
    tamilName: 'புங்கன் (Pungan)',
    botanicalName: 'Pongamia pinnata',
    category: 'Skin & Vitality',
    shortBenefit: 'Dermatological restorative, nitrogen-fixing canopy, and thermal shield.',
    fullBenefits: [
      'Seeds and oil treat eczema, psoriasis, and deep cutaneous skin fissures.',
      'Fixes atmospheric nitrogen into the soil, regenerating degraded agricultural earth.',
      'Dense lustrous canopy absorbs urban heat and reduces dust particulate matter by 38%.'
    ],
    activeCompounds: ['Karanjin', 'Pongamol', 'Karanjone', 'Ovalitenone'],
    canopyDiameterMeters: 12,
    heightMeters: 15,
    oxygenRating: 'Very High',
    traditionalUse: 'Traditional South Indian avenue tree planted for dense cooling shade and skin remedies.',
    healingAttributes: { airPurification: 9, stressRelief: 8, medicinalValue: 9, microclimateCooling: 10 },
    colorAccent: '#406346'
  },
  {
    id: 'mahua',
    name: 'Butter Tree / Mahua',
    tamilName: 'இலுப்பை (Iluppai)',
    botanicalName: 'Madhuca longifolia',
    category: 'Ayurvedic & Gut',
    shortBenefit: 'Nutrient-dense sweet floral nectar, joint lubricant, and regenerative lipid source.',
    fullBenefits: [
      'Succulent flowers are a rich bioavailable source of natural sugars, calcium, and vitamins.',
      'Seed oil is a potent emollient that lubricates arthritic joints and reduces rheumatism pain.',
      'Deep taproot sustains the water table during harsh summer heatwaves.'
    ],
    activeCompounds: ['Madhucic Acid', 'Saponins', 'Sitosterol', 'Alpha-Amyrin'],
    canopyDiameterMeters: 15,
    heightMeters: 18,
    oxygenRating: 'Very High',
    traditionalUse: 'Revered tribal tree known as the "Tree of Life" for emergency nourishment and bone strength.',
    healingAttributes: { airPurification: 8, stressRelief: 8, medicinalValue: 9, microclimateCooling: 9 },
    colorAccent: '#855938'
  },
  {
    id: 'kadamba',
    name: 'Burflower / Kadamba',
    tamilName: 'கடம்பு (Kadambu)',
    botanicalName: 'Neolamarckia cadamba',
    category: 'Immunity & Lungs',
    shortBenefit: 'Globe-shaped fragrant golden blossoms that purify lung airways and reduce fever.',
    fullBenefits: [
      'Essential oil from spherical blossoms calms bronchial spasms and eases breathing.',
      'Bark extracts exhibit significant analgesic and anti-inflammatory activity.',
      'Rapid leaf biomass generator creating deep rich humus for soil microbiology.'
    ],
    activeCompounds: ['Cadambine', 'Dihydrocadambine', 'Cinchonine', 'Chlorogenic Acid'],
    canopyDiameterMeters: 12,
    heightMeters: 20,
    oxygenRating: 'Very High',
    traditionalUse: 'Associated with Lord Murugan and celestial groves; revered for aromatic floral tranquility.',
    healingAttributes: { airPurification: 9, stressRelief: 9, medicinalValue: 8, microclimateCooling: 9 },
    colorAccent: '#C98B2C'
  },
  {
    id: 'punnai',
    name: 'Alexandrian Laurel / Punnai',
    tamilName: 'புன்னை (Punnai)',
    botanicalName: 'Calophyllum inophyllum',
    category: 'Skin & Vitality',
    shortBenefit: 'Tamanu oil source: unmatched skin cellular regeneration, scar healing, and UV defense.',
    fullBenefits: [
      'Seed oil contains calophyllic acid which accelerates tissue rebuilding and collagen synthesis.',
      'Glossy evergreen leaves resist high maritime winds and intense solar irradiance.',
      'Clusters of fragrant white flowers act as major pollinators magnets for native bees.'
    ],
    activeCompounds: ['Calophyllic Acid', 'Inophyllum', 'Calanolides', 'Coumarins'],
    canopyDiameterMeters: 11,
    heightMeters: 14,
    oxygenRating: 'High',
    traditionalUse: 'Coastal sacred tree used in ancient maritime Tamil medicine for neuralgic & skin healing.',
    healingAttributes: { airPurification: 8, stressRelief: 8, medicinalValue: 10, microclimateCooling: 9 },
    colorAccent: '#335E44'
  },
  {
    id: 'magizham',
    name: 'Spanish Cherry / Magizham',
    tamilName: 'மகிழம் (Magizham)',
    botanicalName: 'Mimusops elengi',
    category: 'Immunity & Lungs',
    shortBenefit: 'Exquisite star-shaped blossoms whose fragrance lingers for days; gum & enamel tonic.',
    fullBenefits: [
      'Inhaling blossom aroma relieves migraine tension, nasal congestion, and anxiety.',
      'Bark and unripe fruit powder tightens loose teeth and cures chronic gingivitis.',
      'Dense architectural evergreen crown provides year-round acoustic buffering.'
    ],
    activeCompounds: ['Lupeol', 'Taraxerol', 'Ursolic Acid', 'Spinasterol'],
    canopyDiameterMeters: 10,
    heightMeters: 15,
    oxygenRating: 'High',
    traditionalUse: 'Planted near heritage Tamil courtyards for natural air freshening and dental preservation.',
    healingAttributes: { airPurification: 9, stressRelief: 10, medicinalValue: 9, microclimateCooling: 8 },
    colorAccent: '#607954'
  },
  {
    id: 'red_sanders',
    name: 'Red Sandalwood',
    tamilName: 'செந்தனம் / ரத்த சந்தனம்',
    botanicalName: 'Pterocarpus santalinus',
    category: 'Cardio & Longevity',
    shortBenefit: 'Rare endemic heartwood with deep red santalin: cellular detox and vascular integrity.',
    fullBenefits: [
      'Wood decoction balances Pitta humor, reduces chronic inflammatory redness, and cools blood.',
      'Helps maintain microcapillary integrity and prevents chronic venous insufficiency.',
      'Endemic treasure with exceptional timber resilience and ecological niche preservation.'
    ],
    activeCompounds: ['Santalin A & B', 'Pterostilbene', 'Isoflavones', 'Savinin'],
    canopyDiameterMeters: 7,
    heightMeters: 11,
    oxygenRating: 'High',
    traditionalUse: 'Exclusive eastern ghats medicinal timber valued for blood purification and metabolic health.',
    healingAttributes: { airPurification: 7, stressRelief: 8, medicinalValue: 10, microclimateCooling: 7 },
    colorAccent: '#9B3324'
  },
  {
    id: 'ebony',
    name: 'Black Ebony / Karungali',
    tamilName: 'கருங்காலி (Karungali)',
    botanicalName: 'Diospyros ebenum',
    category: 'Cardio & Longevity',
    shortBenefit: 'Dense antimicrobial jet-black heartwood, radiation shield, and electromagnetic balance.',
    fullBenefits: [
      'Heartwood compounds possess natural antifungal, antibacterial, and metal-chelating actions.',
      'Traditional water soaking absorbs and precipitates water-borne mineral impurities.',
      'Dense structural wood creates an aura of energetic grounding and peace in homesteads.'
    ],
    activeCompounds: ['Diospyrin', 'Ebenone', 'Plumbagin', 'Betulin'],
    canopyDiameterMeters: 8,
    heightMeters: 13,
    oxygenRating: 'High',
    traditionalUse: 'Ancient Tamil ritual timber used for temples, staff conduits, and high-density bio-grounding.',
    healingAttributes: { airPurification: 8, stressRelief: 10, medicinalValue: 9, microclimateCooling: 7 },
    colorAccent: '#23201D'
  },
  {
    id: 'mango',
    name: 'Country Mango',
    tamilName: 'மாமரம் (Maa)',
    botanicalName: 'Mangifera indica',
    category: 'Ayurvedic & Gut',
    shortBenefit: 'Abundant polyphenols, mangiferin for neuro-health, and cooling summer fruit shade.',
    fullBenefits: [
      'Tender leaves contain mangiferin which supports pancreatic beta-cell insulin sensitivity.',
      'Broad leaves transpire massive moisture volumes, cooling microclimates by 4°C.',
      'Rich fruit provides carotenoids, enzymes for protein digestion, and immune vitality.'
    ],
    activeCompounds: ['Mangiferin', 'Quercetin', 'Kaempferol', 'Gallic Acid'],
    canopyDiameterMeters: 16,
    heightMeters: 18,
    oxygenRating: 'Exceptional',
    traditionalUse: 'One of the "Mukkani" (three royal fruits of Tamil civilization); leaves purify home entrance air.',
    healingAttributes: { airPurification: 9, stressRelief: 8, medicinalValue: 9, microclimateCooling: 10 },
    colorAccent: '#537538'
  },
  {
    id: 'tamarind',
    name: 'Tamarind Tree',
    tamilName: 'புளியமரம் (Puliyamaram)',
    botanicalName: 'Tamarindus indica',
    category: 'Ayurvedic & Gut',
    shortBenefit: 'Tartaric acid antioxidant powerhouse, fluoride detoxifier, and expansive shade shield.',
    fullBenefits: [
      'Pulp consumption binds to and safely eliminates toxic fluoride accumulations from bones.',
      'Fine pinnate foliage breaks monsoon wind shear and creates cool dappled ground light.',
      'Bark and leaves provide potent astringent washes for sprains and swellings.'
    ],
    activeCompounds: ['Tartaric Acid', 'Lupeol', 'Hordenine', 'Limonene'],
    canopyDiameterMeters: 18,
    heightMeters: 24,
    oxygenRating: 'Exceptional',
    traditionalUse: 'Culinary and therapeutic backbone of South Indian Rasam; historic roadside shade giant.',
    healingAttributes: { airPurification: 9, stressRelief: 8, medicinalValue: 9, microclimateCooling: 10 },
    colorAccent: '#6B7A38'
  },
  {
    id: 'guava',
    name: 'Country Guava',
    tamilName: 'கொய்யா (Koyya)',
    botanicalName: 'Psidium guajava',
    category: 'Ayurvedic & Gut',
    shortBenefit: 'Pectin-rich fruit and polyphenol leaves for blood sugar stabilization and oral health.',
    fullBenefits: [
      'Guava leaf tea significantly inhibits alpha-glucosidase, regulating post-meal blood glucose.',
      'Fruit contains 4x more Vitamin C than citrus with exceptionally low glycemic load.',
      'Natural tannins strengthen oral gums and inhibit dental plaque biofilm.'
    ],
    activeCompounds: ['Quercetin', 'Guaijaverin', 'Catechin', 'Lycopene'],
    canopyDiameterMeters: 6,
    heightMeters: 8,
    oxygenRating: 'High',
    traditionalUse: 'Daily home garden remedy for stomach upsets, diarrhea, and natural toothache relief.',
    healingAttributes: { airPurification: 7, stressRelief: 7, medicinalValue: 10, microclimateCooling: 7 },
    colorAccent: '#6F9142'
  },
  {
    id: 'custard_apple',
    name: 'Custard Apple / Seetha',
    tamilName: 'சீத்தா (Seetha)',
    botanicalName: 'Annona squamosa',
    category: 'Immunity & Lungs',
    shortBenefit: 'Creamy antioxidant fruit, bioavailable magnesium for heart rhythms, and insecticidal leaves.',
    fullBenefits: [
      'Fruit pulp is exceptionally rich in magnesium, potassium, and Vitamin B6 for nervous equilibrium.',
      'Leaves make a completely organic bio-pesticide, protecting nearby vegetable beds.',
      'Hardy drought-tolerant root system thrives in dry red loam soils.'
    ],
    activeCompounds: ['Anonaine', 'Squamocin', 'Rutin', 'Hyperoside'],
    canopyDiameterMeters: 5,
    heightMeters: 6,
    oxygenRating: 'High',
    traditionalUse: 'Revered tonic for rebuilding stamina and muscular energy following prolonged illness.',
    healingAttributes: { airPurification: 7, stressRelief: 8, medicinalValue: 8, microclimateCooling: 7 },
    colorAccent: '#5A7D45'
  },
  {
    id: 'sapota',
    name: 'Chiku / Sapota',
    tamilName: 'சப்போட்டா (Sapota)',
    botanicalName: 'Manilkara zapota',
    category: 'Ayurvedic & Gut',
    shortBenefit: 'Fructose energy booster, dietary fiber for digestive motility, and respiratory soother.',
    fullBenefits: [
      'Abundant tannins provide natural anti-inflammatory and antiviral protection in the gut.',
      'Latex and leaves contain natural saponins that ease spasmodic chest coughs.',
      'Dense glossy evergreen crown provides steady shade through Trichy summer heat.'
    ],
    activeCompounds: ['Lupeol Acetate', 'Myricetin', 'Chlorogenic Acid', 'Gallic Acid'],
    canopyDiameterMeters: 8,
    heightMeters: 10,
    oxygenRating: 'High',
    traditionalUse: 'Energy booster for agricultural workers and nursing mothers in semi-arid zones.',
    healingAttributes: { airPurification: 8, stressRelief: 7, medicinalValue: 8, microclimateCooling: 8 },
    colorAccent: '#7B5E39'
  },
  {
    id: 'wood_apple',
    name: 'Wood Apple / Elephant Apple',
    tamilName: 'விளாம்பழம் (Vilampazham)',
    botanicalName: 'Limonia acidissima',
    category: 'Ayurvedic & Gut',
    shortBenefit: 'Hard-shelled miracle fruit: liver detox, chronic constipation relief, and kidney cooling.',
    fullBenefits: [
      'Pulp has unique astringent bitters that detoxify congested liver and gallbladder bile pathways.',
      'Natural pectin and beta-carotene promote healthy mucosal lining across the colon.',
      'Leaves emit aromatic essential oils that deter flying pests naturally.'
    ],
    activeCompounds: ['Bergapten', 'Marmesin', 'Stigmasterol', 'Luvangetin'],
    canopyDiameterMeters: 8,
    heightMeters: 12,
    oxygenRating: 'High',
    traditionalUse: 'Traditional Ganesh Chaturthi autumn offering and unmatched summer coolant for bile disorders.',
    healingAttributes: { airPurification: 8, stressRelief: 8, medicinalValue: 10, microclimateCooling: 8 },
    colorAccent: '#6E7348'
  },
  {
    id: 'atti',
    name: 'Country Fig / Atti',
    tamilName: 'அத்தி (Atti)',
    botanicalName: 'Ficus racemosa',
    category: 'Ayurvedic & Gut',
    shortBenefit: 'Ancient fertility and endocrine harmonizer, calcium reservoir, and ground moisture holder.',
    fullBenefits: [
      'Fruit clusters growing on the trunk are packed with calcium, iron, and prebiotic fructans.',
      'Bark decoction regulates heavy menstrual bleeding and endocrine imbalances.',
      'Root sap contains pure filtered groundwater traditionally tapped in times of severe drought.'
    ],
    activeCompounds: ['Gluanol Acetate', 'Tiglic Acid', 'Leucocyanidin', 'Taraxasterol'],
    canopyDiameterMeters: 12,
    heightMeters: 16,
    oxygenRating: 'Very High',
    traditionalUse: 'One of the four sacred "Nalpaamaram" trees in Ayurveda whose bark is used in health baths.',
    healingAttributes: { airPurification: 9, stressRelief: 9, medicinalValue: 10, microclimateCooling: 9 },
    colorAccent: '#486842'
  },
  {
    id: 'marudham_white',
    name: 'White Murdah / Marudham',
    tamilName: 'வெள்ளமருது (Vella Marudhu)',
    botanicalName: 'Terminalia paniculata',
    category: 'Cardio & Longevity',
    shortBenefit: 'Majestic smooth bark, vascular endurance, and powerful subsoil water channeling.',
    fullBenefits: [
      'Smooth white bark reflects excess solar heat, keeping trunk core temperature remarkably low.',
      'Active tannins support microvascular strength and wound tissue granulation.',
      'Massive root system channels monsoon downpours directly into subterranean aquifers.'
    ],
    activeCompounds: ['Paniculatin', 'Tannic Acid', 'Arjunic Acid', 'Beta-Sitosterol'],
    canopyDiameterMeters: 16,
    heightMeters: 22,
    oxygenRating: 'Exceptional',
    traditionalUse: 'Classic riverine eco-buffer tree protecting stream banks and human cardiovascular vitality.',
    healingAttributes: { airPurification: 9, stressRelief: 8, medicinalValue: 9, microclimateCooling: 10 },
    colorAccent: '#5F7959'
  },
  {
    id: 'teak',
    name: 'Country Teak',
    tamilName: 'தேக்கு (Thekku)',
    botanicalName: 'Tectona grandis',
    category: 'Skin & Vitality',
    shortBenefit: 'Immense broad leaves catching rain runoff, silica-rich bark, and long-term soil carbon sink.',
    fullBenefits: [
      'Plate-sized leaves catch falling raindrops, dampening kinetic impact and preventing soil erosion.',
      'Bark extracts demonstrate marked anti-diabetic and diuretic biological action.',
      'Locks tremendous quantities of carbon into its dense, termite-resistant cellular grain.'
    ],
    activeCompounds: ['Tectolactone', 'Lapachol', 'Betulinic Acid', 'Squalene'],
    canopyDiameterMeters: 12,
    heightMeters: 24,
    oxygenRating: 'Very High',
    traditionalUse: 'The undisputed king of timber; leaves were used for traditional natural food wrapping.',
    healingAttributes: { airPurification: 9, stressRelief: 7, medicinalValue: 8, microclimateCooling: 9 },
    colorAccent: '#7C674A'
  },
  {
    id: 'badam',
    name: 'Country Almond / Malabar Badam',
    tamilName: 'நாட்டு பாதாம் (Naatu Badam)',
    botanicalName: 'Terminalia catappa',
    category: 'Immunity & Lungs',
    shortBenefit: 'Tiered horizontal pagoda canopy, red flavonoid autumn leaves, and antibacterial tannins.',
    fullBenefits: [
      'Distinctive horizontal tiered branching provides geometric shade and visual fractal calm.',
      'Fallen dried leaves release natural anti-fungal humic compounds, purifying garden water ponds.',
      'Nut kernel inside the fibrous husk is packed with healthy mono-unsaturated fatty acids.'
    ],
    activeCompounds: ['Punicalagin', 'Terflavins', 'Chebulagic Acid', 'Corilagin'],
    canopyDiameterMeters: 14,
    heightMeters: 18,
    oxygenRating: 'Very High',
    traditionalUse: 'Planted near coastal and agricultural homesteads for expansive layered horizontal shade.',
    healingAttributes: { airPurification: 9, stressRelief: 9, medicinalValue: 9, microclimateCooling: 9 },
    colorAccent: '#934833'
  },
  {
    id: 'shenbagam',
    name: 'Golden Champa / Shenbagam',
    tamilName: 'செண்பகம் (Shenbagam)',
    botanicalName: 'Magnolia champaca',
    category: 'Stress & Cortisol',
    shortBenefit: 'World-renowned celestial perfume blossoms; eases vertigo, anxiety, and visual fatigue.',
    fullBenefits: [
      'Intoxicating linalool-rich floral scent acts on GABA receptors, inducing tranquil meditative rest.',
      'Flower decoctions are used in Siddha medicine to treat dyspepsia, nausea, and vertigo.',
      'Glossy foliage filters urban smog and enhances surrounding atmospheric moisture.'
    ],
    activeCompounds: ['Linalool', 'Champacol', 'Isoeugenol', 'Parthenolide'],
    canopyDiameterMeters: 9,
    heightMeters: 16,
    oxygenRating: 'High',
    traditionalUse: 'Sacred blossom revered in Tamil classical poetry; worn in hair for cooling headache relief.',
    healingAttributes: { airPurification: 9, stressRelief: 10, medicinalValue: 9, microclimateCooling: 8 },
    colorAccent: '#D29C38'
  },
  {
    id: 'manjal_kadamba',
    name: 'Golden Kadamba',
    tamilName: 'மஞ்சள் கடம்பு (Manjal Kadambu)',
    botanicalName: 'Haldina cordifolia',
    category: 'Skin & Vitality',
    shortBenefit: 'Heart-shaped golden foliage, hepatoprotective bark, and microclimate soil stabilization.',
    fullBenefits: [
      'Bark decoction has proven hepatoprotective benefits, shielding liver cells from toxic insults.',
      'Distinct cordate (heart-shaped) leaves capture dust particles efficiently.',
      'Fibrous deep roots anchor red sandy-loam soils and maintain microbial fungal webs.'
    ],
    activeCompounds: ['Cordifoline', 'Adifoline', 'Haldinine', 'Flavones'],
    canopyDiameterMeters: 11,
    heightMeters: 18,
    oxygenRating: 'High',
    traditionalUse: 'Historical timber and healing tree of the dry deciduous Kaveri hill tracks.',
    healingAttributes: { airPurification: 8, stressRelief: 8, medicinalValue: 9, microclimateCooling: 9 },
    colorAccent: '#B28830'
  },
  {
    id: 'pungai_river',
    name: 'River Pungai',
    tamilName: 'ஆற்றுப் புங்கன் (Aatru Pungan)',
    botanicalName: 'Derris indica',
    category: 'Cooling & Microclimate',
    shortBenefit: 'Nitrogen-generating riverbank pioneer with insecticidal blooms and cool humid aura.',
    fullBenefits: [
      'Dense nitrogen-fixing nodule clusters enrich surrounding fruit tree root zones without chemical fertilizers.',
      'Continuous bloom drops carpet the ground, accelerating natural vermicomposting.',
      'Thick shiny foliage forms a physical sound barrier, reducing road noise by 6-8 dB.'
    ],
    activeCompounds: ['Pongapin', 'Glabrin', 'Pinnatin', 'Karanjic Acid'],
    canopyDiameterMeters: 13,
    heightMeters: 15,
    oxygenRating: 'Very High',
    traditionalUse: 'Key component of traditional Miyawaki dense forest borders in Tamil Nadu.',
    healingAttributes: { airPurification: 9, stressRelief: 8, medicinalValue: 8, microclimateCooling: 10 },
    colorAccent: '#3F6244'
  },
  {
    id: 'vengai',
    name: 'Malabar Kino / Vengai',
    tamilName: 'வேங்கை (Vengai)',
    botanicalName: 'Pterocarpus marsupium',
    category: 'Ayurvedic & Gut',
    shortBenefit: 'Red resin known as "Kino": clinical insulin mimetic, beta-cell regeneration herb.',
    fullBenefits: [
      'Epicatechin compounds from wood regenerate functional insulin-producing beta cells in the pancreas.',
      'Traditional wooden tumblers turn drinking water slightly blue-red with bioactive polyphenols.',
      'Majestic canopy provides sanctuary to predatory birds that control agricultural rodents.'
    ],
    activeCompounds: ['Epicatechin', 'Marsupsin', 'Pterosupin', 'Liquiritigenin'],
    canopyDiameterMeters: 14,
    heightMeters: 22,
    oxygenRating: 'Exceptional',
    traditionalUse: 'The famed "Vijaysar" wood tumbler prescribed across Indian wellness for diabetes reversal.',
    healingAttributes: { airPurification: 9, stressRelief: 8, medicinalValue: 10, microclimateCooling: 9 },
    colorAccent: '#8B4228'
  },
  {
    id: 'marikozhundu_tree',
    name: 'Indian Cork Tree / Maramalli',
    tamilName: 'மரமல்லி (Maramalli)',
    botanicalName: 'Millingtonia hortensis',
    category: 'Stress & Cortisol',
    shortBenefit: 'Graceful tall spire with snow-white trumpet flowers emitting nocturnal jasmine-mint aroma.',
    fullBenefits: [
      'Nocturnal fragrance relieves nasal blockage, sinus congestion, and mental overstimulation.',
      'Cork bark has natural insulating properties and traditional antipyretic properties.',
      'Vertical columnar habit creates dramatic architectural lines without taking horizontal plot room.'
    ],
    activeCompounds: ['Hortensin', 'Scutellarein', 'Hispidulin', 'Rutinoside'],
    canopyDiameterMeters: 6,
    heightMeters: 25,
    oxygenRating: 'Very High',
    traditionalUse: 'Tamil courtyard tree celebrated for cool night breezes and fragrant flower garlands.',
    healingAttributes: { airPurification: 9, stressRelief: 10, medicinalValue: 8, microclimateCooling: 8 },
    colorAccent: '#4D6B52'
  },
  {
    id: 'kodukkapuli',
    name: 'Manila Tamarind / Kodukkapuli',
    tamilName: 'கொடுக்காப்புளி (Kodukkapuli)',
    botanicalName: 'Pithecellobium dulce',
    category: 'Ayurvedic & Gut',
    shortBenefit: 'Sweet spiral pods loaded with Vitamin C, digestive enzymes, and protective thorny boundary.',
    fullBenefits: [
      'Pulp contains active polyphenols that soothe peptic ulcers and reduce intestinal gas.',
      'Natural thorny growth forms an impassable living bio-fence protecting plots from cattle.',
      'Produces abundant biomass in arid conditions with minimal irrigation requirement.'
    ],
    activeCompounds: ['Dulcitol', 'Kaempferol Glycosides', 'Triterpenes', 'Luteolin'],
    canopyDiameterMeters: 10,
    heightMeters: 14,
    oxygenRating: 'High',
    traditionalUse: 'Beloved countryside snack of rural Tamil Nadu; natural living fence with edible yield.',
    healingAttributes: { airPurification: 7, stressRelief: 7, medicinalValue: 8, microclimateCooling: 8 },
    colorAccent: '#647D3B'
  },
  {
    id: 'vaagai',
    name: 'Siris Tree / Vaagai',
    tamilName: 'வாகை (Vaagai)',
    botanicalName: 'Albizia lebbeck',
    category: 'Immunity & Lungs',
    shortBenefit: 'Fluffy fragrant cream blossoms; ancient anti-allergic herb that stabilizes mast cells.',
    fullBenefits: [
      'Active saponins inhibit histamine release, offering relief from allergic rhinitis and asthma.',
      'Extensive nitrogen-fixing root nodes transform subsoil nutrients for companion plants.',
      'Pods rustling in the breeze earned it the name "Woman\'s Tongue", generating rhythmic ambient sound.'
    ],
    activeCompounds: ['Albizziahexoside', 'Budmunchiamine', 'Lebbekanin', 'Melacacidin'],
    canopyDiameterMeters: 15,
    heightMeters: 18,
    oxygenRating: 'Exceptional',
    traditionalUse: 'Ancient Tamil symbol of victory in Sangam literature; royal garlands were made of Vaagai flowers.',
    healingAttributes: { airPurification: 9, stressRelief: 8, medicinalValue: 9, microclimateCooling: 9 },
    colorAccent: '#496B40'
  },
  {
    id: 'vilvam_sacred',
    name: 'Temple Vilvam',
    tamilName: 'மகா வில்வம் (Maha Vilvam)',
    botanicalName: 'Aegle marmelos var. trifolia',
    category: 'Immunity & Lungs',
    shortBenefit: 'Tri-foliate sacred leaves releasing beta-caryophyllene; antimicrobial atmospheric bubble.',
    fullBenefits: [
      'Continuous release of monoterpenes and sesquiterpenes purifies air in a 50-meter radius.',
      'Chewing raw tender leaves cleanses the lymphatic system and balances Pitta dosha.',
      'Fruit acts as a biological shield against summer dehydration and sunstroke.'
    ],
    activeCompounds: ['Beta-Caryophyllene', 'Cineole', 'Marmelide', 'Limonene'],
    canopyDiameterMeters: 7,
    heightMeters: 11,
    oxygenRating: 'High',
    traditionalUse: 'Considered sacred in Hinduism; trifoliate leaf represents Shiva\'s trident and the three Gunas.',
    healingAttributes: { airPurification: 10, stressRelief: 10, medicinalValue: 10, microclimateCooling: 8 },
    colorAccent: '#607936'
  },
  {
    id: 'vetiver_bamboo',
    name: 'Sacred Bamboo & Vetiver Buffer',
    tamilName: 'மூங்கில் & வெட்டிவேர் (Moongil & Vettiver)',
    botanicalName: 'Bambusa bambos & Chrysopogon zizanioides',
    category: 'Cooling & Microclimate',
    shortBenefit: 'Fastest oxygen generator, acoustic vibration filter, and groundwater recharge master.',
    fullBenefits: [
      'Bamboo grove releases 35% more oxygen than equivalent hardwood trees and sequesters massive carbon.',
      'Vetiver border roots penetrate 3 meters vertically, purifying runoff water and eliminating heavy metals.',
      'Bamboo culms rustling in wind produce high-frequency binaural acoustic waves that induce alpha brainwaves.'
    ],
    activeCompounds: ['Silica (Tabasheer)', 'Khusimol', 'Vetivone', 'Beta-Vetivene'],
    canopyDiameterMeters: 10,
    heightMeters: 20,
    oxygenRating: 'Exceptional',
    traditionalUse: 'Used as the living green boundary wall for the 10,000 SQFT sanctuary plots to ensure total privacy.',
    healingAttributes: { airPurification: 10, stressRelief: 10, medicinalValue: 9, microclimateCooling: 10 },
    colorAccent: '#38633F'
  }
];

export interface SiteInfo {
  id: 'archampatti' | 'panjappur';
  name: string;
  location: string;
  status: 'Completed & Established' | 'In Progress (2024-2029)';
  phase: string;
  plotSizeSqFt: number;
  availablePlots: number;
  totalPlots: number;
  plantedSince: number;
  maturationTarget: number;
  image: string;
  droneHighlights: string[];
  description: string;
  coordinates: string;
  soilType: string;
  groundwaterDepthFt: number;
}

export const INITIAL_SITES: SiteInfo[] = [
  {
    id: 'archampatti',
    name: 'Archampatti Forest Sanctuary',
    location: 'Archampatti, Trichy, Tamil Nadu',
    status: 'Completed & Established',
    phase: 'Phase 1 - Canopy Established',
    plotSizeSqFt: 10000,
    availablePlots: 3,
    totalPlots: 12,
    plantedSince: 2022,
    maturationTarget: 2029,
    image: '/assets/aistudio/DJI_0015_2c5df95e.JPG',
    droneHighlights: [
      'Lush red loam pathways flanked by maturing multi-tiered tree canopies',
      'Perimeter coconut tree buffer and natural living fences',
      'Dedicated central access road built with permeable natural gravel',
      'Zero chemical fertilizers: 100% organic vermicompost and indigenous bio-inputs'
    ],
    description: 'Our flagship proof-of-concept sanctuary. Begun in 2022, the multi-tiered agroforestry canopy is now deeply rooted. Red soil pathways meander through 35 healing tree varieties, creating shaded microclimates ready for nature-harmonized eco-homes.',
    coordinates: '10.7412° N, 78.6124° E',
    soilType: 'High-mineral Red Sandy Loam (Kaveri basin)',
    groundwaterDepthFt: 65
  },
  {
    id: 'panjappur',
    name: 'Panjappur Forest Sanctuary',
    location: 'Panjappur, Trichy, Tamil Nadu',
    status: 'In Progress (2024-2029)',
    phase: 'Phase 2 - Rapid Growth & Homestead Integration',
    plotSizeSqFt: 10000,
    availablePlots: 8,
    totalPlots: 16,
    plantedSince: 2024,
    maturationTarget: 2029,
    image: '/assets/aistudio/DJI_20260609065857_0218_D_WEDDING_450df254.JPG',
    droneHighlights: [
      'Surrounded by tranquil green paddy fields and historic Kaveri irrigation channels',
      'Long central avenue flanked by thousands of young indigenous medicinal saplings',
      'Close proximity to Trichy\'s newest infrastructure while preserving absolute rural silence',
      'Designed for off-grid solar-powered sustainable homesteads nestled in dense groves'
    ],
    description: 'Strategically located in the green belt of Panjappur, this development brings the Doctor\'s preventative wellness forest philosophy into a larger ecosystem. Planted in systematic companion layers from 2024, it is on a dedicated 5-year journey to mature self-sustaining canopy by 2029.',
    coordinates: '10.7725° N, 78.6841° E',
    soilType: 'Alluvial Kaveri Clay-Loam (High Moisture Retention)',
    groundwaterDepthFt: 45
  }
];

export interface SiteAdminSettings {
  archampattiAvailablePlots: number;
  panjappurAvailablePlots: number;
  contactPhone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  consultationFee: string;
  announcementText: string;
  doctorQuote: string;
}

export const DEFAULT_ADMIN_SETTINGS: SiteAdminSettings = {
  archampattiAvailablePlots: 3,
  panjappurAvailablePlots: 8,
  contactPhone: '+91 98424 26868',
  whatsappNumber: '919842426868',
  whatsappMessage: 'Hello Tiny Forest, I would like to schedule a private sanctuary walk and know more about the ~10,000 SQFT plots at Trichy.',
  consultationFee: 'Complimentary Doctor-Led Consultation',
  announcementText: 'Archampatti Phase 1 has only 3 remaining ~10,000 SQFT plots. Panjappur Phase 2 booking open for 2026 planting season.',
  doctorQuote: 'Modern medicine treats disease after it takes root. A living forest sanctuary prevents disease by restoring the air, water, circadian light, and microbiome our biology was born to flourish in.'
};
