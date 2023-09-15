'use client';
import React, {useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Selection, EffectComposer, Outline} from '@react-three/postprocessing'

import {planets} from "@/app/components/react-three-fiber-example/types/Planets";
import {Planet} from "@/app/components/react-three-fiber-example/components/planet/types/Planet";
import {PlanetMesh} from "@/app/components/react-three-fiber-example/components/planet/PlanetMesh";

import {
    Button,
} from "@material-tailwind/react";
import {RocketLaunchIcon} from "@heroicons/react/24/solid";
import {ArrowLongRightIcon} from "@heroicons/react/24/outline";

const Sun = () => {
    return (
        <mesh>
            <sphereGeometry args={[2.5, 32, 32]}/>
            <meshStandardMaterial color="#E1DC59"/>
        </mesh>
    );
}

const Lights = () => {
    return (
        <>
            <ambientLight/>
            <pointLight position={[0, 0, 0]}/>
        </>
    );
}

export const ReactThreeFiberExample = () => {
    const [selected, setSelected] = useState<Planet | undefined>(planets.saturn);

    return (
        <>
            <div className="title">
                <h1>The Milky Way</h1>
            </div>

            { selected && (
                <div className="infoDiv">
                    <RocketLaunchIcon className="text-blue-500 w-12 h-12"/>
                    <h1>Name: <b>{selected.name}</b></h1>
                    <h1>Speed: <b>{selected.orbitalSpeed}</b></h1>
                    <h1>Colour: <b>{selected.colour}</b></h1>
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
                    <EffectComposer multisampling={8} autoClear={false}>
                        <Outline blur visibleEdgeColor={0xffffff} edgeStrength={100} width={5000}/>
                    </EffectComposer>
                    <Sun/>
                    <PlanetMesh {...planets.mercury} onClick={setSelected}/>
                    <PlanetMesh {...planets.venus} onClick={setSelected}/>
                    <PlanetMesh {...planets.earth} onClick={setSelected}/>
                    <PlanetMesh {...planets.mars} onClick={setSelected}/>
                    <PlanetMesh {...planets.jupiter} onClick={setSelected}/>
                    <PlanetMesh {...planets.saturn} onClick={setSelected}/>
                    <PlanetMesh {...planets.uranus} onClick={setSelected}/>
                    <PlanetMesh {...planets.neptune} onClick={setSelected}/>
                </Selection>
                <OrbitControls minDistance={50} maxDistance={500}/>
            </Canvas>
        </>
    );
}