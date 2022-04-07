import "./App.css";
import ThreeScene from "./components/ThreeScene";
import { OrbitControls, Stars } from "@react-three/drei";
import Model from "./components/Model";
import { Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyForm from "./components/MyForm";

function App() {
  return (
    <Container fluid>
      <Row className="three-scene-container">
        <Col xs="4" className="align-self-center d-none d-md-block">
          <MyForm />
        </Col>
        <Col xs="12" md="8" className="p-0">
          <ThreeScene className="three-scene">
            <ambientLight intensity={0.6} />
            <directionalLight intensity={0.5} />
            <OrbitControls
              autoRotate={true}
              enableZoom={true}
              enablePan={false}
            />
            <Stars count="1000" />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </ThreeScene>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
