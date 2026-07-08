import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 1. Setup Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    
    // We want the particles layered cleanly behind content
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true, // Transparent background so CSS gradients show through
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Generate Particles Geometry & Material
    const particlesCount = 350;
    const positions = new Float32Array(particlesCount * 3);
    const randomSpeeds = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Spread particles across a wide 3D space
      positions[i] = (Math.random() - 0.5) * 300;     // X
      positions[i + 1] = (Math.random() - 0.5) * 200; // Y
      positions[i + 2] = (Math.random() - 0.5) * 150; // Z
      
      randomSpeeds[i / 3] = 0.05 + Math.random() * 0.1; // Float speed
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    // Create a circular particle texture dynamically to avoid loading static images
    const createCircleTexture = () => {
      const size = 16;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Draw soft glowing circle
        const gradient = ctx.createRadialGradient(
          size / 2, size / 2, 0,
          size / 2, size / 2, size / 2
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(212, 175, 55, 0.8)');
        gradient.addColorStop(0.5, 'rgba(212, 175, 55, 0.2)');
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particlesMaterial = new THREE.PointsMaterial({
      size: 4,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      map: createCircleTexture()
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // 3. Mouse Interact States
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 4. Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow rotational drift
      particles.rotation.y = elapsedTime * 0.015;
      particles.rotation.x = elapsedTime * 0.008;

      // Update positions to simulate floating rise
      const posArray = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        // Float particles upwards
        posArray[i3 + 1] += randomSpeeds[i] * 0.4;
        
        // Wrap around bounds if they float out of the view
        if (posArray[i3 + 1] > 120) {
          posArray[i3 + 1] = -120;
          posArray[i3] = (Math.random() - 0.5) * 300;
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Ease camera parallax transition based on cursor coordinates
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX;
      camera.position.y = -targetY;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // 5. Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // 6. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Allow clicking elements through the canvas
        zIndex: 0
      }}
    />
  );
}
