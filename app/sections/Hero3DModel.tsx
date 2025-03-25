"use client";

import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { MouseEvent, useEffect, useRef, useState } from "react";
// @ts-expect-error This module actually exists :/
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

export default function Hero3DModel({
  parentRotationSpeed,
}: {
  parentRotationSpeed: { x: number; y: number };
}) {
  const groupRef = useRef<THREE.Group>(null);
  const primitiveRef = useRef<THREE.Group>(null);
  const obj = useLoader(OBJLoader, "/ChessSet.obj");

  const rotationVelocity = 0.0001;

  const euler = new THREE.Euler();
  euler.y = 90 + 0.3;

  const [rotationSpeed, setRotationSpeed] = useState({ x: 0, y: 0 });
  const mouseDown = useRef(false);
  const mouseOn = useRef(false);

  function onPointerMove(e: MouseEvent<HTMLDivElement, MouseEvent>) {
    setRotationSpeed({
      x: rotationSpeed.x + e.movementX,
      y: rotationSpeed.y + e.movementY,
    });
  }

  // Compute the bounding box and center when the model is loaded
  useEffect(() => {
    if (groupRef.current && obj) {
      const box = new THREE.Box3().setFromObject(obj);
      const center = box.getCenter(new THREE.Vector3());

      // Center the object
      obj.position.sub(center);
    }
  }, [obj]);

  useFrame(() => {
    if (primitiveRef.current) {
      primitiveRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    if (primitiveRef.current) {
      primitiveRef.current.rotation.y +=
        parentRotationSpeed.x * rotationVelocity;
      primitiveRef.current.rotation.z +=
        parentRotationSpeed.y * rotationVelocity;
    }
  }, [parentRotationSpeed]);

  return (
    <group ref={groupRef} rotation={euler}>
      {/* <axesHelper args={[5]} /> */}
      <ambientLight intensity={0.05} />
      <directionalLight position={[50, 100, -10]} intensity={0.5} />
      <group ref={primitiveRef}>
        <primitive
          object={obj}
          onPointerMove={onPointerMove}
          onPointerEnter={() => (mouseOn.current = true)}
          onPointerLeave={() => (mouseOn.current = false)}
          onPointerDown={() => (mouseDown.current = true)}
          onPointerUp={() => (mouseDown.current = false)}
        />
      </group>
    </group>
  );
}
