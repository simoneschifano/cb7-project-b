import { useState, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { TextureLoader } from "three";

import styles from "./Saturn.module.scss";

const Saturn = () => {
  const [texture, setTexture] = useState(null);
  const [textureRing, setTextureRing] = useState(null);

  useEffect(() => {
    const textureLoader = new TextureLoader();
    setTexture(textureLoader.load("/Textures/Saturn.jpg"));
    const textureRingLoader = new TextureLoader();
    setTextureRing(textureRingLoader.load("/Textures/Saturn__Ring.png"));
  }, []);

  return (
    <div className={styles.Saturn}>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <group>
          <mesh>
            <sphereGeometry args={[2.2, 50, 50]} />
            <meshPhongMaterial map={texture} />
          </mesh>
          <mesh>
            <torusGeometry args={[6, 3, 2, 900]} />
            <meshPhongMaterial map={textureRing} />
          </mesh>
        </group>
        <ambientLight intensity={0.5} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Saturn;
