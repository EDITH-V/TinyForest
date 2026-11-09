import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import {
  createProceduralBarkTexture,
  createProceduralGroundTexture,
  createContactShadowTexture,
  checkIsSoftwareGl
} from './three/proceduralAssets';
import {
  buildCompositeTree,
  GrowthStage,
  Season,
  getSeasonColors
} from './three/proceduralTree';
import { Sprout, Sun, CloudRain, Wind, Sparkles, ChevronDown, ChevronUp, RotateCw, Eye } from 'lucide-react';

interface StageMeta {
  stage: GrowthStage;
  yearLabel: string;
  title: string;
  description: string;
  canopySpread: string;
  rootDepth: string;
  oxygenYield: string;
  healthAction: string;
}

const STAGES: StageMeta[] = [
  {
    stage: 0,
    yearLabel: '2022 · Day 0',
    title: 'Pioneer Sprout & Soil Awakening',
    description: 'Seedlings planted in Kaveri alluvial red loam. Microbial fungal networks connect to tap subterranean moisture.',
    canopySpread: '0.4 m',
    rootDepth: '0.8 m vertical taproot',
    oxygenYield: '25 kg/yr',
    healthAction: 'Emits gentle phytoncides as early defense against pathogens'
  },
  {
    stage: 1,
    yearLabel: '2023-2024 · Year 1',
    title: 'Sapling Vigour & Ground Shading',
    description: 'Sturdy root fluting anchors the sapling. Dappled ground shade begins lowering soil surface evaporation by 45%.',
    canopySpread: '1.8 m',
    rootDepth: '2.2 m anchored',
    oxygenYield: '65 kg/yr',
    healthAction: 'Continuous negative ion generation cools the pedestrian walkway'
  },
  {
    stage: 2,
    yearLabel: '2025-2026 · Year 3',
    title: 'Juvenile Canopy & Microclimate Genesis',
    description: 'Archampatti Phase 1 current stage. Broad tiered boughs interlock with companion trees to create a cool micro-bubble.',
    canopySpread: '4.5 m',
    rootDepth: '4.8 m subsoil reach',
    oxygenYield: '140 kg/yr',
    healthAction: 'Microclimate drop of -3.2°C; abundant medicinal leaves & bark harvest'
  },
  {
    stage: 3,
    yearLabel: '2029 Vision · Year 7',
    title: 'Self-Sustaining Forest Sanctuary',
    description: 'The crowning milestone of our 7-year patient cultivation. A majestic self-mulching, self-cooling living ecosystem sheltering your home.',
    canopySpread: '9.0 - 14.0 m',
    rootDepth: '8.5 m deep aquifer anchor',
    oxygenYield: '280+ kg/yr',
    healthAction: 'True Forest Bathing (Shinrin-yoku): 40% cortisol reduction and pristine oxygen dome'
  }
];

export const GrowthCycleViewer3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<GrowthStage>(2); // Default to Year 3 (Current project stage)
  const [season, setSeason] = useState<Season>('monsoon');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  // References to keep mutable Three.js instances stable without tearing down WebGL
  const treeRef = useRef<THREE.Group | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const barkTexRef = useRef<THREE.CanvasTexture | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 560;

    const isSoftwareGl = checkIsSoftwareGl();

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xF5EFEB);
    scene.fog = new THREE.FogExp2(0xF5EFEB, 0.04);

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 9.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.replaceChildren(renderer.domElement);

    // Studio Environment map (procedural RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Studio Lighting Rig (Key + Hemisphere + Ground fill)
    const hemiLight = new THREE.HemisphereLight(0xF4EFEA, 0x334433, 1.2);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xFFF6E5, 2.4);
    dirLight.position.set(6, 12, 7);
    dirLight.castShadow = !isSoftwareGl;
    if (dirLight.shadow) {
      dirLight.shadow.mapSize.width = 1024;
      dirLight.shadow.mapSize.height = 1024;
      dirLight.shadow.camera.near = 0.5;
      dirLight.shadow.camera.far = 30;
      const d = 6;
      dirLight.shadow.camera.left = -d;
      dirLight.shadow.camera.right = d;
      dirLight.shadow.camera.top = d;
      dirLight.shadow.camera.bottom = -d;
      dirLight.shadow.bias = -0.0005;
    }
    scene.add(dirLight);

    // Warm soft back rim light
    const rimLight = new THREE.DirectionalLight(0xD8EDBA, 0.9);
    rimLight.position.set(-6, 8, -6);
    scene.add(rimLight);

    // Ground Disc (Red loam + moss procedural texture)
    const groundTex = createProceduralGroundTexture();
    const groundMat = new THREE.MeshStandardMaterial({
      map: groundTex,
      roughness: 0.9,
      metalness: 0.02,
    });
    const groundGeom = new THREE.CylinderGeometry(5.5, 5.8, 0.3, 32);
    const groundMesh = new THREE.Mesh(groundGeom, groundMat);
    groundMesh.position.set(0, -0.15, 0);
    groundMesh.receiveShadow = !isSoftwareGl;
    scene.add(groundMesh);

    // Ground Contact Shadow Plane flush at Y=0.01
    const shadowTex = createContactShadowTexture();
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    const shadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = 0.01;
    scene.add(shadowPlane);

    // Procedural Bark Texture
    const barkTex = createProceduralBarkTexture();
    barkTexRef.current = barkTex;

    // Build initial tree
    const initialTree = buildCompositeTree(stage, season, barkTex);
    scene.add(initialTree);
    treeRef.current = initialTree;

    // Atmospheric Particle System (Leaves / Rain / Pollen)
    const particleCount = 120;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = Math.random() * 6 + 0.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      velocities[i * 3] = (Math.random() - 0.5) * 0.015;
      velocities[i * 3 + 1] = -0.01 - Math.random() * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x4A8A52,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.05;
    controls.minDistance = 4;
    controls.maxDistance = 14;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Don't go below ground plane
    controls.target.set(0, 2.2, 0);
    controlsRef.current = controls;

    // Animation / Render loop with Software-WebGL safety
    let frameId = 0;
    let lastTime = performance.now();

    function tick() {
      const now = performance.now();
      const delta = Math.min(0.08, (now - lastTime) / 1000);
      lastTime = now;
      const elapsedTime = now / 1000;

      controls.update();

      // Gentle auto-rotation of tree group when active
      if (treeRef.current && autoRotate) {
        treeRef.current.rotation.y += delta * 0.18;
      }

      // Animate particles
      if (particlesRef.current) {
        const posAttr = particlesRef.current.geometry.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          posArray[i * 3 + 1] += velocities[i * 3 + 1];
          posArray[i * 3] += velocities[i * 3] + Math.sin(elapsedTime + i) * 0.003;

          // Recycle particle once fallen to ground
          if (posArray[i * 3 + 1] < 0.1) {
            posArray[i * 3 + 1] = 6.2;
            posArray[i * 3] = (Math.random() - 0.5) * 8;
            posArray[i * 3 + 2] = (Math.random() - 0.5) * 8;
          }
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        // Pace software GL frames to prevent CPU starvation
        frameId = window.setTimeout(tick, 60);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    }

    tick();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (isSoftwareGl) {
        clearTimeout(frameId);
      } else {
        cancelAnimationFrame(frameId);
      }
      controls.dispose();
      renderer.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      groundGeom.dispose();
      groundMat.dispose();
    };
  }, []);

  // Update procedural tree model smoothly when stage or season changes
  useEffect(() => {
    if (!sceneRef.current || !barkTexRef.current) return;

    if (treeRef.current) {
      sceneRef.current.remove(treeRef.current);
      // Clean up previous geometries/materials
      treeRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry?.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material?.dispose();
          }
        }
      });
    }

    const newTree = buildCompositeTree(stage, season, barkTexRef.current);
    sceneRef.current.add(newTree);
    treeRef.current = newTree;

    // Adjust particle appearance for seasons
    if (particlesRef.current) {
      const colors = getSeasonColors(season);
      const mat = particlesRef.current.material as THREE.PointsMaterial;
      if (season === 'monsoon') {
        mat.color.setHex(0x7EA5B8); // Rain blue-grey
        mat.size = 0.05;
      } else if (season === 'spring') {
        mat.color.setHex(colors.blossom || 0xFFF3D1); // Floating blossoms
        mat.size = 0.09;
      } else if (season === 'autumn') {
        mat.color.setHex(0xC27A2A); // Golden ochre leaves
        mat.size = 0.08;
      } else {
        mat.color.setHex(0x567E48); // Green motes
        mat.size = 0.07;
      }
    }
  }, [stage, season]);

  const currentMeta = STAGES[stage];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[#DCD5CA] bg-[#F5EFEB] shadow-xl">
      {/* 3D Scene Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-[520px] sm:h-[600px] cursor-grab active:cursor-grabbing"
        data-testid="growth-simulator-3d"
      />

      {/* Top Overlay Badge */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-1 pointer-events-none z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B3322]/90 text-[#F5EFEB] text-xs font-semibold tracking-wide shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
          <span>Interactive 3D Forest Growth Lab</span>
        </div>
        <p className="text-xs text-[#5C6B5E] font-medium tracking-tight bg-white/70 backdrop-blur-none px-2 py-0.5 rounded-md inline-block">
          Drag to Orbit · Scroll to Zoom · Witness 7-Year Biological Maturation
        </p>
      </div>

      {/* Auto-rotate & Reset Camera controls */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-10">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded-full border text-xs flex items-center gap-1.5 font-medium transition-colors ${
            autoRotate
              ? 'bg-[#1B3322] text-white border-[#1B3322]'
              : 'bg-white/90 text-[#3B473D] border-[#D6CFC4] hover:bg-white'
          }`}
          title="Toggle rotation"
          aria-label="Toggle camera rotation"
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          <span className="hidden sm:inline">{autoRotate ? 'Rotating' : 'Paused'}</span>
        </button>
      </div>

      {/* Collapsible Ergonomic Bottom Control Dock (Three.js skill directive compliant) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[94%] max-w-4xl z-20">
        <div className="bg-[#1C2A1F]/95 text-[#F5EFEB] rounded-2xl p-4 sm:p-5 shadow-2xl border border-[#354838]">
          {/* Header row with collapse toggle */}
          <div className="flex items-center justify-between gap-3 border-b border-[#2D3E30] pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded bg-[#C29B38] text-[#132218] text-xs font-bold uppercase tracking-wider">
                {currentMeta.yearLabel}
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide truncate">
                {currentMeta.title}
              </h3>
            </div>

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="inline-flex items-center gap-1 text-xs text-[#A9B8AB] hover:text-white px-2.5 py-1 rounded bg-[#253528] transition-colors"
              aria-label={isCollapsed ? 'Show 3D Growth Details' : 'Hide 3D Growth Details'}
            >
              <span>{isCollapsed ? 'Expand Specs' : 'Collapse'}</span>
              {isCollapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Collapsible Info Cards */}
          {!isCollapsed && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-4 text-xs">
              <div className="bg-[#131E15] p-2.5 rounded-lg border border-[#243527]">
                <span className="text-[#8B9D8E] block text-[11px]">Canopy Spread</span>
                <span className="font-semibold text-white text-sm">{currentMeta.canopySpread}</span>
              </div>
              <div className="bg-[#131E15] p-2.5 rounded-lg border border-[#243527]">
                <span className="text-[#8B9D8E] block text-[11px]">Root Depth</span>
                <span className="font-semibold text-white text-sm">{currentMeta.rootDepth}</span>
              </div>
              <div className="bg-[#131E15] p-2.5 rounded-lg border border-[#243527]">
                <span className="text-[#8B9D8E] block text-[11px]">Oxygen Yield</span>
                <span className="font-semibold text-[#8FD99A] text-sm">{currentMeta.oxygenYield}</span>
              </div>
              <div className="bg-[#131E15] p-2.5 rounded-lg border border-[#243527]">
                <span className="text-[#8B9D8E] block text-[11px]">Biological Impact</span>
                <span className="font-medium text-[#E0D7C9] text-[11px] line-clamp-2">{currentMeta.healthAction}</span>
              </div>
            </div>
          )}

          {/* Interactive Controls Bar: Growth Stage & Season */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
            {/* Growth Stages Buttons */}
            <div className="flex items-center gap-1 bg-[#121B14] p-1 rounded-xl border border-[#263729]">
              <span className="text-[11px] text-[#8B9D8E] font-medium px-2 hidden md:inline">Growth:</span>
              {STAGES.map((s) => (
                <button
                  key={s.stage}
                  onClick={() => setStage(s.stage)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    stage === s.stage
                      ? 'bg-[#3B6E47] text-white shadow-sm'
                      : 'text-[#A2B3A4] hover:text-white hover:bg-[#1D2B20]'
                  }`}
                  aria-pressed={stage === s.stage}
                >
                  {s.stage === 0 && 'Year 0 (Seedling)'}
                  {s.stage === 1 && 'Year 1 (Sapling)'}
                  {s.stage === 2 && 'Year 3 (Current)'}
                  {s.stage === 3 && 'Year 7 (2029 Vision)'}
                </button>
              ))}
            </div>

            {/* Season Selector Buttons */}
            <div className="flex items-center gap-1 bg-[#121B14] p-1 rounded-xl border border-[#263729]">
              <span className="text-[11px] text-[#8B9D8E] font-medium px-2 hidden md:inline">Season:</span>
              <button
                onClick={() => setSeason('spring')}
                className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  season === 'spring' ? 'bg-[#C29B38] text-[#132218] font-bold' : 'text-[#A2B3A4] hover:text-white'
                }`}
                title="Spring: Blossoms & Tender Shoots"
              >
                <Sprout className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Spring</span>
              </button>
              <button
                onClick={() => setSeason('summer')}
                className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  season === 'summer' ? 'bg-[#C29B38] text-[#132218] font-bold' : 'text-[#A2B3A4] hover:text-white'
                }`}
                title="Summer: Dense Canopy & Fruit Shading"
              >
                <Sun className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Summer</span>
              </button>
              <button
                onClick={() => setSeason('monsoon')}
                className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  season === 'monsoon' ? 'bg-[#C29B38] text-[#132218] font-bold' : 'text-[#A2B3A4] hover:text-white'
                }`}
                title="Monsoon: Deep Hydration & Aquifer Recharge"
              >
                <CloudRain className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Monsoon</span>
              </button>
              <button
                onClick={() => setSeason('autumn')}
                className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  season === 'autumn' ? 'bg-[#C29B38] text-[#132218] font-bold' : 'text-[#A2B3A4] hover:text-white'
                }`}
                title="Autumn: Golden Foliage & Soil Mulch"
              >
                <Wind className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Autumn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
