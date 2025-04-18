'use client';
import React, {useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Selection, EffectComposer, Outline} from '@react-three/postprocessing'

import {planets} from "@/components/types/Planets";
import {Planet} from "@/components/planet/types/Planet";
import {PlanetMesh} from "@/components/planet/PlanetMesh";

import {RocketLaunchIcon} from "@heroicons/react/24/solid";
import Link from 'next/link';

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
    const [selected, setSelected] = useState<Planet | undefined>(undefined);

    return (
        <>
            <div className="title flex flex-col">
                <h1 className="text-5xl font-bold">The Milky Way Galaxy</h1>
                <p>Try out my React Three Fiber Example below!</p>
                <p>1. Hover over a planet to show a border and stop the planet</p>
                <p>2. Click a planet to show the information about it</p>
                <p>3. Scroll up and down to zoom in and out of the canvas</p>
                <p>4. Drag the rings to alter your view</p>
            </div>

            { selected && (
                <Link href={selected.extraInfoUrl ?? "#"} target="_blank">
                <div className="infoDiv">
                    <RocketLaunchIcon className="text-grey w-12 h-12"/>
                    <h1 className='font-semibold text-lg'>Speed: <b>{selected.orbitalSpeed}</b></h1>
                    <h1 className='font-semibold text-3xl'>{selected.name}</h1>
                    <h1 className='font-normal'>Colour: <b>{selected.colour}</b></h1>   
                    <p>Click for more info!</p>  
                </div>
                </Link>
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