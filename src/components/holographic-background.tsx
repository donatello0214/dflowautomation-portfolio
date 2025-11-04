'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { useTheme } from 'next-themes';

const HolographicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return;

    let scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        renderer: THREE.WebGLRenderer,
        composer: EffectComposer,
        particles: THREE.Points,
        linesMesh: THREE.LineSegments;

    let mouseX = 0,
        mouseY = 0,
        scrollY = 0;
    
    const particleCount = 250;
    const maxDistance = 90;

    let animationFrameId: number;

    const init = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        65,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 200;

      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 400;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const particleColor = theme === 'dark' ? 0x00e7ff : 0x0077ff;
      const material = new THREE.PointsMaterial({
        color: particleColor,
        size: 2,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });
      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      const lineMaterial = new THREE.LineBasicMaterial({
        color: particleColor,
        transparent: true,
        opacity: 0.25,
      });
      const lineGeometry = new THREE.BufferGeometry();
      linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(linesMesh);

      // Post-processing bloom
      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.2,
        0.4,
        0.85
      );
      bloomPass.threshold = 0;
      bloomPass.strength = theme === 'dark' ? 1.4 : 0.8;
      bloomPass.radius = 0;

      composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);

      document.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onWindowResize);
      window.addEventListener('scroll', onScroll);

      animate();
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.002;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.002;
    };

    const onScroll = () => {
      scrollY = window.scrollY || document.documentElement.scrollTop;
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!particles || !linesMesh) return;

      camera.position.x += (mouseX * 100 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 100 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.02;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      const hue = (scrollY * 0.1 + Date.now() * 0.01) % 360;
      const saturation = theme === 'dark' ? '100%' : '80%';
      const lightness = theme === 'dark' ? '60%' : '50%';
      const color = new THREE.Color(`hsl(${hue}, ${saturation}, ${lightness})`);
      (particles.material as THREE.PointsMaterial).color = color;
      (linesMesh.material as THREE.LineBasicMaterial).color = color;

      const linePositions = [];
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const ix = i * 3,
            jx = j * 3;
          const dx = positions[ix] - positions[jx];
          const dy = positions[ix + 1] - positions[jx + 1];
          const dz = positions[ix + 2] - positions[jx + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < maxDistance) {
            linePositions.push(
              positions[ix],
              positions[ix + 1],
              positions[ix + 2]
            );
            linePositions.push(
              positions[jx],
              positions[jx + 1],
              positions[jx + 2]
            );
          }
        }
      }
      linesMesh.geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
      linesMesh.geometry.computeBoundingSphere();

      composer.render();
    };

    init();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('scroll', onScroll);
      renderer?.dispose();
    };
  }, [theme]);

  return <canvas ref={canvasRef} id="bgCanvas" />;
};

export default HolographicBackground;
