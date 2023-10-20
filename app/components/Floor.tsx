import React, {FC} from "react";

const Floor: FC = () => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry attach="geometry" args={[150, 250]}/>
            <meshBasicMaterial attach="material" color="white"/>
        </mesh>
    );
};

export default Floor;