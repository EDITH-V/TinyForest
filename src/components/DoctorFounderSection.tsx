import React, { useState } from 'react';
import { HeartPulse, Stethoscope, Sparkles, Feather, ShieldCheck, TreePine, Award } from 'lucide-react';

interface DoctorSectionProps {
  customQuote?: string;
}

export const DoctorFounderSection: React.FC<DoctorSectionProps> = ({ customQuote }) => {
  const [sketchMode, setSketchMode] = useState<boolean>(true);

  return (
    <section id="founder" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#1C2C20] rounded-3xl overflow-hidden border border-[#2D4533] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-14">
          
          {/* Left Column: Image with Sketched / Natural Vignette presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-md">
              {/* Decorative Earthy Mat Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#C29B38]/30 via-transparent to-[#B85D3B]/30 blur-sm pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C29B38]/40 bg-[#142017] shadow-2xl">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-09_at_13.50.57_858b92cd.jpeg"
                  alt="Founder Doctor standing beneath the expansive medicinal tree canopy in Trichy sanctuary"
                  className={`w-full h-[460px] sm:h-[520px] object-cover object-center transition-all duration-700 ${
                    sketchMode
                      ? 'contrast-125 saturate-50 sepia-[20%] brightness-95'
                      : 'contrast-105 saturate-100'
                  }`}
                />

                {/* Subtle Sketch Outline Overlay Overlay */}
                {sketchMode && (
                  <div className="absolute inset-0 bg-[#EFE9DF]/10 mix-blend-color-burn pointer-events-none" />
                )}

                {/* Bottom Photo Caption Banner */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B150E] via-[#0B150E]/80 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-serif font-semibold text-[#F1E8D9]">
                        Dr. S. Vig (Founder & Physician)
                      </p>
                      <p className="text-xs text-[#A1B8A4]">
                        Under the Sacred Canopy · Trichy Sanctuary
                      </p>
                    </div>

                    {/* Mode Toggle Button: Sketched vs Original Photo */}
                    <button
                      onClick={() => setSketchMode(!sketchMode)}
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#27402D] hover:bg-[#34543C] text-[#E0EEDF] border border-[#40664B] transition-all flex items-center gap-1.5"
                      aria-label="Toggle Sketched Art / Real Photo View"
                    >
                      <Feather className="w-3 h-3 text-[#C29B38]" />
                      <span>{sketchMode ? 'Sketched Look' : 'Original Photo'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Founder Credential Badges */}
              <div className="flex items-center justify-center gap-3 mt-4 text-xs text-[#A8BCA9]">
                <span className="flex items-center gap-1">
                  <Stethoscope className="w-3.5 h-3.5 text-[#C29B38]" />
                  Preventative Medicine
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <TreePine className="w-3.5 h-3.5 text-[#8FD99A]" />
                  Living Forest Sanctuaries
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Story & Preventative Health Vision */}
          <div className="lg:col-span-7 text-[#E7E2D8]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#27402D] text-[#A6D4AF] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#3B6344]">
              <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>The Man Behind The Idea</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">
              "The Greatest Hospital Is The Ecosystem You Wake Up Inside."
            </h2>

            {/* Doctor's Quote Block */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#142017] border-l-4 border-[#C29B38] mb-6 shadow-inner">
              <p className="text-sm sm:text-base text-[#D4CFC4] italic font-serif leading-relaxed">
                "{customQuote || 'Modern clinical medicine spends trillions treating chronic disease after organ tissue has already degenerated. But human biology did not evolve to heal under artificial fluorescent bulbs and asphalt heat. A living forest sanctuary heals from the ground up—restoring the phytoncide-saturated oxygen, microbial soil diversity, and circadian stillness we were meant to inhabit.'}"
              </p>
              <div className="mt-2 text-xs font-medium text-[#C29B38]">
                — The Founder Doctor · Tiny Forest Sanctuaries
              </div>
            </div>

            {/* Core Medical Pillars */}
            <div className="space-y-4 mb-8 text-xs sm:text-sm text-[#BAC8BC] leading-relaxed">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#27402D] flex items-center justify-center text-[#8FD99A] shrink-0 mt-0.5">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white font-semibold block mb-0.5">
                    Shinrin-Yoku & Cardiovascular Plasticity:
                  </strong>
                  Inhaling natural tree terpenes (phytoncides) from Neem, Vilvam, and Eucalyptus actively increases Human Natural Killer (NK) immune cell activity by 40% while calming chronic sympathetic hypertension.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#27402D] flex items-center justify-center text-[#8FD99A] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white font-semibold block mb-0.5">
                    Not Typical Real Estate — A Doctor's 7-Year Sanctuary:
                  </strong>
                  We do not sell cleared barren plots. Begun in 2022, we patiently cultivate the 35 native healing species until 2029 so homeowners can build their sustainable sanctuary home nestled <em>between</em> the trees without felling a single branch.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#27402D] flex items-center justify-center text-[#8FD99A] shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white font-semibold block mb-0.5">
                    Generational Wellness for Your Family:
                  </strong>
                  Children who grow up running through living soil develop robust respiratory resistance and diverse gut microbiomes. This is preventative health in its purest architectural form.
                </div>
              </div>
            </div>

            {/* Quick Metrics & Call to Action */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#294230]">
              <div>
                <span className="block text-2xl font-serif font-bold text-white">~10,000</span>
                <span className="text-[11px] text-[#8EA391]">SQFT Homestead Plots</span>
              </div>
              <div className="h-8 w-px bg-[#294230]" />
              <div>
                <span className="block text-2xl font-serif font-bold text-[#8FD99A]">35</span>
                <span className="text-[11px] text-[#8EA391]">Curated Healing Trees</span>
              </div>
              <div className="h-8 w-px bg-[#294230]" />
              <div>
                <span className="block text-2xl font-serif font-bold text-[#C29B38]">2022-2029</span>
                <span className="text-[11px] text-[#8EA391]">Long-Term Forest Vision</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
