"use client"
import React, {FC, useCallback, useState, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {Html, Line} from "@react-three/drei";
import * as THREE from "three";
import {Planet} from "@/components/planet/types/Planet";
import {OnClick} from "@/components/planet/types/Callbacks";
import {Select} from "@react-three/postprocessing";
import {Mesh} from "three";

interface PlanetProps extends Planet {
    onClick?: OnClick;
}

export const PlanetMesh: FC<PlanetProps> = (
    {
        name,
        planetPosition,
        colour,
        orbitalSpeed,
        offset,
        rotationalSpeed,
        extraInfoUrl,
        onClick
    }
) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const planetRadius = planetPosition * 4;
    const planetRef = useRef<Mesh>(null!);

    useFrame(({clock}) => {
        if (!hovered) {
            const t = clock.getElapsedTime() * orbitalSpeed + offset;
            const x = planetRadius * Math.sin(t);
            const z = planetRadius * Math.cos(t);
            planetRef.current.position.x = x;
            planetRef.current.position.z = z;
            planetRef.current.rotation.y += rotationalSpeed;
        }
    });

    const onMeshClicked = useCallback(() => {
        onClick?.({
            name,
            planetPosition,
            colour,
            offset,
            rotationalSpeed,
            orbitalSpeed,
            extraInfoUrl
        });
    }, [])

    const onMeshPointerOver = () => setHovered(true);
    const onMeshPointerOut = () => setHovered(false);

    return (
        <Select enabled={hovered} onClick={onMeshClicked}>
            <mesh
                ref={planetRef}
                onPointerOver={onMeshPointerOver}
                onPointerOut={onMeshPointerOut}
            >
                <Html distanceFactor={15}>
                    <div className="planetName">{name}</div>
                </Html>
                <sphereGeometry args={[1, 32, 32]}/>
                <meshStandardMaterial color={colour}/>
            </mesh>
            <Ecliptic xRadius={planetRadius} zRadius={planetRadius}/>
        </Select>
    );
}

const Ecliptic = ({xRadius = 1, zRadius = 1}) => {
    const points = [];
    for (let index = 0; index < 64; index++) {
        const angle = (index / 64) * 2 * Math.PI;
        const x = xRadius * Math.cos(angle);
        const z = zRadius * Math.sin(angle);
        points.push(new THREE.Vector3(x, 0, z));
    }

    points.push(points[0]);

    return (
        <Line points={points} color="#BFBBDA" lineWidth={1} />
    );
}