import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas
    camer={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }}
    // orthographic
  >
    <App />
  </Canvas>
);
