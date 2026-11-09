import React, { useState, useMemo } from 'react';
import { TreeData, TREES_LIST } from '../data/treesData';
import { filterTrees } from '../utils/forestCalculators';
import {
  Sparkles,
  Search,
  ChevronLeft,
  ChevronRight,
  Shield,
  Heart,
  Wind,
  Thermometer,
  X,
  ExternalLink,
  Info,
  CheckCircle2
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Immunity & Lungs',
  'Ayurvedic & Gut',
  'Cooling & Microclimate',
  'Cardio & Longevity',
  'Skin & Vitality',
  'Stress & Cortisol'
];

export const TreeCarousel3D: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [inspectingTree, setInspectingTree] = useState<TreeData | null>(null);

  const filteredTrees = useMemo(() => {
    return filterTrees(TREES_LIST, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  // Handle circular index wrapping
  const count = filteredTrees.length;
  const safeIndex = count === 0 ? 0 : Math.min(selectedIndex, count - 1);
  const currentTree = filteredTrees[safeIndex];

  const handleNext = () => {
    if (count <= 1) return;
    setSelectedIndex((prev) => (prev + 1) % count);
  };

  const handlePrev = () => {
    if (count <= 1) return;
    setSelectedIndex((prev) => (prev - 1 + count) % count);
  };

  // Generate a 5-item window for the 3D cylindrical / carousel perspective
  const visibleCards = useMemo(() => {
    if (count === 0) return [];
    const offsets = [-2, -1, 0, 1, 2];
    return offsets.map((offset) => {
      const idx = (safeIndex + offset + count * 10) % count;
      return {
        tree: filteredTrees[idx],
        offset,
        index: idx
      };
    });
  }, [filteredTrees, safeIndex, count]);

  return (
    <section id="trees" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D6] text-[#2F4533] text-xs font-semibold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
          <span>The 35 Living Healers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#19271D] leading-tight mb-4">
          Trees That Safeguard Human Biology
        </h2>
        <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
          Every single tree in our ~10,000 SQFT sanctuary plots was intentionally curated by our founder doctor. 
          They release protective phytoncides, naturally stabilize blood pressure, purify respiration, and nourish cellular longevity—without chemical intervention.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#EBE4D8] rounded-2xl w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1C3322] text-white shadow-sm'
                  : 'text-[#4D5A4F] hover:text-[#19271D] hover:bg-[#DDD5C7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#7A8A7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search Neem, Moringa, Lungs, etc..."
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-[#D5CDC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B6E47] text-[#1F2C22] placeholder:text-[#8E9B90]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8E9B90] hover:text-[#19271D]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* 3D Cylindrical Orbit / Infinite Carousel Visual Stage */}
      {count > 0 ? (
        <div className="relative overflow-hidden py-10 px-2 sm:px-6 bg-gradient-to-b from-[#F2ECE2]/80 to-[#E8E0D2]/40 rounded-3xl border border-[#DCD5C8] shadow-inner">
          {/* Circular Ground Stage Grid Graphic */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[600px] h-[300px] border-2 border-dashed border-[#1C3322] rounded-[100%] transform -rotate-12" />
          </div>

          {/* Cards Carousel Viewport */}
          <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[420px] perspective-1000">
            {visibleCards.map(({ tree, offset, index }) => {
              // 3D positioning math
              const isCenter = offset === 0;
              const absOffset = Math.abs(offset);
              const translateX = offset * 240; // horizontal spacing
              const translateZ = -absOffset * 110; // depth receding
              const rotateY = offset * -18; // cylindrical curve
              const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.8 : 0.45;
              const zIndex = 20 - absOffset * 5;
              const scale = 1 - absOffset * 0.12;

              return (
                <div
                  key={`${tree.id}-${offset}`}
                  onClick={() => {
                    if (isCenter) {
                      setInspectingTree(tree);
                    } else {
                      setSelectedIndex(index);
                    }
                  }}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    transition: 'all 0.45s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                  className={`absolute w-[280px] sm:w-[320px] rounded-2xl p-5 sm:p-6 cursor-pointer select-none transition-shadow ${
                    isCenter
                      ? 'bg-white shadow-2xl border-2 border-[#386542] ring-4 ring-[#386542]/10'
                      : 'bg-[#F9F7F3] shadow-md border border-[#DCD3C5] hover:border-[#A4B5A6]'
                  }`}
                >
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide"
                      style={{
                        backgroundColor: `${tree.colorAccent}15`,
                        color: tree.colorAccent
                      }}
                    >
                      {tree.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#8C9C8F]">
                      #{String(index + 1).padStart(2, '0')} of {count}
                    </span>
                  </div>

                  {/* Botanical & Tamil Names */}
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#152319] leading-snug">
                      {tree.name}
                    </h3>
                    <p className="text-xs text-[#6F7F72] italic font-serif">
                      {tree.botanicalName}
                    </p>
                    <p className="text-xs font-medium text-[#B85D3B] mt-0.5">
                      {tree.tamilName}
                    </p>
                  </div>

                  {/* Short Benefit Quote */}
                  <p className="text-xs text-[#445147] line-clamp-3 mb-4 leading-relaxed bg-[#F7F4EE] p-2.5 rounded-xl border border-[#E9E2D5]">
                    "{tree.shortBenefit}"
                  </p>

                  {/* Key Active Compounds Pill */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#798A7B] block mb-1">
                      Active Compounds:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {tree.activeCompounds.slice(0, 3).map((comp) => (
                        <span
                          key={comp}
                          className="px-2 py-0.5 bg-[#EAE2D5] text-[#2C3B2F] text-[10px] rounded-md font-medium"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Affordance */}
                  <div className="pt-2 border-t border-[#EDE7DC] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#325A3B] flex items-center gap-1">
                      <Info className="w-3.5 h-3.5" />
                      {isCenter ? 'Inspect Full Prescription' : 'Click to View'}
                    </span>
                    <span className="text-[11px] text-[#7A8A7C]">
                      Oxygen: {tree.oxygenRating}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Navigation Bar */}
          <div className="flex items-center justify-between max-w-md mx-auto mt-6 px-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white text-[#1C3322] border border-[#D5CDC0] shadow hover:bg-[#F5EFEB] transition-all"
              aria-label="Previous Tree"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-center">
              <span className="text-sm font-semibold text-[#1C3322]">
                {currentTree?.name} ({currentTree?.tamilName})
              </span>
              <p className="text-xs text-[#6F7F72]">
                Tree {safeIndex + 1} of {count}
              </p>
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white text-[#1C3322] border border-[#D5CDC0] shadow hover:bg-[#F5EFEB] transition-all"
              aria-label="Next Tree"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-[#F5EFEB] rounded-2xl border border-dashed border-[#D5CDC0]">
          <p className="text-sm text-[#6F7F72] mb-2">No trees found matching "{searchQuery}" in "{selectedCategory}".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="text-xs font-semibold text-[#294833] underline hover:text-[#142217]"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* In-Depth Tree Prescription Modal / Drawer */}
      {inspectingTree && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D7CEBF] max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setInspectingTree(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#EAE2D5] text-[#334235] hover:bg-[#DDD2C2] transition-colors"
              aria-label="Close Tree Details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-serif text-2xl font-bold shadow-md shrink-0"
                style={{ backgroundColor: inspectingTree.colorAccent }}
              >
                {inspectingTree.name.charAt(0)}
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EAE2D5] text-[#2F4533] inline-block mb-1">
                  {inspectingTree.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#142217]">
                  {inspectingTree.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#67776A] mt-0.5">
                  <span className="italic font-serif">{inspectingTree.botanicalName}</span>
                  <span>•</span>
                  <span className="font-medium text-[#B85D3B]">{inspectingTree.tamilName}</span>
                </div>
              </div>
            </div>

            {/* Doctor's Biological Overview */}
            <div className="mb-6 p-4 rounded-2xl bg-[#F3EDE2] border border-[#E4DAC9]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2F4533] mb-1.5 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>The Doctor's Preventative Prescription</span>
              </h4>
              <p className="text-sm text-[#38463B] leading-relaxed">
                {inspectingTree.shortBenefit}
              </p>
            </div>

            {/* Detailed Health Benefits List */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#69796C] mb-3">
                Key Biological & Lifestyle Mechanisms
              </h4>
              <div className="space-y-2.5">
                {inspectingTree.fullBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#344137]">
                    <CheckCircle2 className="w-4 h-4 text-[#3B6E47] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Compounds & Traditional Siddha Heritage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-3.5 bg-white rounded-xl border border-[#DDD4C5]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#798A7B] block mb-2">
                  Isolated Phytochemicals
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {inspectingTree.activeCompounds.map((ac) => (
                    <span key={ac} className="px-2.5 py-1 bg-[#F0EAE0] text-[#1E2B21] text-xs font-medium rounded-lg">
                      {ac}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-[#DDD4C5]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#798A7B] block mb-1">
                  Ancient Siddha & Ayurvedic Lore
                </span>
                <p className="text-xs text-[#445347] leading-relaxed">
                  {inspectingTree.traditionalUse}
                </p>
              </div>
            </div>

            {/* Sanctuary Canopy Metrics */}
            <div className="grid grid-cols-4 gap-2 text-center py-3 bg-[#EAE2D5] rounded-xl text-xs">
              <div>
                <span className="block text-[#67776A] text-[10px]">Air Purification</span>
                <span className="font-bold text-[#142217]">{inspectingTree.healingAttributes.airPurification}/10</span>
              </div>
              <div>
                <span className="block text-[#67776A] text-[10px]">Stress Relief</span>
                <span className="font-bold text-[#142217]">{inspectingTree.healingAttributes.stressRelief}/10</span>
              </div>
              <div>
                <span className="block text-[#67776A] text-[10px]">Micro-Cooling</span>
                <span className="font-bold text-[#142217]">{inspectingTree.healingAttributes.microclimateCooling}/10</span>
              </div>
              <div>
                <span className="block text-[#67776A] text-[10px]">Canopy Width</span>
                <span className="font-bold text-[#142217]">{inspectingTree.canopyDiameterMeters} meters</span>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-6 flex items-center justify-end">
              <button
                onClick={() => setInspectingTree(null)}
                className="px-6 py-2.5 bg-[#1C3322] text-white text-xs font-semibold rounded-xl hover:bg-[#25442F] transition-colors"
              >
                Close Tree Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
