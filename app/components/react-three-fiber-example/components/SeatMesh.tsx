import React, {FC, useCallback, useState} from "react";
import {Select} from "@react-three/postprocessing";
import {Seat} from "./planet/types/Seat"
import {OnClick} from "@/app/components/react-three-fiber-example/components/planet/types/Callbacks";
import DeskMesh from "@/app/components/react-three-fiber-example/components/DeskMesh";
import ChairMesh from "@/app/components/react-three-fiber-example/components/ChairMesh";

interface SeatProps extends Seat {
    onClick?: OnClick;
}

const SeatMesh: FC<SeatProps> = (
    {
        location,
        faceForward,
        onClick
    }
) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const rotateSeat: number = faceForward ? Math.PI : 0;

    const onMeshPointerOver = () => setHovered(true);
    const onMeshPointerOut = () => setHovered(false);

    const onMeshClicked = useCallback(() => {
        onClick?.({
            location,
            faceForward
        });
    }, [])

    return (
        <Select enabled={hovered} onClick={onMeshClicked}>
            <mesh
                position={[location.x, location.y, location.z]}
                rotation={[0, rotateSeat, 0]}
                onPointerOver={onMeshPointerOver}
                onPointerOut={onMeshPointerOut}
            >
                <DeskMesh scale={0.03} position={[0, 0, 0]}/>
                <ChairMesh scale={0.1} position={[4, 1, -10]}/>
            </mesh>
        </Select>
    )
};

export default SeatMesh;