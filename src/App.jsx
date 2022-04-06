import "./App.css";
import Sphere from "./components/Sphere";
import ThreeScene from "./components/ThreeScene";
import { Box, OrbitControls, Stars, Text } from "@react-three/drei";
import Model from "./components/Model";
import { Suspense } from "react";

function App() {
  return (
    <div className="three-scene-container">
      <ThreeScene className="three-scene">
        <color attach="background" args={["blue"]} />
        {/* <Sphere color="red" position={[-1.2, 0, 0]}/> */}
        <ambientLight />
        <OrbitControls autoRotate enableZoom={true} enablePan={true} />
        {/* <Stars count="1000" /> */}
        <pointLight position={[10, 10, 10]} />
        {/* <Box position={[0, -1.5, 0]} /> */}
        <Text
          characters="abcdefghijklmnopqrstuvwxyz0123456789!"
          fontSize="2"
          color="violet"
          position={[0, -2, 0]}
        >
          Axel Mullins
        </Text>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </ThreeScene>
    </div>
  );
}

export default App;
