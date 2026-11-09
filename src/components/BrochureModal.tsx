import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, TreePine, Sparkles, Printer } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactPhone: string;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, contactPhone }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hasDownloaded, setHasDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasDownloaded(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-xl bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D5CDC0] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#EAE3D6] text-[#334235] hover:bg-[#DDD2C2] transition-colors"
          aria-label="Close Brochure Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!hasDownloaded ? (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D5] text-[#2F4533] text-xs font-semibold w-max mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Official 2026-2029 Masterplan Document</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#142217] mb-2">
              Download Sanctuary Brochure & 35 Medicinal Trees Guide
            </h3>

            <p className="text-xs sm:text-sm text-[#556358] mb-6 leading-relaxed">
              Complete guide covering our ~10,000 SQFT plot blueprints, soil & groundwater chemistry, Archampatti and Panjappur drone surveys, and the founder doctor's preventative health manifesto.
            </p>

            {/* Document Contents Preview Box */}
            <div className="p-4 rounded-2xl bg-[#F3EDE2] border border-[#E3D9C9] mb-6 text-xs text-[#39483C] space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B6E47] shrink-0" />
                <span>The 35 Curated Healing Trees list with active phytochemicals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B6E47] shrink-0" />
                <span>Archampatti Phase 1 (Completed) & Panjappur Phase 2 drone aerial layouts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B6E47] shrink-0" />
                <span>How to design your bioclimatic villa nestled between the canopy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B6E47] shrink-0" />
                <span>The 7-Year (2022-2029) self-sustaining forest timeline</span>
              </div>
            </div>

            {/* Quick Request Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#38483B] mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Aravind Sundaram"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CDC0] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B6E47] text-[#19271D]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#38483B] mb-1">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CDC0] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B6E47] text-[#19271D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#38483B] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CDC0] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B6E47] text-[#19271D]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-4 bg-[#1C3322] hover:bg-[#284831] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#C29B38]" />
                <span>Instant Access: Download Digital Masterplan</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 animate-in fade-in">
            <div className="w-14 h-14 bg-[#E8F4EA] text-[#2F6B38] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#142217] mb-2">
              Brochure Prepared for {name || 'You'}!
            </h3>

            <p className="text-xs sm:text-sm text-[#556358] mb-6 max-w-md mx-auto">
              A copy has been dispatched to <strong>{email || 'your email'}</strong>. You can also view and print the interactive digital summary below.
            </p>

            <div className="p-5 rounded-2xl bg-[#F3EDE2] border border-[#DDD3C2] text-left text-xs mb-6 space-y-3">
              <div className="flex items-center justify-between border-b border-[#E3D9C8] pb-2">
                <span className="font-semibold text-[#142217]">Document ID:</span>
                <span className="font-mono text-[#6A7B6D]">TF-TRICHY-2026-V1</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#E3D9C8] pb-2">
                <span className="font-semibold text-[#142217]">Sites Included:</span>
                <span>Archampatti (Completed) & Panjappur (In Progress)</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#E3D9C8] pb-2">
                <span className="font-semibold text-[#142217]">Standard Homestead Size:</span>
                <span>~10,000 SQFT (Approx 23 Cents)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#142217]">Founder Doctor Desk:</span>
                <span className="text-[#3B6E47] font-semibold">{contactPhone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handlePrint}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#1C3322] text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#284831]"
              >
                <Printer className="w-4 h-4 text-[#C29B38]" />
                <span>Print / Save as PDF</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white border border-[#D5CDC0] text-xs font-semibold text-[#38483B] hover:bg-[#F2ECE2]"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
