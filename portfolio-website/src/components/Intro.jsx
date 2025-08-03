// src/components/Intro.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';
import './Intro.css';

const Spaceship = () => {
  const { scene } = useGLTF('/assets/models/spaceship.glb');
  return <primitive object={scene} scale={0.3} position={[2, 0, 0]} />;
};

const Planet = () => {
  const { scene } = useGLTF('/assets/models/planet.glb');
  return <primitive object={scene} scale={0.6} position={[0, -1, 0]} />;
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Planet />
      <Spaceship />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
    </>
  );
};

const Intro = ({ onClick }) => {
  return (
    <div className="intro-container" onClick={onClick}>
      <Canvas className="space-bg">
        <Stars radius={300} depth={60} count={5000} factor={7} fade speed={1} />
        <ambientLight intensity={0.5} />
        {/* <Suspense fallback={null}>
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Suspense> */}
        <OrbitControls />
      </Canvas>
      <h1 className="intro-title">
        Reality is overrated.<br />
        Let’s get into a parallel universe!
      </h1>
      <p className="intro-sub">Click anywhere to enter my portfolio.</p>
    </div>
  );
};

export default Intro;
