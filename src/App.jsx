import "./App.css";
import Sphere from "./components/Sphere";
import ThreeScene from "./components/ThreeScene";
import { Box, OrbitControls, Segments, Sky, Stars, Text } from "@react-three/drei";
import Model from "./components/Model";
import { Suspense } from "react";

function App() {
  return (
    <div className="three-scene-container">
      <ThreeScene className="three-scene">
        <ambientLight intensity={0.6}/>
        <directionalLight intensity={0.5}/>
        <OrbitControls autoRotate={false} enableZoom={true} enablePan={false} />
        <Stars count="1000" />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </ThreeScene>
    </div>
  );
}

export default App;
