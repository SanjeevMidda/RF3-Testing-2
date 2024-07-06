import { React, useMemo, useRef, useEffect } from "react";
import * as Three from "three";

const CustomeObject = () => {
  const verticesCount = 10 * 3;

  const position = useMemo(() => {
    const position = new Float32Array(verticesCount * 3);

    for (let index = 0; index < verticesCount * 3; index++) {
      position[index] = Math.random() * 0.5 * 3;
    }

    return position;
  }, [verticesCount]);

  const geometryRef = useRef();

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <>
      <mesh position={-1}>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach="attributes-position"
            count={verticesCount}
            itemSize={3}
            array={position}
          />
        </bufferGeometry>
        <meshStandardMaterial color="blue" side={Three.DoubleSide} />
      </mesh>
    </>
  );
};

export default CustomeObject;
