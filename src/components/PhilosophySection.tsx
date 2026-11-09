import React, { useState } from 'react';
import { calculateForestImpact } from '../utils/forestCalculators';
import {
  Sparkles,
  TreePine,
  Building2,
  Wind,
  ThermometerSnowflake,
  Droplets,
  Heart,
  ShieldCheck,
  Activity,
  ArrowRight
} from 'lucide-react';

interface PhilosophySectionProps {
  onExplorePlots: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onExplorePlots }) => {
  const [plotSize, setPlotSize] = useState<number>(10000);
  const [treesPlanted, setTreesPlanted] = useState<number>(35);
  const [yearsMatured, setYearsMatured] = useState<number>(4);

  const impact = calculateForestImpact(plotSize, treesPlanted, yearsMatured);

  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Central Philosophy Question */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D6] text-[#2F4533] text-xs font-semibold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
          <span>The Human & Planetary Equation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#142217] leading-tight mb-4">
          What Kind of World Are You Living In? <br />
          <span className="italic font-normal text-[#B85D3B]">And What World Will You Leave Behind?</span>
        </h2>
        <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
          Most modern housing developments trade ancient topsoil for impervious concrete, trapping heat and degrading our cellular resilience. We invite you to step outside the synthetic grid and anchor your family in a living ecosystem.
        </p>
      </div>

      {/* The Two Worlds Contrast Visual Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        
        {/* World 1: The Modern Concrete Grid */}
        <div className="p-8 rounded-3xl bg-[#ECE7DE] border border-[#D5CDC0] shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4 text-[#8C472E]">
            <Building2 className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C472E]">
              The Synthetic Urban Habitat
            </span>
          </div>

          <h3 className="text-2xl font-serif font-bold text-[#2A231C] mb-3">
            Heat Islands, Artificial Air & Constant Cortisol
          </h3>

          <ul className="space-y-3.5 text-xs sm:text-sm text-[#5C5045]">
            <li className="flex items-start gap-2.5">
              <span className="text-[#8C472E] font-bold text-base leading-none">✕</span>
              <span><strong>+4.5°C Urban Thermal Trapping:</strong> Asphalt and cement retain radiation, forcing perpetual air-conditioning dependency.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#8C472E] font-bold text-base leading-none">✕</span>
              <span><strong>Particulate & Ozone Exposure:</strong> Microscopic PM2.5 and nitrogen oxides inflame pulmonary and cardiovascular vessels.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#8C472E] font-bold text-base leading-none">✕</span>
              <span><strong>Sterile Microbial Environment:</strong> Absence of living soil microorganisms weakens children's immune diversity and promotes autoimmune allergic triggers.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#8C472E] font-bold text-base leading-none">✕</span>
              <span><strong>Circadian Disconnect:</strong> Concrete rectangles and screen glare elevate evening cortisol, depriving deep restorative sleep.</span>
            </li>
          </ul>
        </div>

        {/* World 2: The Doctor's Tiny Forest Sanctuary */}
        <div className="p-8 rounded-3xl bg-[#1C3322] text-[#F3EFE6] border border-[#2B4B32] shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4 text-[#C29B38]">
            <TreePine className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#8FD99A]">
              The Tiny Forest Sanctuary (Trichy)
            </span>
          </div>

          <h3 className="text-2xl font-serif font-bold text-white mb-3">
            Phytoncides, Living Soil & Circadian Harmony
          </h3>

          <ul className="space-y-3.5 text-xs sm:text-sm text-[#D7E4D9]">
            <li className="flex items-start gap-2.5">
              <span className="text-[#8FD99A] font-bold text-base leading-none">✓</span>
              <span><strong>-4.5°C Natural Evaporative Cooling:</strong> 35 mature indigenous tree canopies transpire hundreds of liters of water vapor, keeping your home blissfully cool.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#8FD99A] font-bold text-base leading-none">✓</span>
              <span><strong>Pure Oxygen & Healing Terpenes:</strong> Continuous release of alpha-pinene and nimbin purifies airways and stimulates Natural Killer (NK) cells.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#8FD99A] font-bold text-base leading-none">✓</span>
              <span><strong>Rich Soil Microbiome:</strong> Barefoot grounding on Kaveri red loam exposes your biology to beneficial Mycobacterium vaccae, triggering natural serotonin.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#8FD99A] font-bold text-base leading-none">✓</span>
              <span><strong>Living Legacy for 2029 & Beyond:</strong> A ~10,000 SQFT self-sustaining sanctuary that grows more valuable, lush, and biodiverse with every single passing year.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Interactive Lasting Impact Calculator */}
      <div className="bg-[#F6EFE5] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#DBD2C3] shadow-md">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#E3D8C8]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B85D3B] block mb-1">
              Biological & Ecological Metric Engine
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#142217]">
              Calculate Your 10,000 SQFT Lasting Impact
            </h3>
            <p className="text-xs sm:text-sm text-[#58675C] mt-1">
              Adjust your sanctuary plot configuration below to witness your tangible contribution to health and planetary regeneration.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#1C3322] text-[#8FD99A] text-xs font-mono font-semibold">
              Live Biological Calculations
            </span>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Slider 1: Plot Size */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D8CFC2]">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="plot-size-range" className="text-xs font-semibold text-[#38483B]">Plot Size (SQFT)</label>
              <span className="text-sm font-bold text-[#1C3322]">{plotSize.toLocaleString()} SQFT</span>
            </div>
            <input
              id="plot-size-range"
              type="range"
              min="5000"
              max="20000"
              step="1000"
              value={plotSize}
              onChange={(e) => setPlotSize(Number(e.target.value))}
              aria-label="Plot Size in Square Feet"
              className="w-full accent-[#3B6E47] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#7E8E80] mt-1">
              <span>5,000 SQFT</span>
              <span className="font-semibold text-[#1C3322]">10,000 SQFT (Standard)</span>
              <span>20,000 SQFT</span>
            </div>
          </div>

          {/* Slider 2: Handpicked Trees */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D8CFC2]">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="trees-count-range" className="text-xs font-semibold text-[#38483B]">Healing Trees Planted</label>
              <span className="text-sm font-bold text-[#3B6E47]">{treesPlanted} Trees</span>
            </div>
            <input
              id="trees-count-range"
              type="range"
              min="15"
              max="60"
              step="1"
              value={treesPlanted}
              onChange={(e) => setTreesPlanted(Number(e.target.value))}
              aria-label="Number of healing trees planted"
              className="w-full accent-[#3B6E47] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#7E8E80] mt-1">
              <span>15 Pioneer</span>
              <span className="font-semibold text-[#3B6E47]">35 (Curated Species)</span>
              <span>60 Dense Forest</span>
            </div>
          </div>

          {/* Slider 3: Maturation Horizon */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D8CFC2]">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="maturation-horizon-range" className="text-xs font-semibold text-[#38483B]">Cultivation Years</label>
              <span className="text-sm font-bold text-[#C29B38]">{yearsMatured} Years ({2022 + yearsMatured})</span>
            </div>
            <input
              id="maturation-horizon-range"
              type="range"
              min="1"
              max="7"
              step="1"
              value={yearsMatured}
              onChange={(e) => setYearsMatured(Number(e.target.value))}
              aria-label="Cultivation years horizon"
              className="w-full accent-[#C29B38] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#7E8E80] mt-1">
              <span>Yr 1 (Sapling)</span>
              <span>Yr 4 (2026 Now)</span>
              <span className="font-semibold text-[#C29B38]">Yr 7 (2029 Vision)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Output Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DCD3C5] shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-[#E8F4EA] flex items-center justify-center text-[#2F6B38] mb-2">
              <Wind className="w-4 h-4" />
            </div>
            <span className="text-xs text-[#6A7B6D] block">Annual Pure Oxygen</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#142217]">
              {impact.annualOxygenKg.toLocaleString()} <span className="text-xs font-sans font-normal text-[#5A6C5D]">kg/yr</span>
            </span>
            <span className="text-[11px] text-[#2F6B38] font-medium block mt-1">
              Sustains {impact.humanYearsSustainedOxygen} humans' full annual oxygen
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DCD3C5] shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-[#EFF4FA] flex items-center justify-center text-[#2A65A4] mb-2">
              <Droplets className="w-4 h-4" />
            </div>
            <span className="text-xs text-[#6A7B6D] block">Groundwater Recharged</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#142217]">
              {Math.round(impact.groundwaterRechargeLiters / 1000)}k <span className="text-xs font-sans font-normal text-[#5A6C5D]">Liters/yr</span>
            </span>
            <span className="text-[11px] text-[#2A65A4] font-medium block mt-1">
              Replenishes subterranean Kaveri aquifers
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DCD3C5] shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-[#FBF0EA] flex items-center justify-center text-[#B85D3B] mb-2">
              <ThermometerSnowflake className="w-4 h-4" />
            </div>
            <span className="text-xs text-[#6A7B6D] block">Microclimate Drop</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#B85D3B]">
              -{impact.tempReductionCelsius}°C
            </span>
            <span className="text-[11px] text-[#7A695A] font-medium block mt-1">
              Cooler than downtown Trichy streets
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DCD3C5] shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-[#F6F1E3] flex items-center justify-center text-[#C29B38] mb-2">
              <Heart className="w-4 h-4" />
            </div>
            <span className="text-xs text-[#6A7B6D] block">Cortisol Stress Drop</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#142217]">
              -{impact.cortisolReductionPct}%
            </span>
            <span className="text-[11px] text-[#3B6E47] font-medium block mt-1">
              Phytoncide index: {impact.phytoncideScore}/100
            </span>
          </div>

        </div>

        {/* Section Bottom Banner & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#EFE7DC] border border-[#DDD3C4]">
          <p className="text-xs sm:text-sm text-[#3E4E42]">
            <strong>Ready to experience the living difference?</strong> Our founder doctor personally hosts guided sanctuary walks across Archampatti and Panjappur.
          </p>
          <button
            onClick={onExplorePlots}
            className="px-5 py-2.5 rounded-xl bg-[#1C3322] hover:bg-[#284831] text-white text-xs font-semibold shrink-0 transition-colors flex items-center gap-2"
          >
            <span>Explore Sanctuary Plots</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
