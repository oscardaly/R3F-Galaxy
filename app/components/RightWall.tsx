import React, {FC} from "react";

const RightWall: FC = () => {
    return (
        <mesh rotation={[0, Math.PI / 2, 0]} position={[-75, 25, 0]}>
            <planeGeometry attach="geometry" args={[250, 50]}/>
            <meshBasicMaterial attach="material" color="white"/>
        </mesh>
    );
};

export default RightWall;
