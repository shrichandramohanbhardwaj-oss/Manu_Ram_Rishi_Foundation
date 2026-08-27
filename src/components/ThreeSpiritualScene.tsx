import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeSpiritualScene: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Ambient Lighting & Colored Point Lights
    const ambientLight = new THREE.AmbientLight(0x0c274c, 2.5);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00e5ff, 4, 60);
    cyanLight.position.set(-15, 10, 10);
    scene.add(cyanLight);

    const goldLight = new THREE.PointLight(0xf59e0b, 5, 60);
    goldLight.position.set(15, -10, 10);
    scene.add(goldLight);

    // 2. Cosmic Divine Light Particles
    const particleCount = 700;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    // Mystic palette: Shyam blue, peacock cyan, golden amber, soft white
    const palette = [
      new THREE.Color(0x00e5ff), // Cyan
      new THREE.Color(0xf59e0b), // Amber gold
      new THREE.Color(0x14b8a6), // Teal
      new THREE.Color(0x38bdf8), // Sky blue
      new THREE.Color(0xfde047), // Soft gold
    ];

    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 55;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 35;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colorArray[i * 3] = c.r;
      colorArray[i * 3 + 1] = c.g;
      colorArray[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    // Particle texture generator (soft round glowing star)
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.3, 'rgba(0, 229, 255, 0.8)');
        grad.addColorStop(0.7, 'rgba(13, 148, 136, 0.2)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMat = new THREE.PointsMaterial({
      size: 0.55,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      map: createCircleTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // 3. Floating 3D Lotus Petals
    const createPetalShape = () => {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.bezierCurveTo(0.6, 0.8, 0.8, 1.8, 0, 2.5);
      shape.bezierCurveTo(-0.8, 1.8, -0.6, 0.8, 0, 0);
      return shape;
    };

    const petalShape = createPetalShape();
    const petalExtrudeSettings = {
      depth: 0.05,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.04,
      bevelThickness: 0.04,
    };
    const petalGeometry = new THREE.ExtrudeGeometry(petalShape, petalExtrudeSettings);

    const petalColors = [0xf472b6, 0xfb7185, 0xfcd34d, 0x38bdf8, 0xa78bfa];
    const petals: {
      mesh: THREE.Mesh;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      driftSpeedY: number;
      driftSpeedX: number;
      originalX: number;
    }[] = [];

    const petalCount = 35;
    for (let i = 0; i < petalCount; i++) {
      const color = petalColors[i % petalColors.length];
      const petalMat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.35,
        metalness: 0.2,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide,
      });

      const petalMesh = new THREE.Mesh(petalGeometry, petalMat);
      const scale = 0.45 + Math.random() * 0.55;
      petalMesh.scale.set(scale, scale, scale);

      petalMesh.position.x = (Math.random() - 0.5) * 45;
      petalMesh.position.y = (Math.random() - 0.5) * 30;
      petalMesh.position.z = (Math.random() - 0.5) * 20;

      petalMesh.rotation.x = Math.random() * Math.PI * 2;
      petalMesh.rotation.y = Math.random() * Math.PI * 2;
      petalMesh.rotation.z = Math.random() * Math.PI * 2;

      mainGroup.add(petalMesh);

      petals.push({
        mesh: petalMesh,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        rotSpeedZ: (Math.random() - 0.5) * 0.01,
        driftSpeedY: -0.012 - Math.random() * 0.015,
        driftSpeedX: (Math.random() - 0.5) * 0.008,
        originalX: petalMesh.position.x,
      });
    }

    // 4. Glowing Sacred Geometry Rings (Mandala/Aura)
    const ringGeo1 = new THREE.TorusGeometry(8, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.position.set(0, 2, -6);
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(11, 0.03, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.position.set(0, 2, -7);
    mainGroup.add(ring2);

    // Mouse movement parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.001;
      mouseY = (e.clientY - windowHalfY) * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Window resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = targetX * 1.5;
      mainGroup.rotation.x = targetY * 1.2;

      // Animate particles
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

      // Animate rings
      ring1.rotation.z = elapsedTime * 0.08;
      ring2.rotation.z = -elapsedTime * 0.06;

      // Animate floating petals
      petals.forEach((p) => {
        p.mesh.rotation.x += p.rotSpeedX;
        p.mesh.rotation.y += p.rotSpeedY;
        p.mesh.rotation.z += p.rotSpeedZ;

        p.mesh.position.y += p.driftSpeedY;
        p.mesh.position.x += Math.sin(elapsedTime + p.originalX) * 0.01;

        // Reset if drifted below
        if (p.mesh.position.y < -20) {
          p.mesh.position.y = 20;
          p.mesh.position.x = (Math.random() - 0.5) * 45;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      petalGeometry.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden z-10 ${className}`}
      aria-hidden="true"
    />
  );
};
