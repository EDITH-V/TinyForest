import React, { useState } from 'react';
import { TreePine, Menu, X, FileText, Phone, Settings, Sparkles } from 'lucide-react';
import { formatWhatsAppUrl } from '../utils/forestCalculators';

interface NavbarProps {
  onOpenBrochure: () => void;
  onOpenAdmin: () => void;
  onOpenContact: () => void;
  whatsappPhone: string;
  whatsappMsg: string;
  announcement?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBrochure,
  onOpenAdmin,
  onOpenContact,
  whatsappPhone,
  whatsappMsg,
  announcement
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'The 35 Trees', href: '#trees' },
    { label: '3D Growth Lab', href: '#growth-lab' },
    { label: 'The Doctor', href: '#founder' },
    { label: 'Sanctuary Sites', href: '#sanctuaries' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = formatWhatsAppUrl(whatsappPhone, whatsappMsg);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E8E1D5]">
      {/* Optional Top Announcement Bar */}
      {announcement && (
        <div className="bg-[#1C3322] text-[#F3EFE6] text-xs py-1.5 px-4 text-center flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
          <span>{announcement}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label="Tiny Forest Sanctuary Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1C3322] flex items-center justify-center text-[#F5EFEB] shadow-sm group-hover:bg-[#284831] transition-colors">
              <TreePine className="w-5 h-5 text-[#C29B38]" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#142217] tracking-tight block leading-none">
                Tiny Forest
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-medium text-[#738576] tracking-wider uppercase block mt-0.5">
                Doctor-Led Sanctuary · Trichy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#48594C]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#142217] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#3B6E47] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBrochure}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#3F5042] hover:text-[#142217] hover:bg-[#EFE9DF] transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Brochure</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Doctor Team</span>
            </a>

            <button
              onClick={onOpenAdmin}
              className="p-2 rounded-xl text-[#78887A] hover:text-[#142217] hover:bg-[#EFE9DF] transition-colors"
              title="Site Admin Portal"
              aria-label="Site Admin Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#25D366] text-white sm:hidden"
              aria-label="WhatsApp Us"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#EAE3D6] text-[#283B2C] hover:bg-[#DDD4C4] transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Collapsible Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-[#D8CFBF] px-4 pt-3 pb-6 animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-[#293B2D] hover:bg-[#EFE7DC] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#E8DEC9] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full py-2.5 rounded-xl bg-white border border-[#DCD3C5] text-xs font-semibold text-[#283E2D] flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Download Sanctuary Brochure</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 rounded-xl bg-[#1C3322] text-white text-xs font-semibold flex items-center justify-center gap-2"
              >
                <span>Schedule Sanctuary Walk</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="py-2 text-center text-xs text-[#7A8A7C] hover:text-[#19271D]"
              >
                Site Admin Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
