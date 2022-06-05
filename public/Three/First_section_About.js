import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/First_section_About.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Camera"
          position={[1.92, 2.16, -0.38]}
          rotation={[1.61, 0.01, -2.06]}
          scale={[0.31, 1.01, 1.04]}
        >
          <PerspectiveCamera
            name="Camera_Orientation"
            makeDefault={false}
            far={100}
            near={0.1}
            fov={25.25}
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

useGLTF.preload("/First_section_About.glb");
