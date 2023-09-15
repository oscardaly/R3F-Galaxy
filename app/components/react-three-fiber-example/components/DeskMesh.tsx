import React, {FC} from "react";
import {useGLTF} from "@react-three/drei";

interface DeskMeshProps {
    scale: number,
    position: number[]
}

const DeskMesh: FC<DeskMeshProps> = (props) => {
    //"Office Seat" (https://skfb.ly/ZUPM) by j.a.m is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
    const {scene} = useGLTF('/desk_low-poly.glb')
    return (
        <mesh>
            <primitive object={scene.clone()} {...props} />
        </mesh>
    )
};

export default DeskMesh;