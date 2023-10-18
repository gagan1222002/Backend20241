import "./App.css";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { DEG2RAD } from "three/src/math/MathUtils";
import Configrator from "./components/Configrator";
import { Customization } from "./contexts/customization";

function App() {
  return (
    <Customization>
      <div className="App">
        <Canvas>
          <color attach="background" args={["#101010"]} />
          <fog attach="fog" args={["#101010", 90, 90]} />
          <Experience />
          {/* <OrbitControls
          enablePan={false}
          // enableDamping={false}
          autoRotate
          // setAzimuthalAngle={-Math.PI / 20}
          // setPolarAngle={Math.PI / 20}
          // autoRotateSpeed={5}
          minAzimuthAngle={-Math.PI / 20}
          maxAzimuthAngle={Math.PI / 20}
          // minDistance={5}
          // maxDistance={5}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI - Math.PI / 2}
        /> */}
        </Canvas>
        <Configrator />
      </div>
    </Customization>
  );
}

export default App;
