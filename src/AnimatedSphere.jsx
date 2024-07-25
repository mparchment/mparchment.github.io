import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha for transparency
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    currentMount.appendChild(renderer.domElement);

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(3, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    const wireframeGeometry = new THREE.WireframeGeometry(sphereGeometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x808080 });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);

    scene.add(sphere);
    scene.add(wireframe);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      wireframe.rotation.x += 0.005;
      wireframe.rotation.y += 0.005; 
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        left: '-50%',
        bottom: '-20%',
        width: '100%',
        height: '80vh',
        overflow: 'hidden',
      }}
    />
  );
};

export default AnimatedSphere;
