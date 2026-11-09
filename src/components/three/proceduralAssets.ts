import * as THREE from 'three';

/**
 * Creates procedural bark texture using HTML5 2D Canvas.
 * SRGBColorSpace compliant with realistic wood grain rings and organic variation.
 */
export function createProceduralBarkTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Base wood bark tone
    ctx.fillStyle = '#4A3525';
    ctx.fillRect(0, 0, 512, 512);

    // Vertical grain streaks
    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const w = 1 + Math.random() * 3;
      const h = 20 + Math.random() * 80;
      const shade = Math.random() > 0.5 ? '#382619' : '#5C4330';
      ctx.fillStyle = shade;
      ctx.fillRect(x, y, w, h);
    }

    // Organic knot highlights
    for (let k = 0; k < 6; k++) {
      const kx = Math.random() * 512;
      const ky = Math.random() * 512;
      const grad = ctx.createRadialGradient(kx, ky, 2, kx, ky, 18);
      grad.addColorStop(0, '#26180E');
      grad.addColorStop(0.6, '#3D281A');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(kx, ky, 18, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 3);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Creates procedural foliage texture for leaf clusters
 */
export function createProceduralLeafTexture(seasonColor: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.clearRect(0, 0, 256, 256);
    // Draw soft clusters of organic leaf shapes
    ctx.fillStyle = seasonColor;
    for (let i = 0; i < 60; i++) {
      const cx = 128 + (Math.random() - 0.5) * 160;
      const cy = 128 + (Math.random() - 0.5) * 160;
      const r = 16 + Math.random() * 24;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Creates procedural soil / grass ground texture
 */
export function createProceduralGroundTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Red loam soil base
    ctx.fillStyle = '#8B4B32';
    ctx.fillRect(0, 0, 512, 512);

    // Moss / grass flecks and humus
    for (let i = 0; i < 4000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const r = 1 + Math.random() * 2.5;
      const greenTones = ['#4A5E3E', '#3D4D32', '#9C583E', '#5B3525', '#6D5B45'];
      ctx.fillStyle = greenTones[Math.floor(Math.random() * greenTones.length)];
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Concentric soil ring moisture
    const grad = ctx.createRadialGradient(256, 256, 40, 256, 256, 250);
    grad.addColorStop(0, 'rgba(60, 35, 20, 0.4)');
    grad.addColorStop(0.7, 'rgba(40, 60, 35, 0.3)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Creates soft radial contact shadow texture for grounding 3D models
 */
export function createContactShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
    grad.addColorStop(0, 'rgba(15, 20, 15, 0.75)');
    grad.addColorStop(0.4, 'rgba(15, 20, 15, 0.4)');
    grad.addColorStop(0.8, 'rgba(15, 20, 15, 0.1)');
    grad.addColorStop(1, 'rgba(15, 20, 15, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Detects software WebGL renderer (SwiftShader, llvmpipe) for performance guards
 */
export function checkIsSoftwareGl(): boolean {
  if (typeof document === 'undefined') return true;
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  if (!gl) return true;
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
  const gpu = String(gl.getParameter(param));
  gl.getExtension('WEBGL_lose_context')?.loseContext();
  return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
}
