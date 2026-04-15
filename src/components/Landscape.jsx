import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Cyl from './Cyl'
import Herosec from './Herosec'

const Landscape = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-hidden flex flex-col md:block'>

      {/* Hero text — full width on mobile, left 60% on desktop */}
      <div className='relative z-10 w-full'>
        <Herosec />
      </div>

      {/* 3D Cylinder — below text on mobile, right side on desktop */}
      <div className='
        relative z-20
        w-full h-[50vw]
        md:absolute md:top-0 md:right-0 md:w-[55%] md:h-full
        pointer-events-none
      '>
        <Canvas
          className='w-full h-full'
          camera={{ fov: 55 }}
          gl={{ alpha: true }}
        >
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={1.2} />
          <Cyl />
          <EffectComposer>
            <Bloom mipmapBlur intensity={0.2} luminanceThreshold={0.8} />
          </EffectComposer>
        </Canvas>
      </div>

    </div>
  )
}

export default Landscape