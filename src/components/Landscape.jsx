import React from 'react'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Cyl from './Cyl'
import Herosec from './Herosec'

const Landscape = () => {
  return (
    <div className='relative w-screen h-screen bg-transparent overflow-hidden'>
      <Canvas className='left-90 absolute inset-0 z-20' camera={{ fov: 55 }} gl={{ alpha: true }}>
        <OrbitControls />
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom mipmapBlur intensity={0} luminanceThreshold={0} luminanceSmoothing={0} />
        </EffectComposer>
      </Canvas>

      <div className='absolute inset-0 z-10'>
        <Herosec />
      </div>
    </div>
  )
}

export default Landscape
