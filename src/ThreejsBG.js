import "./ThreejsBG.css";
import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Vector3 } from "three";

function MyRotatingBox() {
  const myMesh = useRef();
  const myGeometry = useRef();
  const pointer = new THREE.Vector2();
  let rotateValueX = 0.01;
  let rotateValueY = 0.01;

  window.addEventListener("pointermove", onPointerMove);

  function onPointerMove(event) {
    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components

    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    rotateValueX = -(pointer.y - 0.4) / 30;
    rotateValueY = pointer.x / 30;
  }

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();

    myMesh.current.rotation.x += rotateValueX;
    myMesh.current.rotation.y += rotateValueY;

    if (a > 0.7) {
      if (myGeometry.current.color.r < 192 / 255) {
        myGeometry.current.color.r += 192 / 20000;
      }
      if (myGeometry.current.color.g < 255 / 255) {
        myGeometry.current.color.g += 255 / 20000;
      }
      if (myGeometry.current.color.b < 55 / 255) {
        myGeometry.current.color.b += 55 / 20000;
      }
      if (myMesh.current.scale.x < 1) {
        myMesh.current.scale.x += 0.04;
        myMesh.current.scale.y += 0.04;
        myMesh.current.scale.z += 0.04;
      }
    }
  });

  return (
    <mesh ref={myMesh} position={[0, 1.5, 0]} scale={0}>
      <boxBufferGeometry />
      <meshPhongMaterial color={"black"} ref={myGeometry} />
    </mesh>
  );
}

const ThreejsBG = () => {
  return (
    <div className="ThreejsBG">
      <Canvas>
        <pointLight position={[10, 10, 10]} intensity={0.1} />
        <ambientLight
          intensity={0.3}
          color={[192 / 255, 255 / 255, 55 / 255]}
        />
        <MyRotatingBox />

        {/* <mesh>
          <sphereBufferGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh> */}
      </Canvas>
    </div>
  );
};

export default ThreejsBG;
