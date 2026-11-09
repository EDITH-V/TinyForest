import * as THREE from 'three';

export type GrowthStage = 0 | 1 | 2 | 3; // 0: Seedling, 1: Sapling, 2: Juvenile (Yr 3), 3: Mature (Yr 7)
export type Season = 'spring' | 'summer' | 'monsoon' | 'autumn';

export interface TreeColors {
  trunk: number;
  leavesPrimary: number;
  leavesSecondary: number;
  leavesHighlight: number;
  blossom?: number;
  fruit?: number;
}

export function getSeasonColors(season: Season): TreeColors {
  switch (season) {
    case 'spring':
      return {
        trunk: 0x4D3728,
        leavesPrimary: 0x5D8A3A,
        leavesSecondary: 0x7CA84A,
        leavesHighlight: 0xA3C962,
        blossom: 0xFFF3D1, // golden champa & white neem blossoms
        fruit: 0x98A84E
      };
    case 'summer':
      return {
        trunk: 0x3E2B1E,
        leavesPrimary: 0x244E29,
        leavesSecondary: 0x2F6836,
        leavesHighlight: 0x45874A,
        fruit: 0xBE5A28 // ripe mango / jamun purple-red
      };
    case 'monsoon':
      return {
        trunk: 0x2E1E14, // dark wet bark
        leavesPrimary: 0x1E542C,
        leavesSecondary: 0x2A6F3B,
        leavesHighlight: 0x3DBA5C, // glowing wet shoots
        blossom: 0xD8EDBA
      };
    case 'autumn':
      return {
        trunk: 0x433023,
        leavesPrimary: 0xBA772A,
        leavesSecondary: 0xD48F32,
        leavesHighlight: 0x9B4E26, // rich Indian almond golden terracotta
        fruit: 0x824921
      };
  }
}

/**
 * Builds a composite 3-12 part procedural Tree group based on Growth Stage & Season.
 * All parts are anchored flush at Y=0 (bottom-center pivot).
 */
export function buildCompositeTree(
  stage: GrowthStage,
  season: Season,
  barkTexture: THREE.CanvasTexture
): THREE.Group {
  const treeGroup = new THREE.Group();
  treeGroup.name = `Tree_Stage_${stage}_Season_${season}`;
  const colors = getSeasonColors(season);

  // Common materials with realistic PBR properties
  const trunkMat = new THREE.MeshStandardMaterial({
    color: colors.trunk,
    map: barkTexture,
    roughness: 0.85,
    metalness: 0.05,
  });

  const leafMatPrimary = new THREE.MeshStandardMaterial({
    color: colors.leavesPrimary,
    roughness: 0.55,
    metalness: 0.08,
    flatShading: true,
  });

  const leafMatSecondary = new THREE.MeshStandardMaterial({
    color: colors.leavesSecondary,
    roughness: 0.5,
    metalness: 0.1,
    flatShading: true,
  });

  const leafMatHighlight = new THREE.MeshStandardMaterial({
    color: colors.leavesHighlight,
    roughness: 0.45,
    metalness: 0.12,
    flatShading: true,
  });

  // Stage 0: Year 0 - Seedling / Sprout (3 distinct parts)
  if (stage === 0) {
    // 1. Sprout stem
    const stemCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.04, 0.3, 0),
      new THREE.Vector3(-0.02, 0.65, 0.02),
      new THREE.Vector3(0, 0.9, 0),
    ]);
    const stemGeom = new THREE.TubeGeometry(stemCurve, 16, 0.035, 8, false);
    const stemMesh = new THREE.Mesh(stemGeom, leafMatHighlight);
    stemMesh.castShadow = true;
    treeGroup.add(stemMesh);

    // 2. Cotyledon leaves (pair)
    const cotyledonGeom = new THREE.SphereGeometry(0.22, 12, 10);
    cotyledonGeom.scale(1.2, 0.25, 0.7);

    const leaf1 = new THREE.Mesh(cotyledonGeom, leafMatPrimary);
    leaf1.position.set(0.16, 0.85, 0.05);
    leaf1.rotation.set(0.2, 0.4, -0.3);
    leaf1.castShadow = true;
    treeGroup.add(leaf1);

    const leaf2 = new THREE.Mesh(cotyledonGeom, leafMatSecondary);
    leaf2.position.set(-0.16, 0.82, -0.05);
    leaf2.rotation.set(-0.2, -0.4, 0.3);
    leaf2.castShadow = true;
    treeGroup.add(leaf2);

    // 3. Young apical bud
    const budGeom = new THREE.ConeGeometry(0.08, 0.2, 8);
    const budMesh = new THREE.Mesh(budGeom, leafMatHighlight);
    budMesh.position.set(0, 0.96, 0);
    treeGroup.add(budMesh);

    return treeGroup;
  }

  // Stage 1: Year 1 - Sapling (5 distinct parts)
  if (stage === 1) {
    // 1. Trunk
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.06, 0.7, 0.02),
      new THREE.Vector3(-0.04, 1.4, -0.03),
      new THREE.Vector3(0, 2.0, 0),
    ]);
    const trunkGeom = new THREE.TubeGeometry(trunkCurve, 20, 0.08, 10, false);
    const trunkMesh = new THREE.Mesh(trunkGeom, trunkMat);
    trunkMesh.castShadow = true;
    treeGroup.add(trunkMesh);

    // 2. Root flare base
    const rootGeom = new THREE.ConeGeometry(0.22, 0.35, 10);
    const rootMesh = new THREE.Mesh(rootGeom, trunkMat);
    rootMesh.position.set(0, 0.15, 0);
    treeGroup.add(rootMesh);

    // 3. Lower canopy cluster
    const c1Geom = new THREE.DodecahedronGeometry(0.65, 1);
    const c1 = new THREE.Mesh(c1Geom, leafMatPrimary);
    c1.position.set(0.35, 1.6, 0.2);
    c1.castShadow = true;
    treeGroup.add(c1);

    // 4. Middle canopy cluster
    const c2 = new THREE.Mesh(c1Geom, leafMatSecondary);
    c2.position.set(-0.35, 1.8, -0.15);
    c2.scale.set(0.9, 0.9, 0.9);
    c2.castShadow = true;
    treeGroup.add(c2);

    // 5. Crown dome
    const c3Geom = new THREE.IcosahedronGeometry(0.75, 1);
    const c3 = new THREE.Mesh(c3Geom, leafMatHighlight);
    c3.position.set(0, 2.3, 0);
    c3.scale.set(1.1, 1.2, 1.1);
    c3.castShadow = true;
    treeGroup.add(c3);

    return treeGroup;
  }

  // Stage 2: Year 3 - Juvenile Tree (8 distinct parts)
  if (stage === 2) {
    // 1. Main fluted trunk
    const trunkGeom = new THREE.CylinderGeometry(0.18, 0.38, 2.8, 14);
    const trunkMesh = new THREE.Mesh(trunkGeom, trunkMat);
    trunkMesh.position.set(0, 1.4, 0);
    trunkMesh.castShadow = true;
    treeGroup.add(trunkMesh);

    // 2. Fluted root buttress flares
    const buttressGeom = new THREE.ConeGeometry(0.65, 0.7, 8);
    const buttress = new THREE.Mesh(buttressGeom, trunkMat);
    buttress.position.set(0, 0.35, 0);
    treeGroup.add(buttress);

    // 3 & 4. Primary architectural branches
    const b1Geom = new THREE.CylinderGeometry(0.08, 0.14, 1.4, 8);
    const b1 = new THREE.Mesh(b1Geom, trunkMat);
    b1.position.set(0.45, 2.5, 0.2);
    b1.rotation.set(0.4, 0.2, -0.6);
    b1.castShadow = true;
    treeGroup.add(b1);

    const b2 = new THREE.Mesh(b1Geom, trunkMat);
    b2.position.set(-0.45, 2.4, -0.2);
    b2.rotation.set(-0.4, -0.2, 0.65);
    b2.castShadow = true;
    treeGroup.add(b2);

    // 5, 6, 7. Layered Canopy Domes
    const domeGeom = new THREE.DodecahedronGeometry(1.2, 1);

    const canopy1 = new THREE.Mesh(domeGeom, leafMatPrimary);
    canopy1.position.set(-0.7, 3.1, -0.3);
    canopy1.scale.set(1.0, 0.85, 1.1);
    canopy1.castShadow = true;
    treeGroup.add(canopy1);

    const canopy2 = new THREE.Mesh(domeGeom, leafMatSecondary);
    canopy2.position.set(0.7, 3.2, 0.3);
    canopy2.scale.set(1.15, 0.9, 1.0);
    canopy2.castShadow = true;
    treeGroup.add(canopy2);

    const canopyTop = new THREE.Mesh(domeGeom, leafMatHighlight);
    canopyTop.position.set(0, 3.9, 0);
    canopyTop.scale.set(1.3, 1.1, 1.3);
    canopyTop.castShadow = true;
    treeGroup.add(canopyTop);

    // 8. Seasonal accents (fruits or blossoms)
    if (colors.blossom || colors.fruit) {
      const accentGeom = new THREE.SphereGeometry(0.12, 8, 8);
      const accentMat = new THREE.MeshStandardMaterial({
        color: colors.blossom || colors.fruit || 0xFFF3D1,
        roughness: 0.4,
        metalness: 0.1
      });
      for (let i = 0; i < 8; i++) {
        const acc = new THREE.Mesh(accentGeom, accentMat);
        const theta = (i / 8) * Math.PI * 2;
        acc.position.set(
          Math.cos(theta) * 1.1 + (Math.random() - 0.5) * 0.3,
          3.2 + Math.sin(theta) * 0.6,
          Math.sin(theta) * 1.1 + (Math.random() - 0.5) * 0.3
        );
        treeGroup.add(acc);
      }
    }

    return treeGroup;
  }

  // Stage 3: Year 7 - Mature Forest Sanctuary Canopy (2029 Vision: 11 distinct parts)
  // 1. Massive monolithic fluted trunk
  const trunkGeom = new THREE.CylinderGeometry(0.35, 0.72, 3.6, 16);
  const trunkMesh = new THREE.Mesh(trunkGeom, trunkMat);
  trunkMesh.position.set(0, 1.8, 0);
  trunkMesh.castShadow = true;
  treeGroup.add(trunkMesh);

  // 2. Sculptural buttressed root fluting flush on ground
  const buttressGeom = new THREE.ConeGeometry(1.2, 1.1, 10);
  const buttress = new THREE.Mesh(buttressGeom, trunkMat);
  buttress.position.set(0, 0.55, 0);
  treeGroup.add(buttress);

  // 3, 4, 5. Three heavy structural boughs
  const branchGeom = new THREE.CylinderGeometry(0.14, 0.28, 2.2, 10);

  const br1 = new THREE.Mesh(branchGeom, trunkMat);
  br1.position.set(0.85, 3.4, 0.3);
  br1.rotation.set(0.3, 0.1, -0.75);
  br1.castShadow = true;
  treeGroup.add(br1);

  const br2 = new THREE.Mesh(branchGeom, trunkMat);
  br2.position.set(-0.85, 3.3, -0.3);
  br2.rotation.set(-0.2, -0.2, 0.75);
  br2.castShadow = true;
  treeGroup.add(br2);

  const br3 = new THREE.Mesh(branchGeom, trunkMat);
  br3.position.set(0.1, 3.6, -0.85);
  br3.rotation.set(0.75, 0, 0);
  br3.castShadow = true;
  treeGroup.add(br3);

  // 6, 7, 8, 9, 10. Multi-tiered expansive canopy volume domes
  const canopySphereGeom = new THREE.DodecahedronGeometry(1.6, 1);

  const cTier1 = new THREE.Mesh(canopySphereGeom, leafMatPrimary);
  cTier1.position.set(1.4, 4.4, 0.5);
  cTier1.scale.set(1.3, 0.95, 1.2);
  cTier1.castShadow = true;
  treeGroup.add(cTier1);

  const cTier2 = new THREE.Mesh(canopySphereGeom, leafMatSecondary);
  cTier2.position.set(-1.4, 4.3, -0.4);
  cTier2.scale.set(1.35, 1.0, 1.25);
  cTier2.castShadow = true;
  treeGroup.add(cTier2);

  const cTier3 = new THREE.Mesh(canopySphereGeom, leafMatPrimary);
  cTier3.position.set(0.2, 4.5, -1.3);
  cTier3.scale.set(1.2, 0.9, 1.3);
  cTier3.castShadow = true;
  treeGroup.add(cTier3);

  const cTier4 = new THREE.Mesh(canopySphereGeom, leafMatHighlight);
  cTier4.position.set(-0.2, 4.6, 1.2);
  cTier4.scale.set(1.25, 0.95, 1.2);
  cTier4.castShadow = true;
  treeGroup.add(cTier4);

  const cTierTop = new THREE.Mesh(canopySphereGeom, leafMatHighlight);
  cTierTop.position.set(0, 5.5, 0);
  cTierTop.scale.set(1.7, 1.3, 1.7);
  cTierTop.castShadow = true;
  treeGroup.add(cTierTop);

  // 11. Abundant seasonal fruits or blossoms
  const accentGeom = new THREE.SphereGeometry(0.16, 8, 8);
  const accentMat = new THREE.MeshStandardMaterial({
    color: colors.blossom || colors.fruit || 0xFFE082,
    roughness: 0.35,
    metalness: 0.15,
  });

  for (let i = 0; i < 16; i++) {
    const acc = new THREE.Mesh(accentGeom, accentMat);
    const theta = (i / 16) * Math.PI * 2;
    const r = 1.4 + Math.sin(i * 3) * 0.4;
    acc.position.set(
      Math.cos(theta) * r,
      4.0 + Math.cos(i * 2) * 1.2,
      Math.sin(theta) * r
    );
    treeGroup.add(acc);
  }

  return treeGroup;
}
