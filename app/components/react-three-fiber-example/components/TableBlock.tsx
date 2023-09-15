import SeatMesh from "@/app/components/react-three-fiber-example/components/SeatMesh";
import React, {FC} from "react";
import {Selection} from '@react-three/postprocessing'


interface TableBlockProps {
    location: number[]
}

const TableBlock: FC<TableBlockProps> = ({location}) => {
    return (
            <mesh position={[location[0], 0, location[1]]}>
            </mesh>
    )
};

export default TableBlock;