import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateForestImpact,
  filterTrees,
  getTimelineProgress,
  formatWhatsAppUrl
} from './forestCalculators';
import { TREES_LIST } from '../data/treesData';

test('calculateForestImpact returns valid positive metrics for standard 10,000 sq ft plot', () => {
  const result = calculateForestImpact(10000, 35, 4);

  assert.ok(result.annualOxygenKg > 1000, 'Oxygen generation should exceed 1000 kg/year');
  assert.ok(result.annualCarbonKg > 200, 'Carbon sequestration should exceed 200 kg/year');
  assert.ok(result.tempReductionCelsius >= 2.0 && result.tempReductionCelsius <= 6.5, 'Temp drop should be realistic');
  assert.ok(result.groundwaterRechargeLiters > 100000, 'Groundwater recharge should exceed 100k liters');
  assert.ok(result.phytoncideScore >= 50 && result.phytoncideScore <= 100, 'Phytoncide score within valid 0-100 range');
  assert.ok(result.humanYearsSustainedOxygen >= 1.0, 'Sustains at least 1 person full oxygen');
});

test('calculateForestImpact scales with maturity years', () => {
  const year1 = calculateForestImpact(10000, 35, 1);
  const year7 = calculateForestImpact(10000, 35, 7);

  assert.ok(year7.annualOxygenKg > year1.annualOxygenKg, 'Matured forest produces more oxygen than young saplings');
  assert.ok(year7.tempReductionCelsius >= year1.tempReductionCelsius, 'Matured canopy cools more than young trees');
});

test('filterTrees filters by category and search keyword properly', () => {
  // Test category filter
  const immunityTrees = filterTrees(TREES_LIST, 'Immunity & Lungs', '');
  assert.ok(immunityTrees.length > 0, 'Should return trees in Immunity category');
  assert.ok(immunityTrees.every(t => t.category === 'Immunity & Lungs'), 'All returned trees match category');

  // Test search query for Neem
  const neemSearch = filterTrees(TREES_LIST, 'All', 'Neem');
  assert.ok(neemSearch.length >= 1, 'Should find Neem tree');
  assert.equal(neemSearch[0].name, 'Neem');

  // Test search query for Tamil name
  const vembuSearch = filterTrees(TREES_LIST, 'All', 'வேம்பு');
  assert.ok(vembuSearch.length >= 1, 'Should find tree via Tamil name');

  // Test active compound search
  const moringineSearch = filterTrees(TREES_LIST, 'All', 'Moringine');
  assert.ok(moringineSearch.length >= 1, 'Should find tree via active compound');
});

test('getTimelineProgress computes percentage correctly', () => {
  assert.equal(getTimelineProgress(2022, 2022, 2029), 0);
  assert.equal(getTimelineProgress(2029, 2022, 2029), 100);
  assert.equal(getTimelineProgress(2025, 2022, 2029), 43); // 3 / 7 ~ 43%
  assert.equal(getTimelineProgress(2035, 2022, 2029), 100);
});

test('formatWhatsAppUrl formats clean encoded link', () => {
  const url = formatWhatsAppUrl('+91 98424 26868', 'Hello Tiny Forest!');
  assert.ok(url.startsWith('https://wa.me/919842426868'), 'Cleans non-digit characters from phone');
  assert.ok(url.includes('Hello%20Tiny%20Forest!'), 'Encodes spaces properly');
});
