import { TreeData } from '../data/treesData';

export interface ForestImpactResult {
  annualOxygenKg: number;
  annualCarbonKg: number;
  tempReductionCelsius: number;
  groundwaterRechargeLiters: number;
  phytoncideScore: number;
  cortisolReductionPct: number;
  nativeBirdSpeciesSupported: number;
  humanYearsSustainedOxygen: number;
}

/**
 * Calculates environmental and biological wellness metrics for a given plot size,
 * tree count, and maturity index (from 0 to 1).
 */
export function calculateForestImpact(
  plotSqFt: number = 10000,
  treeCount: number = 35,
  yearsMatured: number = 4
): ForestImpactResult {
  // Safe bounds
  const clampedSqFt = Math.max(1000, plotSqFt);
  const clampedTrees = Math.max(5, treeCount);
  const clampedYears = Math.min(10, Math.max(0, yearsMatured));

  // Maturity scaling factor: Year 0 = 0.25, Year 7 = 1.0, Year 10 = 1.2
  const maturityFactor = Math.min(1.25, 0.25 + (clampedYears / 7) * 0.75);

  // A mature native tropical tree generates ~118 kg oxygen/year.
  // One human consumes ~740 kg oxygen/year.
  const baseOxygenPerTree = 118;
  const annualOxygenKg = Math.round(clampedTrees * baseOxygenPerTree * maturityFactor);
  const humanYearsSustainedOxygen = Number((annualOxygenKg / 740).toFixed(1));

  // A mature tree sequesters ~22 kg CO2 per year
  const annualCarbonKg = Math.round(clampedTrees * 22 * maturityFactor);

  // Microclimate temperature drop: 10000 sq ft dense canopy drops temp by 3 to 6°C
  const baseTempDrop = (clampedTrees / 35) * 4.5 * maturityFactor;
  const tempReductionCelsius = Number(Math.min(6.5, Math.max(1.5, baseTempDrop)).toFixed(1));

  // Groundwater recharge: in Trichy Kaveri delta (~850mm rainfall),
  // 10,000 sq ft canopy and deep root channels recharge ~240,000 Liters/year
  const rainfallMeters = 0.85;
  const areaSqMeters = clampedSqFt * 0.092903;
  const catchmentEfficiency = 0.75 * maturityFactor;
  const groundwaterRechargeLiters = Math.round(areaSqMeters * rainfallMeters * 1000 * catchmentEfficiency);

  // Phytoncide density (essential healing volatile score out of 100)
  const phytoncideScore = Math.min(100, Math.round(40 + (clampedTrees / 35) * 35 + maturityFactor * 25));

  // Stress cortisol reduction scientifically associated with regular forest canopy exposure
  const cortisolReductionPct = Math.min(42, Math.round(18 + maturityFactor * 20));

  // Native birds and pollinators supported by 35 varieties
  const nativeBirdSpeciesSupported = Math.round(12 + (clampedTrees / 35) * 18 * maturityFactor);

  return {
    annualOxygenKg,
    annualCarbonKg,
    tempReductionCelsius,
    groundwaterRechargeLiters,
    phytoncideScore,
    cortisolReductionPct,
    nativeBirdSpeciesSupported,
    humanYearsSustainedOxygen
  };
}

/**
 * Filter trees by category and search keyword
 */
export function filterTrees(
  trees: TreeData[],
  selectedCategory: string,
  searchQuery: string
): TreeData[] {
  const query = searchQuery.trim().toLowerCase();

  return trees.filter((tree) => {
    const matchesCategory =
      selectedCategory === 'All' || tree.category === selectedCategory;

    if (!matchesCategory) return false;
    if (!query) return true;

    return (
      tree.name.toLowerCase().includes(query) ||
      tree.tamilName.toLowerCase().includes(query) ||
      tree.botanicalName.toLowerCase().includes(query) ||
      tree.shortBenefit.toLowerCase().includes(query) ||
      tree.activeCompounds.some((c) => c.toLowerCase().includes(query))
    );
  });
}

/**
 * Calculates project milestone progress percentage (e.g., 2022 to 2029)
 */
export function getTimelineProgress(
  currentYear: number = 2026,
  startYear: number = 2022,
  endYear: number = 2029
): number {
  if (currentYear <= startYear) return 0;
  if (currentYear >= endYear) return 100;
  return Math.round(((currentYear - startYear) / (endYear - startYear)) * 100);
}

/**
 * Formats a clean WhatsApp click-to-chat URL
 */
export function formatWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}
