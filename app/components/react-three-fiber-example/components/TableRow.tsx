import React, {FC} from "react";
import SeatMesh from "@/app/components/react-three-fiber-example/components/SeatMesh";
import {OnClick} from "@/app/components/react-three-fiber-example/components/planet/types/Callbacks";

interface TableRowProps {
    onClick?: OnClick;
}

export type Coordinate = {
    x: number,
    y: number,
    z: number
}

const TableRow: FC<TableRowProps> = ({onClick}) => {
    let faceForward: boolean = false;
    const array: Coordinate[] = [];

    for (let x = -50; x < 60; x += 20) {
        for (let z = -110; z < 110; z += 30) {
            array.push({x: x, y: 0, z: z});
        }
    }

    console.log(array);


    return (
        <mesh>
            {
                array.map(number => {
                    faceForward = number.x === -50 || number.x === -10 || number.x === 30;
                    return <SeatMesh
                        key={array.indexOf(number)}
                        location={number}
                        faceForward={faceForward}
                        onClick={onClick}
                    />
                })
            }
        </mesh>
    )
};

export default TableRow;