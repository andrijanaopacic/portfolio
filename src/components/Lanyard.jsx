import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { useTexture, Text, Environment } from '@react-three/drei'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

import zelena from '/zelena.png'
import myImage from '/jaAndrijana.png'

extend({ MeshLineGeometry, MeshLineMaterial })

export default function Lanyard() {
  return (
    <Canvas 
      camera={{ position: [0, 1.1, 15], fov: 20 }} 
      gl={{ alpha: true, antialias: true }} 
      style={{ width: '100%', height: '100%' }} 
    >
      <ambientLight intensity={1.5} />
      <Environment preset="city" /> 
      
      <Physics interpolate gravity={[0, -25, 0]}>
        <Band />
      </Physics>
    </Canvas>
  )
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef()
  const vec = new THREE.Vector3(), dir = new THREE.Vector3()
  
  const texture = useTexture(zelena)
  const myImageTexture = useTexture(myImage)
  
  const { width, height } = useThree((state) => state.size)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
  const [dragged, drag] = useState(false)
  const [hovered, hover] = useState(false)

  const segmentProps = { 
    type: 'dynamic', 
    canSleep: true, 
    colliders: false, 
    angularDamping: 3, 
    linearDamping: 2.5 
  }

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1.2])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1.2])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1.2])
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z })
    }
    
    if (fixed.current) {
      ;[j1, j2, j3].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
      })
      
      const cardPos = j3.current.translation();
      curve.points[0].set(cardPos.x, cardPos.y, cardPos.z - 0.1); 
      curve.points[1].copy(j2.current.lerped)
      curve.points[2].copy(j1.current.lerped)
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(32))
    }
  })

  return (
    <>
      <group position={[0, 5.0, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[-1.5, 0, 0]} ref={j1} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[-2.5, 0, 0]} ref={j2} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[-3.5, 0, 0]} ref={j3} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        
        <RigidBody 
          position={[-4.5, 0, 0.5]} 
          ref={card} 
          {...segmentProps} 
          type={dragged ? 'kinematicPosition' : 'dynamic'}
          colliders={false}
          enabledRotations={[false, true, false]} 
          restitution={0}
          angularDamping={4} 
          linearDamping={3}
        >
          <CuboidCollider args={[1.2, 1.9, 0.05]} />
          
          <group
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}
          >
            
            <mesh>
              <boxGeometry args={[2.4, 3.8, 0.05]} />
              <meshStandardMaterial color="#064e3b" roughness={0.5} />
            </mesh>

           
            <Text position={[0, 0, 0.01]} fontSize={1.2} color="white" transparent opacity={0.02} fontWeight="bold">
              AO
            </Text>

            
            <Text 
              position={[0.85, 1.45, 0.02]} 
              fontSize={0.2} 
              color="white" 
              transparent 
              opacity={0.5} 
              fontWeight="bold"
            >
              AO
            </Text>

           
            <Text 
              position={[-1.05, 0.5, 0.02]} 
              rotation={[0, 0, Math.PI / 2]} 
              fontSize={0.06} 
              color="white" 
              transparent 
              opacity={0.3}
            >
              STUDENT IDENTITY SYSTEM // FON
            </Text>

          
            <mesh position={[0, 0.35, 0.03]}>
              <planeGeometry args={[2.2, 2.5]} /> 
              <meshBasicMaterial map={myImageTexture} transparent={true} />
            </mesh>

            
            <mesh position={[0, -1.15, 0.04]}>
              <planeGeometry args={[2.4, 0.9]} />
              <meshBasicMaterial color="#F6F0D7" />
            </mesh>

            {/* IME I PREZIME */}
            <Text position={[0, -0.95, 0.05]} fontSize={0.18} color="#064e3b" fontWeight="bold">
              ANDRIJANA OPAČIĆ
            </Text>

            {/* TITULA */}
            <Text position={[0, -1.25, 0.05]} fontSize={0.08} color="#555">
              Software Engineering Student
            </Text>

            
            <Text position={[-0.8, -1.45, 0.05]} fontSize={0.05} color="black" fontWeight="bold">
              ID: 40010268
            </Text>

            
            <mesh position={[0, -1.7, 0.05]}>
              <planeGeometry args={[2.4, 0.2]} />
              <meshBasicMaterial color="black" /> 
            </mesh>

            {/* PROREZ ZA TRAKU */}
            <mesh position={[0, 1.7, 0.01]}>
              <boxGeometry args={[0.6, 0.15, 0.06]} />
              <meshStandardMaterial color="#111" />
            </mesh>
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial 
          transparent 
          map={texture} 
          useMap 
          color="white" 
          depthTest={true} 
          resolution={[width, height]} 
          repeat={[-4, 1]} 
          lineWidth={0.6} 
        />
      </mesh>
    </>
  )
}