import {
  PresentationControls,
  Stage,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Shirt from "./Final5";

const Experience = () => {
  // const ref = useRef();
  const gltf = useLoader(GLTFLoader, "/models/final5.gltf");

  return (
    <PresentationControls
      // rotation={[0, 5, 0]}
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.01, Math.PI / 20]}
    >
      <Stage environment={"city"} intensity={1} contactShadow={false}>
        <Suspense fallback={null}>
          <Shirt />
        </Suspense>
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        {/* <planeGeometry args={[170, 170]}/> */}
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={4096}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experience;
