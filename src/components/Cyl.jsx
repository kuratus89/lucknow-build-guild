import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const Cyl = () => {
  const texture = useTexture('/pic/img_low.png')
  const cyl = useRef(null)

  useFrame((_, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta
   
    }
  })

  return (
    <group  rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[2, 2, 2, 30, 30, true]} />
        <meshStandardMaterial
          map={texture}
          opacity={1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

export default Cyl
