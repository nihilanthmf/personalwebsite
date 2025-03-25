"use client";

import { Canvas } from "@react-three/fiber";
import Hero3DModel from "./Hero3DModel";
import { MouseEvent, useRef, useState } from "react";

export default function ThreeJSCanvas() {
  const [rotationSpeed, setRotationSpeed] = useState({ x: 0, y: 0 });
  const mouseDown = useRef(false);
  const mouseOn = useRef(false);

  function onMouseMove(e: MouseEvent<HTMLDivElement, MouseEvent>) {
    if (mouseOn.current) {
      // && mouseDown.current
      setRotationSpeed({
        x: e.movementX,
        y: e.movementY,
      });
    }
  }
  return (
    <Canvas
      shadows
      camera={{
        // position: [1.75, 2, 1.75],
        position: [1, .5, 1],
      }}
      // @ts-expect-error type error, doesn't break anything but works fine :)
      onMouseMove={onMouseMove}
      onMouseEnter={() => (mouseOn.current = true)}
      onMouseLeave={() => (mouseOn.current = false)}
      onMouseDown={() => (mouseDown.current = true)}
      onMouseUp={() => (mouseDown.current = false)}
      // className="rotate-0 bg-primary h-[300px] w-[500px]"
      // style={{ backgroundColor: "#135235", }}
    >
      <Hero3DModel parentRotationSpeed={rotationSpeed} />
    </Canvas>
  );
}
