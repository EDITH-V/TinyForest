import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Send,
  CheckCircle2,
  Car,
  Compass
} from 'lucide-react';
import { formatWhatsAppUrl } from '../utils/forestCalculators';

interface ContactSectionProps {
  contactPhone: string;
  whatsappPhone: string;
  whatsappMessage: string;
  preselectedSite?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contactPhone,
  whatsappPhone,
  whatsappMessage,
  preselectedSite = 'Archampatti Forest Sanctuary'
}) => {
  const [selectedSite, setSelectedSite] = useState(preselectedSite);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('08:00 AM (Cool Morning Canopy)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const dynamicWhatsAppMsg = `Hello Tiny Forest Doctor Team, I would like to schedule a private sanctuary walk at ${selectedSite} on ${preferredDate || 'upcoming weekend'} around ${preferredTime}. My Name: ${fullName || 'Guest'}, Phone: ${phone || 'Provided'}. Notes: ${message || 'Looking for ~10000 SQFT plot details'}`;

  const customWhatsAppUrl = formatWhatsAppUrl(whatsappPhone, dynamicWhatsAppMsg);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D6] text-[#2F4533] text-xs font-semibold tracking-wider uppercase mb-3">
          <Calendar className="w-3.5 h-3.5 text-[#B85D3B]" />
          <span>Experience the Canopy Firsthand</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#142217] leading-tight mb-4">
          Schedule a Private Forest Walk
        </h2>
        <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
          Walk the red soil pathways under the living canopy of Archampatti or explore the expanding grove of Panjappur. Feel the drop in temperature and breathe the Kaveri basin air before deciding on your sanctuary home.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Booking Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#D5CDC0] shadow-xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl font-serif font-bold text-[#142217] mb-1">
                Book a Guided Visit with Our Doctor / Forestry Team
              </h3>
              <p className="text-xs text-[#6F7F72] mb-4">
                We host intimate visits (morning or late afternoon) to ensure visitors experience the calmest microclimate and bird chorus.
              </p>

              {/* Site Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#38483B] mb-2">
                  Choose Preferred Sanctuary Site
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedSite('Archampatti Forest Sanctuary')}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      selectedSite === 'Archampatti Forest Sanctuary'
                        ? 'bg-[#1C3322] text-white border-[#1C3322] shadow-sm'
                        : 'bg-[#FBF9F5] text-[#334235] border-[#D9D1C4] hover:bg-[#F2EBE0]'
                    }`}
                  >
                    <span className="block text-xs font-bold">Archampatti (Phase 1)</span>
                    <span className="text-[11px] opacity-80">Mature Established Canopy · 3 plots left</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedSite('Panjappur Forest Sanctuary')}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      selectedSite === 'Panjappur Forest Sanctuary'
                        ? 'bg-[#1C3322] text-white border-[#1C3322] shadow-sm'
                        : 'bg-[#FBF9F5] text-[#334235] border-[#D9D1C4] hover:bg-[#F2EBE0]'
                    }`}
                  >
                    <span className="block text-xs font-bold">Panjappur (Phase 2)</span>
                    <span className="text-[11px] opacity-80">In Progress · Flanked by Paddy Fields</span>
                  </button>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#38483B] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#D5CDC0] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B6E47] text-[#19271D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#38483B] mb-1">
                    WhatsApp / Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98424 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#D5CDC0] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B6E47] text-[#19271D]"
                  />
                </div>
              </div>

              {/* Date & Time Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#38483B] mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#D5CDC0] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B6E47] text-[#19271D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#38483B] mb-1">
                    Optimal Canopy Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#D5CDC0] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B6E47] text-[#19271D]"
                  >
                    <option value="08:00 AM (Cool Morning Canopy)">08:00 AM · Cool Morning Canopy</option>
                    <option value="10:00 AM (Sunlight Filtration Check)">10:00 AM · Sunlight Filtration Check</option>
                    <option value="04:30 PM (Golden Hour Bird Chorus)">04:30 PM · Golden Hour Bird Chorus</option>
                    <option value="06:00 PM (Twilight Negative Ion Release)">06:00 PM · Twilight Negative Ion Release</option>
                  </select>
                </div>
              </div>

              {/* Message / House Vision */}
              <div>
                <label className="block text-xs font-semibold text-[#38483B] mb-1">
                  Tell Us About Your Vision (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Planning a sustainable single-story retirement home nestled in trees; curious about solar and rainwater systems..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#D5CDC0] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B6E47] text-[#19271D]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#1C3322] hover:bg-[#284831] text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#C29B38]" />
                  <span>Confirm Visit Reservation</span>
                </button>

                <a
                  href={customWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Quick WhatsApp Booking</span>
                </a>
              </div>

            </form>
          ) : (
            <div className="text-center py-10 animate-in fade-in">
              <div className="w-16 h-16 bg-[#E8F4EA] text-[#2F6B38] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#142217] mb-2">
                Sanctuary Walk Requested!
              </h3>
              <p className="text-xs sm:text-sm text-[#556358] mb-6 max-w-md mx-auto">
                Thank you, <strong>{fullName}</strong>. Our founder doctor and site team have received your request for <strong>{selectedSite}</strong> on <strong>{preferredDate || 'your preferred date'}</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-[#F5EFEB] border border-[#DDD3C2] text-xs text-left max-w-sm mx-auto mb-6 space-y-2">
                <div><strong>Site:</strong> {selectedSite}</div>
                <div><strong>Time Window:</strong> {preferredTime}</div>
                <div><strong>Contact Desk:</strong> {contactPhone}</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={customWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Open Confirmation in WhatsApp</span>
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#6F7F72] hover:text-[#19271D] underline"
                >
                  Book another visit
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Site Locations & Trichy Travel Times */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Archampatti Card */}
          <div className="p-6 rounded-3xl bg-[#F5EFEB] border border-[#DDD3C2] shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#2F5C3E]/15 text-[#2F5C3E]">
                Phase 1 · Completed & Established
              </span>
              <span className="text-xs font-mono text-[#8C9C8F]">10.7412° N, 78.6124° E</span>
            </div>

            <h4 className="text-xl font-serif font-bold text-[#142217] mb-2">
              Archampatti Forest Sanctuary
            </h4>
            <p className="text-xs text-[#526355] leading-relaxed mb-4">
              Archampatti, Trichy, Tamil Nadu. Deep red loam soil with established neem, amla, banyan, and sandalwood canopy.
            </p>

            <div className="space-y-2 text-xs text-[#445347] pt-3 border-t border-[#E3DACB]">
              <div className="flex items-center gap-2">
                <Car className="w-3.5 h-3.5 text-[#B85D3B]" />
                <span>28 mins from Trichy Central Bus Stand</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-3.5 h-3.5 text-[#B85D3B]" />
                <span>32 mins from Trichy Railway Junction (TPJ)</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#3B6E47]" />
                <span>40 mins from Trichy International Airport (TRZ)</span>
              </div>
            </div>
          </div>

          {/* Panjappur Card */}
          <div className="p-6 rounded-3xl bg-[#F5EFEB] border border-[#DDD3C2] shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#B85D3B]/15 text-[#B85D3B]">
                Phase 2 · In Progress (2024-2029)
              </span>
              <span className="text-xs font-mono text-[#8C9C8F]">10.7725° N, 78.6841° E</span>
            </div>

            <h4 className="text-xl font-serif font-bold text-[#142217] mb-2">
              Panjappur Forest Sanctuary
            </h4>
            <p className="text-xs text-[#526355] leading-relaxed mb-4">
              Panjappur, Trichy. Prime connectivity to Trichy's upcoming modern transit hub while buffered by lush green paddy corridors.
            </p>

            <div className="space-y-2 text-xs text-[#445347] pt-3 border-t border-[#E3DACB]">
              <div className="flex items-center gap-2">
                <Car className="w-3.5 h-3.5 text-[#B85D3B]" />
                <span>12 mins from Panjappur Integrated Bus Terminal (IBT)</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-3.5 h-3.5 text-[#B85D3B]" />
                <span>18 mins from Trichy International Airport (TRZ)</span>
              </div>
            </div>
          </div>

          {/* Direct Phone / Contact Badge */}
          <div className="p-4 rounded-2xl bg-[#1C3322] text-[#F3EFE6] flex items-center justify-between">
            <div>
              <span className="text-[11px] text-[#A6C5AB] block">Direct Consultation Hotline</span>
              <span className="text-base font-semibold text-white">{contactPhone}</span>
            </div>
            <a
              href={`tel:${contactPhone.replace(/\s+/g, '')}`}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Call Doctor</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
