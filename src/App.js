import "./index.css";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomeObject from "./CustomeObject";
import {
  TransformControls,
  HtmlPivotControls,
  orbitControls,
  Html,
} from "@react-three/drei";
extend({ OrbitControls });

function App() {
  const { camera, gl } = useThree();
  console.log(camera, gl);

  const torusRef = useRef();

  useFrame((state, delta) => {
    // console.log("tick");
    torusRef.current.rotation.y += 0.01;
    torusRef.current.rotation.x += 0.01;
  });

  console.log(torusRef.current);
  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} color="white" intensity={4.5} />
      <ambientLight intensity={1.5} />
      <group ref={torusRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          {/* <meshBasicMaterial color="orange" wireframe />{" "} */}
          <meshStandardMaterial color="orange" wireframe />
        </mesh>

        <mesh position={[2, 0, 0]} scale={2} rotation={[2, 1, 1]}>
          <torusGeometry />
          {/* <meshBasicMaterial wireframe color="blue" /> */}
          <meshStandardMaterial color="orange" wireframe />
          <Html position={[2, 1, 0]} className="text">
            hello
          </Html>
        </mesh>
      </group>

      {/* <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh> */}

      <CustomeObject />
    </>
  );
}

export default App;
