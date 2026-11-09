/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { TreeCarousel3D } from './components/TreeCarousel3D';
import { GrowthCycleViewer3D } from './components/GrowthCycleViewer3D';
import { DoctorFounderSection } from './components/DoctorFounderSection';
import { SanctuarySitesSection } from './components/SanctuarySitesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import {
  DEFAULT_ADMIN_SETTINGS,
  SiteAdminSettings,
  INITIAL_SITES,
  SiteInfo
} from './data/treesData';
import { formatWhatsAppUrl } from './utils/forestCalculators';
import { MessageCircle } from 'lucide-react';

const ADMIN_STORAGE_KEY = 'tiny_forest_admin_settings_v1';

export default function App() {
  const [adminSettings, setAdminSettings] = useState<SiteAdminSettings>(() => {
    try {
      const stored = localStorage.getItem(ADMIN_STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_ADMIN_SETTINGS, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn('Failed to parse admin settings from localStorage', e);
    }
    return DEFAULT_ADMIN_SETTINGS;
  });

  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [preselectedSiteForWalk, setPreselectedSiteForWalk] = useState('Archampatti Forest Sanctuary');

  // Handle saving new settings into localStorage
  const handleSaveAdminSettings = (newSettings: SiteAdminSettings) => {
    setAdminSettings(newSettings);
    try {
      localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(newSettings));
    } catch (e) {
      console.warn('Failed to save admin settings to localStorage', e);
    }
  };

  // Derive dynamic site availability based on admin settings
  const dynamicSites: SiteInfo[] = INITIAL_SITES.map((site) => {
    if (site.id === 'archampatti') {
      return {
        ...site,
        availablePlots: adminSettings.archampattiAvailablePlots
      };
    }
    if (site.id === 'panjappur') {
      return {
        ...site,
        availablePlots: adminSettings.panjappurAvailablePlots
      };
    }
    return site;
  });

  const handleScheduleWalk = (siteName?: string) => {
    if (siteName) {
      setPreselectedSiteForWalk(siteName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplore3D = () => {
    const elem = document.getElementById('growth-lab');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreTrees = () => {
    const elem = document.getElementById('trees');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePlots = () => {
    const elem = document.getElementById('sanctuaries');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingWhatsAppUrl = formatWhatsAppUrl(
    adminSettings.whatsappNumber,
    adminSettings.whatsappMessage
  );

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#242A24] font-sans selection:bg-[#2C4834] selection:text-[#F3EFE6] flex flex-col justify-between">
      
      {/* Top Navbar */}
      <Navbar
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenContact={() => handleScheduleWalk()}
        whatsappPhone={adminSettings.whatsappNumber}
        whatsappMsg={adminSettings.whatsappMessage}
        announcement={adminSettings.announcementText}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExplore3D={handleExplore3D}
          onExploreTrees={handleExploreTrees}
          onScheduleWalk={() => handleScheduleWalk()}
          onDownloadBrochure={() => setIsBrochureOpen(true)}
          archampattiPlotsLeft={adminSettings.archampattiAvailablePlots}
        />

        {/* 2. Philosophy & World Impact Section (What world are we living in?) */}
        <PhilosophySection onExplorePlots={handleExplorePlots} />

        {/* 3. The 35 Handpicked Trees (3D Infinite Cylindrical Carousel) */}
        <TreeCarousel3D />

        {/* 4. Interactive 3D Growth Lab & Seasonal Cycle Simulator (Three.js) */}
        <section id="growth-lab" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3.5 py-1.5 rounded-full bg-[#EAE3D6] text-[#2F4533] text-xs font-semibold tracking-wider uppercase mb-3 inline-block">
              Interactive Biological Simulation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#142217] leading-tight mb-4">
              Watch The Forest Come Alive (2022 → 2029)
            </h2>
            <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
              Explore how our indigenous tree varieties evolve from fragile seedlings in 2022 to deep-rooted saplings today, and into the towering, self-sustaining forest sanctuary of 2029.
            </p>
          </div>

          <GrowthCycleViewer3D />
        </section>

        {/* 5. The Doctor / Founder Behind The Idea */}
        <DoctorFounderSection customQuote={adminSettings.doctorQuote} />

        {/* 6. The Two Flagship Sites (Archampatti & Panjappur) */}
        <SanctuarySitesSection
          onScheduleWalk={handleScheduleWalk}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          adminSites={dynamicSites}
        />

        {/* 7. Contact Us & Schedule Private Sanctuary Walk */}
        <ContactSection
          contactPhone={adminSettings.contactPhone}
          whatsappPhone={adminSettings.whatsappNumber}
          whatsappMessage={adminSettings.whatsappMessage}
          preselectedSite={preselectedSiteForWalk}
        />
      </main>

      {/* Footer with High-Value Marketing & SEO Keywords */}
      <Footer
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        contactPhone={adminSettings.contactPhone}
        whatsappPhone={adminSettings.whatsappNumber}
        whatsappMessage={adminSettings.whatsappMessage}
      />

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-xs shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
          aria-label="Enquire via WhatsApp with Doctor Forestry Team"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
      </aside>

      {/* Modals */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        contactPhone={adminSettings.contactPhone}
      />

      <AdminPortalModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        currentSettings={adminSettings}
        onSaveSettings={handleSaveAdminSettings}
      />

    </div>
  );
}
