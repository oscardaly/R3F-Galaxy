import React, {FC} from "react";

const LeftWall: FC = () => {
    return (
        <mesh rotation={[0, 0, 0]} position={[0, 25, -125]}>
            <planeGeometry attach="geometry" args={[150, 50]}/>
            <meshBasicMaterial attach="material" color="white"/>
        </mesh>
    );
};

export default LeftWall;