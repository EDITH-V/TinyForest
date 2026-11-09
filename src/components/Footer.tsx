import React from 'react';
import { TreePine, Phone, Mail, MapPin, Sparkles, ArrowUp, Heart, Shield } from 'lucide-react';
import { formatWhatsAppUrl } from '../utils/forestCalculators';

interface FooterProps {
  onOpenBrochure: () => void;
  onOpenAdmin: () => void;
  contactPhone: string;
  whatsappPhone: string;
  whatsappMessage: string;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBrochure,
  onOpenAdmin,
  contactPhone,
  whatsappPhone,
  whatsappMessage
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = formatWhatsAppUrl(whatsappPhone, whatsappMessage);

  return (
    <footer className="bg-[#121E15] text-[#DCE7DE] pt-16 pb-12 border-t border-[#223326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#223326]">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#27402D] flex items-center justify-center text-[#F5EFEB]">
                <TreePine className="w-5 h-5 text-[#C29B38]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight block">
                  Tiny Forest
                </span>
                <span className="text-[10px] font-sans font-medium text-[#8EA291] tracking-wider uppercase block">
                  Doctor-Led Nature-Integrated Living · Trichy
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#AABDAF] leading-relaxed max-w-sm">
              We are regenerating ~10,000 SQFT plots in Archampatti and Panjappur into self-sustaining living forest sanctuaries. 
              35 handpicked healing trees provide generational wellness, clean oxygen, and natural microclimate cooling for your sustainable home.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>

              <button
                onClick={onOpenBrochure}
                className="px-4 py-2 rounded-xl bg-[#25392A] hover:bg-[#314A37] text-white text-xs font-semibold transition-colors"
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C29B38]">
              Sanctuary
            </h4>
            <ul className="space-y-2 text-xs text-[#BACABC]">
              <li><a href="#philosophy" className="hover:text-white transition-colors">Living Equation</a></li>
              <li><a href="#trees" className="hover:text-white transition-colors">35 Healing Trees</a></li>
              <li><a href="#growth-lab" className="hover:text-white transition-colors">3D Growth Lab</a></li>
              <li><a href="#founder" className="hover:text-white transition-colors">Doctor's Vision</a></li>
              <li><a href="#sanctuaries" className="hover:text-white transition-colors">Archampatti (Phase 1)</a></li>
              <li><a href="#sanctuaries" className="hover:text-white transition-colors">Panjappur (Phase 2)</a></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C29B38]">
              Trichy Flagship Locations
            </h4>
            <div className="space-y-2 text-xs text-[#A8BBAA]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C29B38] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Archampatti Forest Sanctuary (Completed):</strong>
                  <span>Archampatti, Trichy, Tamil Nadu (3 plots available)</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8FD99A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Panjappur Forest Sanctuary (In Progress):</strong>
                  <span>Panjappur Kaveri Delta Belt, Trichy, Tamil Nadu</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 text-white font-medium">
                <Phone className="w-4 h-4 text-[#C29B38]" />
                <span>{contactPhone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Marketing & Ad Keywords Cloud (Requested by user: Footer with right keywords for ads & marketing) */}
        <div className="py-8 border-b border-[#223326]">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#8DA190]">
              Key Focus Areas, Sustainable Agroforestry & SEO Search Keywords
            </h4>
          </div>

          <div className="flex flex-wrap gap-1.5 text-[11px] text-[#819684]">
            {[
              'Tiny Forest Trichy',
              'Miyawaki Forest Plots India',
              'Archampatti Farm Sanctuary',
              'Panjappur Eco Living Plots',
              '10000 SQFT Farm Land Trichy',
              'Doctor-Led Preventative Health Homes',
              'Living In Between Trees',
              'Kaveri River Belt Bio-Sanctuary',
              'Sustainable Retirement Villas Tamil Nadu',
              'Chemical-Free Red Soil Plots',
              '35 Healing Native Trees',
              'Neem & Amla Agroforestry',
              'Groundwater Recharging Homesteads',
              'Phytoncide Forest Bathing India',
              'Trichy Green Belt Real Estate',
              'Self-Sustaining Forest 2029',
              'Zero Concrete Clearing Development'
            ].map((keyword) => (
              <span
                key={keyword}
                className="px-2.5 py-1 rounded-md bg-[#18271C] border border-[#273B2C] text-[#A6BAA9] hover:text-white transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Credits & Admin Hook */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A8E7D]">
          <div className="flex items-center gap-2">
            <span>© 2022 - 2029 Tiny Forest Sanctuaries. All rights reserved.</span>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="text-[#96A897] hover:text-white underline"
            >
              Site Admin Portal
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#6E8070]">
              Built with reverence for Kaveri soil microbiology & human biology.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#1C2C20] hover:bg-[#273B2C] text-white transition-colors"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
