'use client';
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Selection, EffectComposer, Outline, Bloom } from '@react-three/postprocessing'
import Link from 'next/link';

import { planets } from "@/components/types/Planets";
import { Planet } from "@/components/planet/types/Planet";
import { PlanetMesh } from "@/components/planet/PlanetMesh";

const Sun = () => {
    return (
        <mesh>
            <sphereGeometry args={[2.5, 64, 64]} />
            {/* Bright + emissive so it picks up the bloom pass and glows. */}
            <meshStandardMaterial
                color="#FFE8A3"
                emissive="#FFC53D"
                emissiveIntensity={2.6}
                toneMapped={false}
            />
        </mesh>
    );
}

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[0, 0, 0]} intensity={2.2} distance={0} decay={0} color="#fff6e0" />
        </>
    );
}

export const ReactThreeFiberExample = () => {
    const [selected, setSelected] = useState<Planet | undefined>(undefined);

    // Client-only (this component is loaded with ssr: false), so window is safe.
    // On narrow screens the orbits run off the sides, so pull the camera back.
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const camera: { position: [number, number, number]; fov: number } = isMobile
        ? { position: [0, 95, 300], fov: 32 }
        : { position: [0, 40, 110], fov: 25 };

    return (
        <>
            <div className="vignette" />

            {/* Header */}
            <header className="pointer-events-none absolute left-4 top-4 z-10 max-w-[78%] sm:left-6 sm:top-6 sm:max-w-sm">
                <p className="eyebrow">Interactive &middot; WebGL</p>
                <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                    The Milky Way Galaxy
                </h1>
                <p className="mt-2 max-w-xs text-xs leading-relaxed text-zinc-400 sm:mt-3 sm:text-sm">
                    A real-time solar system, rendered in the browser with React Three Fiber.
                </p>
            </header>

            {/* Controls legend — hidden on mobile, where touch is the obvious interaction */}
            <div className="glass animate-in pointer-events-none absolute bottom-6 left-6 z-10 hidden rounded-2xl px-4 py-3 sm:block">
                <p className="eyebrow mb-2">Controls</p>
                <ul className="space-y-1 text-xs text-zinc-300">
                    <li><span className="font-medium text-white">Hover</span> a planet to focus it</li>
                    <li><span className="font-medium text-white">Click</span> a planet for details</li>
                    <li><span className="font-medium text-white">Scroll</span> to zoom &middot; <span className="font-medium text-white">drag</span> to orbit</li>
                </ul>
            </div>

            {/* Selected-planet card — full-width sheet on mobile, top-right card on desktop */}
            {selected && (
                <aside className="glass animate-in absolute inset-x-4 bottom-4 z-10 rounded-2xl p-5 sm:inset-x-auto sm:bottom-auto sm:right-6 sm:top-6 sm:w-72">
                    <button
                        onClick={() => setSelected(undefined)}
                        aria-label="Close"
                        className="absolute right-4 top-4 text-zinc-400 transition-colors hover:text-white"
                    >
                        ✕
                    </button>
                    <p className="eyebrow">Planet</p>
                    <h2 className="mt-1 text-2xl font-semibold text-white">{selected.name}</h2>
                    <dl className="mt-4 space-y-2.5 text-sm">
                        <div className="flex items-center justify-between">
                            <dt className="text-zinc-400">Colour</dt>
                            <dd className="flex items-center gap-2 text-white">
                                <span
                                    className="inline-block h-3 w-3 rounded-full ring-1 ring-white/30"
                                    style={{ background: selected.colour }}
                                />
                                <span className="capitalize">{selected.colour}</span>
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-zinc-400">Orbital speed</dt>
                            <dd className="text-white">{selected.orbitalSpeed}</dd>
                        </div>
                    </dl>
                    <Link
                        href={selected.extraInfoUrl ?? "#"}
                        target="_blank"
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white/90 px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white"
                    >
                        Learn more
                        <span aria-hidden>↗</span>
                    </Link>
                </aside>
            )}

            {/* Footer credit — hidden on mobile to keep the small screen clean */}
            <p className="pointer-events-none absolute bottom-6 right-6 z-10 hidden text-xs text-zinc-500 sm:block">
                Built by Oscar Daly
            </p>

            <Canvas camera={camera} dpr={[1, 2]}>
                <Lights />
                <Stars radius={300} depth={80} count={6000} factor={6} saturation={0} fade speed={0.6} />
                <Selection>
                    <EffectComposer multisampling={8} autoClear={false}>
                        <Bloom intensity={1.1} luminanceThreshold={0.25} luminanceSmoothing={0.9} mipmapBlur />
                        <Outline blur visibleEdgeColor={0xffffff} hiddenEdgeColor={0xffffff} edgeStrength={60} width={1000} />
                    </EffectComposer>
                    <Sun />
                    <PlanetMesh {...planets.mercury} onClick={setSelected} />
                    <PlanetMesh {...planets.venus} onClick={setSelected} />
                    <PlanetMesh {...planets.earth} onClick={setSelected} />
                    <PlanetMesh {...planets.mars} onClick={setSelected} />
                    <PlanetMesh {...planets.jupiter} onClick={setSelected} />
                    <PlanetMesh {...planets.saturn} onClick={setSelected} />
                    <PlanetMesh {...planets.uranus} onClick={setSelected} />
                    <PlanetMesh {...planets.neptune} onClick={setSelected} />
                </Selection>
                <OrbitControls minDistance={50} maxDistance={500} enablePan={false} enableDamping />
            </Canvas>
        </>
    );
}
