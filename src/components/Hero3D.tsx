'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import type { Group } from 'three'

const ACCENT = '#7cf5c8'

function Escena() {
  const grupo = useRef<Group>(null)
  const size = useThree(s => s.size)

  useFrame((state, dt) => {
    const g = grupo.current
    if (!g) return
    g.rotation.y += dt * 0.15
    g.rotation.x += (state.pointer.y * 0.4 - g.rotation.x) * 0.04
    const base = size.width > 860 ? 2.8 : 0
    g.position.x += (base + state.pointer.x * 0.5 - g.position.x) * 0.04
  })

  return (
    <group ref={grupo} scale={size.width > 860 ? 1 : 0.62}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh>
          <torusKnotGeometry args={[1, 0.32, 220, 32, 2, 3]} />
          <meshStandardMaterial color="#26303f" metalness={0.55} roughness={0.35} />
        </mesh>
        <mesh scale={1.012}>
          <torusKnotGeometry args={[1, 0.32, 90, 14, 2, 3]} />
          <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.8} />
        </mesh>
      </Float>
      <Float speed={2} floatIntensity={1.4}>
        <mesh position={[2.2, 1.1, -0.6]}>
          <icosahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.6} flatShading />
        </mesh>
      </Float>
      <Float speed={1.6} floatIntensity={1.2}>
        <mesh position={[-2.1, -1, 0.3]}>
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} flatShading />
        </mesh>
      </Float>
      <Float speed={2.4} floatIntensity={1}>
        <mesh position={[-1.6, 1.6, -1]}>
          <torusGeometry args={[0.18, 0.05, 12, 32]} />
          <meshStandardMaterial color={ACCENT} />
        </mesh>
      </Float>
    </group>
  )
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 4, 5]} intensity={3.2} />
      <pointLight position={[-4, -2, 3]} intensity={30} color={ACCENT} />
      <pointLight position={[4, 2, -2]} intensity={14} color="#6c8bff" />
      <Escena />
    </Canvas>
  )
}
