import "./three.scss";
import { React, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, useAnimations, useGLTF } from "@react-three/drei";

const GLTF = require("./First_section_About.glb");

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(GLTF);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Animation.play();
  });

  materials["Material.001"].metalness = 0.1;
  materials["Material.001"].roughnessness = 1;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Camera"
          position={[4.61, 2.9, -1]}
          rotation={[1.61, 0.05, -1.95]}
          scale={[0.49, 1, 0.53]}
        >
          <PerspectiveCamera
            name="Camera_Orientation"
            makeDefault={true}
            far={100}
            near={0.1}
            fov={30}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials["Material.001"]}
          rotation={[0, 0, -1.88]}
          scale={[-0.06, -0.02, -0.06]}
        />
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials["Material.001"]}
          position={[0, 0, 0.2]}
          rotation={[0, 0, -0.01]}
          scale={[-0.06, -0.02, -0.06]}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials["Material.001"]}
          position={[0, 0, 0.4]}
          rotation={[0, 0, -1.91]}
          scale={[-0.06, -0.02, -0.06]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(GLTF);

export default function CanvasFirst() {
  return (
    <Canvas id={"first"} antialias="false">
      <Suspense fallback={null}>
        <ambientLight color="lightblue" intensity={0.4} />
        <pointLight color="lightblue" intensity={1.6} position={[0, 30, 0]} />
        <pointLight
          color="lightblue"
          intensity={0.9}
          position={[10, -10, 10]}
        />
        <Model antialiased="true" />
      </Suspense>
    </Canvas>
  );
}
