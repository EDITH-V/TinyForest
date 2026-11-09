import React, { useState } from 'react';
import { INITIAL_SITES, SiteInfo } from '../data/treesData';
import {
  MapPin,
  Clock,
  Compass,
  Layers,
  Sparkles,
  ChevronRight,
  Maximize2,
  TreeDeciduous,
  Home,
  CheckCircle,
  Calendar,
  Waves
} from 'lucide-react';

interface SanctuarySitesProps {
  onScheduleWalk: (siteName: string) => void;
  onOpenBrochure: () => void;
  adminSites?: SiteInfo[];
}

export const SanctuarySitesSection: React.FC<SanctuarySitesProps> = ({
  onScheduleWalk,
  onOpenBrochure,
  adminSites
}) => {
  const sites = adminSites || INITIAL_SITES;
  const [activeSiteId, setActiveSiteId] = useState<'archampatti' | 'panjappur'>('archampatti');
  const [timelineYear, setTimelineYear] = useState<number>(2026);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const activeSite = sites.find((s) => s.id === activeSiteId) || sites[0];

  const TIMELINE_STEPS = [
    {
      year: 2022,
      label: 'Genesis & Soil Awakening',
      details: 'Deep subsoil ripping, enrichment with Kaveri river silt and organic compost. Planting of the 35 pioneer medicinal species.'
    },
    {
      year: 2024,
      label: 'Tiered Root & Canopy Weave',
      details: 'Root network interconnection. Groundwater recharge depth rises significantly. Archampatti establishes dense shade avenues.'
    },
    {
      year: 2026,
      label: 'Current Phase · Homestead Allotment',
      details: 'Archampatti Phase 1 fully established; Panjappur Phase 2 sapling lines flourishing. Home footprints demarcated between trees.'
    },
    {
      year: 2029,
      label: 'Self-Sustaining Forest Sanctuary',
      details: 'Complete microclimatic autonomy. Canopies reach 12-18 meters with automated self-mulching, temperature drop of -5°C, and closed-loop biosanctuary.'
    }
  ];

  return (
    <section id="sanctuaries" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D6] text-[#2F4533] text-xs font-semibold tracking-wider uppercase mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#B85D3B]" />
          <span>The Two Flagship Locations · Trichy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#142217] leading-tight mb-4">
          Two Living Sanctuaries in the Kaveri Basin
        </h2>
        <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
          This is not speculative real estate. Since 2022, we have been patiently regenerating agricultural land into living, biodiverse forest plots (~10,000 SQFT each) designed for generational homes nestled between native canopies.
        </p>
      </div>

      {/* Site Tabs Switcher */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {sites.map((site) => (
          <button
            key={site.id}
            onClick={() => setActiveSiteId(site.id as 'archampatti' | 'panjappur')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 ${
              activeSiteId === site.id
                ? 'bg-[#1C3322] text-white shadow-lg ring-2 ring-[#1C3322]/20'
                : 'bg-white text-[#4A5A4D] hover:bg-[#F0EAE0] border border-[#DCD5CA]'
            }`}
          >
            <Compass className={`w-4 h-4 ${activeSiteId === site.id ? 'text-[#C29B38]' : 'text-[#849486]'}`} />
            <span>{site.name}</span>
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                site.id === 'archampatti'
                  ? 'bg-[#3B6E47]/30 text-[#D8F0DC]'
                  : 'bg-[#B85D3B]/30 text-[#F5DDD4]'
              }`}
            >
              {site.id === 'archampatti' ? 'Phase 1 · Established' : 'Phase 2 · In Progress'}
            </span>
          </button>
        ))}
      </div>

      {/* Main Sanctuary Card */}
      <div className="bg-white rounded-3xl overflow-hidden border border-[#D8CEBF] shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Drone Aerial Showcase Column */}
          <div className="lg:col-span-7 relative group bg-[#111913] min-h-[400px] lg:min-h-[540px]">
            <img
              src={activeSite.image}
              alt={`Drone aerial view of ${activeSite.name} in Trichy`}
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Top Aerial Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20">
                <Maximize2 className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>Live Drone Survey Aerial View</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#1C3322]/90 text-[#A2E6B0] text-xs font-mono font-medium">
                {activeSite.coordinates}
              </span>
            </div>

            {/* Interactive Aerial Hotspots */}
            <div className="absolute top-1/3 left-1/4">
              <button
                onClick={() => setActiveHotspot(activeHotspot === 'soil' ? null : 'soil')}
                className="relative group/pin p-2 rounded-full bg-[#B85D3B] text-white shadow-lg hover:scale-110 transition-transform"
                title="Central Soil Avenue"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </button>
              {activeHotspot === 'soil' && (
                <div className="absolute left-8 top-0 w-52 bg-white text-[#19271D] p-3 rounded-xl shadow-xl text-xs z-30 animate-in fade-in">
                  <strong className="block font-semibold mb-1">Permeable Red Loam Avenue</strong>
                  <p className="text-[11px] text-[#556358]">Zero asphalt. Rainfall percolates directly into the groundwater table.</p>
                </div>
              )}
            </div>

            <div className="absolute top-1/2 right-1/4">
              <button
                onClick={() => setActiveHotspot(activeHotspot === 'canopy' ? null : 'canopy')}
                className="relative group/pin p-2 rounded-full bg-[#3B6E47] text-white shadow-lg hover:scale-110 transition-transform"
                title="35 Medicinal Canopy Buffer"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </button>
              {activeHotspot === 'canopy' && (
                <div className="absolute right-8 top-0 w-52 bg-white text-[#19271D] p-3 rounded-xl shadow-xl text-xs z-30 animate-in fade-in">
                  <strong className="block font-semibold mb-1">Multi-Tiered Healing Grove</strong>
                  <p className="text-[11px] text-[#556358]">Neem, Jamun, Amla, and Teak planted in dense symbiotic clusters.</p>
                </div>
              )}
            </div>

            {/* Bottom Drone Highlights Overlay */}
            <div className="absolute bottom-4 inset-x-4 text-white">
              <div className="p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                <p className="text-xs font-semibold text-[#C29B38] uppercase tracking-wider mb-1">
                  Site Landscape Features:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#E1DCD2]">
                  {activeSite.droneHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#8FD99A] font-bold">•</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Information & Homestead Blueprint Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#FBF9F5]">
            <div>
              {/* Site Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold text-[#B85D3B] uppercase tracking-wider">
                  {activeSite.phase}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8E1D5] text-[#2F4533]">
                  {activeSite.availablePlots} of {activeSite.totalPlots} Plots Available
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#142217] mb-3">
                {activeSite.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#526155] leading-relaxed mb-6">
                {activeSite.description}
              </p>

              {/* Key Environmental Specs */}
              <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                <div className="p-3 rounded-xl bg-[#F4EDE2] border border-[#E3D9C9]">
                  <span className="text-[11px] text-[#718073] block">Each Plot Area</span>
                  <span className="text-sm font-serif font-bold text-[#142217]">~10,000 SQFT</span>
                  <span className="text-[10px] text-[#869688] block mt-0.5">Approx 23 Cents (~930 m²)</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F4EDE2] border border-[#E3D9C9]">
                  <span className="text-[11px] text-[#718073] block">Soil Quality</span>
                  <span className="text-sm font-semibold text-[#142217] line-clamp-1">{activeSite.soilType}</span>
                  <span className="text-[10px] text-[#869688] block mt-0.5">Rich Kaveri Alluvium</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F4EDE2] border border-[#E3D9C9]">
                  <span className="text-[11px] text-[#718073] block">Groundwater Level</span>
                  <span className="text-sm font-bold text-[#2A5935]">{activeSite.groundwaterDepthFt} Feet Depth</span>
                  <span className="text-[10px] text-[#869688] block mt-0.5">Natural Aquifer Recharge</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F4EDE2] border border-[#E3D9C9]">
                  <span className="text-[11px] text-[#718073] block">Sanctuary Horizon</span>
                  <span className="text-sm font-bold text-[#C29B38]">{activeSite.plantedSince} - {activeSite.maturationTarget}</span>
                  <span className="text-[10px] text-[#869688] block mt-0.5">7-Year Maturation Plan</span>
                </div>
              </div>

              {/* The 10,000 SQFT Architectural Paradigm */}
              <div className="p-4 rounded-2xl bg-[#1C3322] text-[#F3EFE6] mb-6">
                <div className="flex items-center gap-2 mb-2 text-[#C29B38]">
                  <Home className="w-4 h-4" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    How You Live Here: Build In Between
                  </h4>
                </div>
                <p className="text-xs text-[#CFDACF] leading-relaxed mb-3">
                  Rather than clearing the earth, your sustainable villa (~1,500 - 2,500 SQFT) is placed gently into a dedicated clearing, enveloped by 7,500+ SQFT of canopy.
                </p>
                <div className="flex items-center justify-between text-[11px] pt-2 border-t border-[#2F4A37]">
                  <span className="text-[#8FD99A]">✓ Shaded by 35+ trees</span>
                  <span className="text-[#8FD99A]">✓ 4.5°C cooler naturally</span>
                  <span className="text-[#8FD99A]">✓ Pure organic living</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-[#E8E0D2]">
              <button
                onClick={() => onScheduleWalk(activeSite.name)}
                className="flex-1 py-3 px-4 bg-[#1C3322] hover:bg-[#284831] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C29B38]" />
                <span>Schedule Sanctuary Walk</span>
              </button>

              <button
                onClick={onOpenBrochure}
                className="py-3 px-4 bg-white hover:bg-[#F2ECE2] text-[#294230] border border-[#CDC2B2] text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Download Masterplan</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* The 7-Year Patient Cultivation Timeline (2022 to 2029) */}
      <div className="mt-16 bg-[#F4EDE1] rounded-3xl p-6 sm:p-10 border border-[#D8CEBE]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B85D3B] block mb-1">
              Patient Cultivation
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#142217]">
              The 2022 → 2029 Forest Maturation Journey
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#5D6B60] max-w-md">
            Forests cannot be rushed by cement or capital. We treat time as our master ingredient, transforming barren land into self-regulating green sanctuaries.
          </p>
        </div>

        {/* Timeline Interactive Milestones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIMELINE_STEPS.map((step) => {
            const isSelected = timelineYear === step.year;
            const isPastOrPresent = step.year <= 2026;

            return (
              <div
                key={step.year}
                onClick={() => setTimelineYear(step.year)}
                className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-[#1C3322] text-white border-[#1C3322] shadow-lg scale-102'
                    : isPastOrPresent
                    ? 'bg-white text-[#293B2D] border-[#D8CFC2] hover:border-[#96A898]'
                    : 'bg-[#EDE4D5]/80 text-[#59695C] border-dashed border-[#C5BBAA]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xl font-serif font-bold ${
                      isSelected ? 'text-[#C29B38]' : 'text-[#142217]'
                    }`}
                  >
                    {step.year}
                  </span>
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-[#294833] text-[#A6D4AF]'
                        : isPastOrPresent
                        ? 'bg-[#E3DC CE] text-[#4A5E4E]'
                        : 'bg-[#DDD3C2] text-[#718274]'
                    }`}
                  >
                    {step.year === 2022 && 'Day 0'}
                    {step.year === 2024 && 'Year 2'}
                    {step.year === 2026 && 'Year 4 (Now)'}
                    {step.year === 2029 && 'Goal (Year 7)'}
                  </span>
                </div>

                <h4 className={`text-sm font-semibold mb-2 ${isSelected ? 'text-white' : 'text-[#19271D]'}`}>
                  {step.label}
                </h4>

                <p className={`text-xs leading-relaxed ${isSelected ? 'text-[#D0DED2]' : 'text-[#58675B]'}`}>
                  {step.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
