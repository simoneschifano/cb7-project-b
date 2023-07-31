import React, { Suspense, useEffect, useState, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

import { TextureLoader } from "three";
import Moon from "../Moon";
import Saturn from "../Saturn";

import styles from "./Planet.module.scss";

const SpherePlanet = ({ speed, texture, scale }) => {
  const SpherePlanetRef = useRef();

  useFrame(() => {
    if (SpherePlanetRef.current) {
      SpherePlanetRef.current.rotation.y += speed;
    }
  });

  return (
    <Sphere visible args={[1, 100, 200]} scale={scale} ref={SpherePlanetRef}>
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

const Planet = ({ link, speed, scale, ring, satellites }) => {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const textureLoader = new TextureLoader();
    setTexture(textureLoader.load(link));
  }, [link]);

  return (
    <div className={styles.Planet}>
      {satellites && <Moon />}
      {!ring && (
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.9} />
          <directionalLight position={[-2, 5, 2]} />

          <Suspense fallback={null}>
            {/* {satellites && console.log("coap")} */}
            <SpherePlanet speed={speed} texture={texture} scale={scale} />
          </Suspense>
        </Canvas>
      )}
      {ring && <Saturn />}
    </div>
  );
};

export default Planet;
