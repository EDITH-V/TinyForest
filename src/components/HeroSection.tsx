import React, { useState, useRef } from 'react';
import {
  Sparkles,
  TreePine,
  ArrowDown,
  Volume2,
  VolumeX,
  Compass,
  Calendar,
  FileText
} from 'lucide-react';

interface HeroSectionProps {
  onExplore3D: () => void;
  onExploreTrees: () => void;
  onScheduleWalk: () => void;
  onDownloadBrochure: () => void;
  archampattiPlotsLeft?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore3D,
  onExploreTrees,
  onScheduleWalk,
  onDownloadBrochure,
  archampattiPlotsLeft = 3
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Procedural natural wind rustle synthesizer via Web Audio API (Zero external file dependencies)
  const toggleForestAmbiance = () => {
    if (!isPlayingAudio) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Pink noise buffer for soft organic leaf rustling
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Lowpass filter modeling tree canopy acoustics
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
        gainNodeRef.current = gainNode;

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        whiteNoise.start(0);

        setIsPlayingAudio(true);
      } catch (err) {
        console.warn('Audio context init prevented by browser policy until interaction', err);
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlayingAudio(false);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-24 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Subtle Organic Background Foliage Watermark */}
      <div className="absolute top-12 right-0 -mr-24 w-96 h-96 rounded-full bg-[#E8E1D2]/50 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-[#E2DACB]/40 blur-2xl pointer-events-none -z-10" />

      {/* Hero Header Pill & Audio Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D3] border border-[#DDD3C2] text-[#283E2C] text-xs font-semibold tracking-wide shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
          <span>Doctor-Founded Living Forest Sanctuary · Trichy</span>
        </div>

        {/* Natural Canopy Soundscape Toggle */}
        <button
          onClick={toggleForestAmbiance}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-xs font-medium text-[#465749] border border-[#DCD3C4] shadow-xs transition-colors"
          title={isPlayingAudio ? 'Mute Canopy Soundscape' : 'Listen to Procedural Forest Ambiance'}
          aria-label="Toggle Forest Ambiance Sound"
        >
          {isPlayingAudio ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#3B6E47]" />
              <span>Canopy Breeze: Playing</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#88988A]" />
              <span>Listen to Canopy Wind</span>
            </>
          )}
        </button>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#142217] leading-[1.08] tracking-tight mb-6">
          Live Within The Canopy, <br />
          <span className="italic font-normal text-[#B85D3B]">Not Outside It.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#4D5D50] leading-relaxed max-w-2xl mb-8">
          A patient 7-year living forest sanctuary in <strong>Archampatti & Panjappur, Trichy</strong>. 
          Each ~10,000 SQFT plot is nurtured with 35 handpicked medicinal trees, designed for families to build sustainable homes sheltered in nature's biological defense.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <button
            onClick={onExplore3D}
            className="px-6 py-3.5 rounded-xl bg-[#1C3322] hover:bg-[#284831] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all flex items-center gap-2.5 group"
          >
            <TreePine className="w-4 h-4 text-[#C29B38] group-hover:scale-110 transition-transform" />
            <span>Launch 3D Growth Lab</span>
          </button>

          <button
            onClick={onScheduleWalk}
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#F4ECE0] text-[#1E3022] border border-[#D5CCC0] text-xs sm:text-sm font-semibold tracking-wide shadow-xs transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#B85D3B]" />
            <span>Schedule Sanctuary Walk</span>
          </button>

          <button
            onClick={onDownloadBrochure}
            className="px-4 py-3.5 text-xs sm:text-sm font-semibold text-[#48594B] hover:text-[#142217] flex items-center gap-1.5 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Download Brochure (PDF)</span>
          </button>
        </div>
      </div>

      {/* Key Metric Strip Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[#E5DDD0]">
        
        <div className="bg-white/80 p-4 rounded-2xl border border-[#DCD3C5]">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#809182] block mb-0.5">
            Plot Dimensions
          </span>
          <span className="text-xl sm:text-2xl font-serif font-bold text-[#142217]">
            ~10,000 <span className="text-xs font-sans font-normal text-[#586A5B]">SQFT</span>
          </span>
          <p className="text-[11px] text-[#586A5B] mt-0.5">
            Approx 23 Cents for home & forest
          </p>
        </div>

        <div className="bg-white/80 p-4 rounded-2xl border border-[#DCD3C5]">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#809182] block mb-0.5">
            Curated Species
          </span>
          <span className="text-xl sm:text-2xl font-serif font-bold text-[#3B6E47]">
            35 <span className="text-xs font-sans font-normal text-[#586A5B]">Medicinal Trees</span>
          </span>
          <p className="text-[11px] text-[#586A5B] mt-0.5">
            Handpicked for preventative immunity
          </p>
        </div>

        <div className="bg-white/80 p-4 rounded-2xl border border-[#DCD3C5]">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#809182] block mb-0.5">
            Flagship Sites
          </span>
          <span className="text-lg sm:text-xl font-serif font-bold text-[#B85D3B]">
            Archampatti & Panjappur
          </span>
          <p className="text-[11px] text-[#586A5B] mt-0.5">
            Phase 1 Established · {archampattiPlotsLeft} plots remain
          </p>
        </div>

        <div className="bg-white/80 p-4 rounded-2xl border border-[#DCD3C5]">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#809182] block mb-0.5">
            Maturation Horizon
          </span>
          <span className="text-xl sm:text-2xl font-serif font-bold text-[#C29B38]">
            2022 → 2029
          </span>
          <p className="text-[11px] text-[#586A5B] mt-0.5">
            7-year self-sustaining forest vision
          </p>
        </div>

      </div>

      {/* Downward Scroll Cue */}
      <div className="flex items-center justify-center mt-6">
        <a
          href="#growth-lab"
          className="text-xs text-[#7A8A7C] hover:text-[#19271D] flex items-center gap-1.5 transition-colors"
          aria-label="Scroll down to 3D Growth Lab"
        >
          <span>Explore 3D Growth Cycles & Biological World</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>

    </section>
  );
};
