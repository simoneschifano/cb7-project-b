import React, { Suspense, useRef } from "react";

import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

import { TextureLoader } from "three";

import styles from "./Planet.module.scss";

const SpherePlanet = ({ link, speed /* , dimension */ }) => {
  const linkImage = link;
  const speedPlanet = speed;
  // const scaleDimension = dimension;

  const SpherePlanetRef = useRef();

  let texture = null;

  if (typeof document !== "undefined") {
    texture = useLoader(TextureLoader, linkImage);
  }

  useFrame(() => {
    if (SpherePlanetRef.current) {
      SpherePlanetRef.current.rotation.y += speedPlanet;
    }
  });

  return (
    <Sphere visible args={[1, 100, 200]} scale={2} ref={SpherePlanetRef}>
      <MeshDistortMaterial
        color="#ffffff"
        attach="material"
        distort={0}
        speed={1.5}
        roughness={1}
        map={texture}
      />
    </Sphere>
  );
};

const Planet = ({ link, speed /* , dimension */ }) => {
  return (
    <div className={styles.Planet}>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <SpherePlanet link={link} speed={speed} /* dimension={dimension} */ />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Planet;
