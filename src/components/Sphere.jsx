import React from "react";

const Sphere = ({color}) => {
  return (
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial color={color} wireframe/>
    </mesh>
  );
};

export default Sphere;
