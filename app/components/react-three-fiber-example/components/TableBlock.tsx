import SeatMesh from "@/app/components/react-three-fiber-example/components/SeatMesh";
import React, {FC} from "react";
import {Selection} from '@react-three/postprocessing'


interface TableBlockProps {
    location: number[]
}

const TableBlock: FC<TableBlockProps> = ({location}) => {
    return (
            <mesh position={[location[0], 0, location[1]]}>
                <SeatMesh location={[0, 0]} faceForward={true}/>
                <SeatMesh location={[0, 19]} faceForward={true}/>
                <SeatMesh location={[8, 0]} faceForward={false}/>
                <SeatMesh location={[8, 19]} faceForward={false}/>
            </mesh>
    )
};

export default TableBlock;