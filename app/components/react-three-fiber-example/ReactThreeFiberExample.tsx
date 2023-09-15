'use client';
import React, {useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stars} from '@react-three/drei'
import {Selection, EffectComposer, Outline} from '@react-three/postprocessing'

import {planets} from "@/app/components/react-three-fiber-example/types/Planets";
import {Planet} from "@/app/components/react-three-fiber-example/components/planet/types/Planet";

import {
    Button,
} from "@material-tailwind/react";
import {RocketLaunchIcon} from "@heroicons/react/24/solid";
import {ArrowLongRightIcon} from "@heroicons/react/24/outline";
import TableRow from "@/app/components/react-three-fiber-example/components/TableRow";
import {Seat} from "@/app/components/react-three-fiber-example/components/planet/types/Seat";
import TableBlock from "@/app/components/react-three-fiber-example/components/TableBlock";

const Floor = () => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[150, 250]}/>
            <meshLambertMaterial attach="material" color="white"/>
        </mesh>
    );
}

const RightWall = () => {
    return (
        <mesh rotation={[0, Math.PI / 2, 0]} position={[-75, 25, 0]}>
            <planeBufferGeometry attach="geometry" args={[250, 50]}/>
            <meshLambertMaterial attach="material" color="white"/>
        </mesh>
    );
}

const LeftWall = () => {
    return (
        <mesh rotation={[0, 0, 0]} position={[0, 25, -125]}>
            <planeBufferGeometry attach="geometry" args={[150, 50]}/>
            <meshLambertMaterial attach="material" color="white"/>
        </mesh>
    );
}

const Lights = () => {
    return (
        <>
            <Stars/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[0, 0, 0]}/>
        </>
    );
}

export const ReactThreeFiberExample = () => {
    const [selected, setSelected] = useState<Seat>({location: {x: 0, y: 0, z: 0}, faceForward: true});

    return (
        <>
            <div className="title">
                <h1>The Milky Way</h1>
            </div>

            {selected && (
                <div className="infoDiv">
                    <RocketLaunchIcon className="text-blue-500 w-12 h-12"/>
                    <h1>Name: <b>{selected.location.x}</b></h1>
                    <h1>Speed: <b>{selected.faceForward}</b></h1>
                    <a href="#" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center gap-2">
                            Learn More
                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4"/>
                        </Button>
                    </a>
                </div>
            )}

            <Canvas camera={{position: [0, 40, 110], fov: 25}}>
                <Lights/>
                <Selection>
                    <TableRow onClick={setSelected}/>
                    <EffectComposer multisampling={8} autoClear={false}>
                        <Outline blur visibleEdgeColor={0xffffff} edgeStrength={100} width={1000}/>
                    </EffectComposer>
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