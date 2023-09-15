import React, {FC} from "react";
import {useGLTF} from "@react-three/drei";

interface ChairMeshProps {
    scale: number,
    position: number[]
}

const ChairMesh: FC<ChairMeshProps> = (props) => {
    // const ref = useRef();
    // ref.current.rotation.y = Math.cos(10);
    //"Office Seat" (https://skfb.ly/ZUPM) by j.a.m is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
    const {scene} = useGLTF('/office_chair.glb')
    return (
        <mesh>
            <primitive object={scene.clone()} rotation={[0, Math.PI, 0]} {...props} />
        </mesh>
    )
};

export default ChairMesh;