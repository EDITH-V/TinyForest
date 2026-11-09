import React, { useState } from 'react';
import { SiteAdminSettings, DEFAULT_ADMIN_SETTINGS } from '../data/treesData';
import { X, Save, RotateCcw, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSettings: SiteAdminSettings;
  onSaveSettings: (newSettings: SiteAdminSettings) => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  currentSettings,
  onSaveSettings
}) => {
  const [formData, setFormData] = useState<SiteAdminSettings>(currentSettings);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof SiteAdminSettings, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveSettings(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setFormData(DEFAULT_ADMIN_SETTINGS);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D5CDC0] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#EAE3D6] text-[#334235] hover:bg-[#DDD2C2] transition-colors"
          aria-label="Close Admin Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#EAE2D5] text-[#2F4533] text-xs font-semibold w-max mb-3">
          <ShieldCheck className="w-4 h-4 text-[#C29B38]" />
          <span>Doctor / Site Owner Admin Portal</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#142217] mb-1">
          Live Website Content Manager
        </h3>
        <p className="text-xs sm:text-sm text-[#5C6D5F] mb-6">
          Update site availability, announcement ticker, contact numbers, and doctor's quotes in real-time. Changes are stored in browser local storage and update immediately without modifying code.
        </p>

        <form onSubmit={handleSave} className="space-y-5">
          {/* Section: Plot Inventory */}
          <div className="p-4 rounded-2xl bg-[#F3EDE2] border border-[#E3D9C9] space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2F4533] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Plot Availability (~10,000 SQFT plots)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#38483B] mb-1">
                  Archampatti Available Plots (Phase 1)
                </label>
                <input
                  type="number"
                  min="0"
                  max="12"
                  value={formData.archampattiAvailablePlots}
                  onChange={(e) => handleChange('archampattiAvailablePlots', parseInt(e.target.value) || 0)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CDC0] text-xs sm:text-sm font-semibold text-[#19271D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#38483B] mb-1">
                  Panjappur Available Plots (Phase 2)
                </label>
                <input
                  type="number"
                  min="0"
                  max="16"
                  value={formData.panjappurAvailablePlots}
                  onChange={(e) => handleChange('panjappurAvailablePlots', parseInt(e.target.value) || 0)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CDC0] text-xs sm:text-sm font-semibold text-[#19271D]"
                />
              </div>
            </div>
          </div>

          {/* Section: Top Announcement Bar */}
          <div>
            <label className="block text-xs font-semibold text-[#38483B] mb-1">
              Top Announcement Ticker
            </label>
            <input
              type="text"
              value={formData.announcementText}
              onChange={(e) => handleChange('announcementText', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CDC0] text-xs sm:text-sm focus:ring-2 focus:ring-[#3B6E47] text-[#19271D]"
            />
            <span className="text-[11px] text-[#78887A] block mt-1">
              Set empty to hide the top announcement ticker completely.
            </span>
          </div>

          {/* Section: Contact & WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#38483B] mb-1">
                Display Phone Number
              </label>
              <input
                type="text"
                value={formData.contactPhone}
                onChange={(e) => handleChange('contactPhone', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CDC0] text-xs sm:text-sm text-[#19271D]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#38483B] mb-1">
                WhatsApp Phone (Country Code + Digits)
              </label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CDC0] text-xs sm:text-sm text-[#19271D]"
              />
            </div>
          </div>

          {/* Section: WhatsApp Default Message */}
          <div>
            <label className="block text-xs font-semibold text-[#38483B] mb-1">
              Default WhatsApp Enquiry Message
            </label>
            <input
              type="text"
              value={formData.whatsappMessage}
              onChange={(e) => handleChange('whatsappMessage', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CDC0] text-xs sm:text-sm text-[#19271D]"
            />
          </div>

          {/* Section: Doctor Quote */}
          <div>
            <label className="block text-xs font-semibold text-[#38483B] mb-1">
              Doctor Founder Manifesto Quote
            </label>
            <textarea
              rows={3}
              value={formData.doctorQuote}
              onChange={(e) => handleChange('doctorQuote', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5CDC0] text-xs sm:text-sm text-[#19271D]"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#E5DDCF]">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-semibold text-[#8C472E] hover:underline flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white border border-[#D5CDC0] text-xs font-semibold text-[#445547]"
              >
                Cancel
              </button>

              <button
                type="submit"
                className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                  savedSuccess ? 'bg-[#2F6B38]' : 'bg-[#1C3322] hover:bg-[#284831]'
                }`}
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-[#8FD99A]" />
                    <span>Saved to Live Site!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 text-[#C29B38]" />
                    <span>Save & Update Website</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
