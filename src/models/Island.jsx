// src/models/Island.jsx
import React from "react";
import { useGLTF } from "@react-three/drei";

export const Island = (props) => {
  const gltf = useGLTF("/models/3dfinal.glb"); // gunakan folder 'public'

  return <primitive object={gltf.scene} {...props} />;
};

useGLTF.preload("/models/3dfinal.glb");
