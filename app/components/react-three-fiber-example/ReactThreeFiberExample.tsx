'use client';
import React, {useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stars} from '@react-three/drei'
import {Selection, EffectComposer, Outline} from '@react-three/postprocessing'
import {
    Button,
} from "@material-tailwind/react";
import {RocketLaunchIcon} from "@heroicons/react/24/solid";
import {ArrowLongRightIcon} from "@heroicons/react/24/outline";
import TableRow from "@/app/components/react-three-fiber-example/components/TableRow";
import {Seat} from "@/app/components/react-three-fiber-example/components/planet/types/Seat";
import LeftWall from "@/app/components/react-three-fiber-example/components/LeftWall";
import RightWall from "@/app/components/RightWall";
import Floor from "@/app/components/Floor";



const Lights = () => {
    return (
        <>
            {/*<Stars/>*/}
            <ambientLight intensity={2}/>
            {/*<pointLight position={[0, 0, 0]}/>*/}
        </>
    );
}

export const ReactThreeFiberExample = () => {
    const [selected, setSelected] = useState<Seat>({location: {x: 0, y: 0, z: 0}, faceForward: true});

    return (
        <>
            <div className="title">
                <h1>Instil's Office</h1>
            </div>

            {selected && (
                <div className="infoDiv">
                    <h1>Desk Selected: <b>{selected.location.x}</b></h1>
                    <h1>Date: <b>21/10/23</b></h1>
                    <a href="#" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center gap-2">
                            Book desk
                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4"/>
                        </Button>
                    </a>
                </div>
            )}

            <Canvas camera={{position: [0, 40, 110], fov: 25}}>
                <Lights/>
                <Selection>
                    <TableRow onClick={setSelected}/>
                    {/*<EffectComposer multisampling={8} autoClear={false}>*/}
                    {/*    <Outline blur visibleEdgeColor={0xffffff} edgeStrength={100} width={1000}/>*/}
                    {/*</EffectComposer>*/}
                </Selection>
                <LeftWall/>
                <RightWall/>
                <Floor/>
                <OrbitControls minDistance={50} maxDistance={500}/>
            </Canvas>
        </>
    );
}

//create walls
//bottom of floor shows transparent
//find plain desks
//add desk number to flat top of desks
//allow for hover of desks to show up with outline
//when desk is clicked bring back information
//figure out where I should put mesh and what effect it has
//change tab image and name
//find low-poly desk and chair