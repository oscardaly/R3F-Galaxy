"use client"
import dynamic from 'next/dynamic'
 
const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/ReactThreeFiberExample").then(mod => mod.ReactThreeFiberExample),
  { ssr: false }
);

export default function Home() {
    return (
        <div className="body">
            <DynamicComponentWithNoSSR/>
        </div>
    )
}
