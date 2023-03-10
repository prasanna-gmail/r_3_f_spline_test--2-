/*
  Auto-generated by Spline
*/
import React, { useState, useEffect } from 'react'
import useSpline from '@splinetool/r3f-spline'
import { Clone, PerspectiveCamera, OrthographicCamera, ContactShadows } from '@react-three/drei'
import { Physics, Debug, usePlane, useCompoundBody } from '@react-three/cannon'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/RlGf0SBK5pkSy-nY/scene.splinecode')

  const [invertGravity, setInvertGravity] = useState(true)

  function Little(props) {
    const { nodes } = useSpline('/bigandsmall.spline')
    const [little] = useCompoundBody(() => ({
      mass: 1,
      ...props,
      shapes: [
        { type: 'Sphere', args: [0.7], position: [0, -0.1, 0.1] },
        { type: 'Sphere', args: [0.2], position: [-0.1, 0.7, 0.2] },
        { type: 'Sphere', args: [0.2], position: [0, -0.5, -0.6] },
        { type: 'Sphere', args: [0.1], position: [-0.4, -0.9, 0.2] },
        { type: 'Sphere', args: [0.1], position: [0.2, -0.9, 0.5] },
      ],
    }))
    return <Clone ref={little} scale={0.01} position={[0, 0, 0]} object={nodes.Little} dispose={null} />
  }

  function onClickGroup(ref) {
    console.log("pkp:  ~ file: App.js:28 ~ onClickGroup ~ ref", ref)

    setInvertGravity(!invertGravity)

    // sphere1.current = ref
    // sphere1.current.x = 0

    // sphere1.current.object.position.x += 10;

    // chassisApi.position.set(...position)
    // sphere1.current.position.x += 10;
    // sphere1.current.position
    // chassisApi.velocity.set(0, 0, 0)
    // chassisApi.angularVelocity.set(...angularVelocity)
    // chassisApi.rotation.set(...rotation)
    // console.log("pkp:  ~ file: App.js:41 ~ onClickGroup ~ sphere1.current.position", sphere1.current)
  }

  function Ball2(props) {
    const { nodes, materials } = useSpline('https://prod.spline.design/RlGf0SBK5pkSy-nY/scene.splinecode')
    const [ball2] = useCompoundBody(() => ({
      mass: 1000,
      ...props,
      shapes: [
        { type: 'Sphere', args: [45], position: [0, 0, 0] },

      ],
    }))
    return <Clone onPointerDown={onClickGroup} ref={ball2} scale={1} position={[0, 0, 0]} object={nodes.Sphere} dispose={null} />
  }
  function SliderX(props) {
    const { nodes, materials } = useSpline('https://prod.spline.design/RlGf0SBK5pkSy-nY/scene.splinecode')
    const [slider1] = useCompoundBody(() => ({
      mass: 0,
      ...props,
      shapes: [
        { type: 'Plane', position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0] },
      ],
    }))
    return <Clone ref={slider1} scale={1} position={[-10, -10, 0]} rotation={[0, 0, 0]} object={nodes.slider} dispose={null} />
  }
  function PlaneBig(props) {
    const { nodes, materials } = useSpline('https://prod.spline.design/RlGf0SBK5pkSy-nY/scene.splinecode')
    const [PlaneBig1] = useCompoundBody(() => ({
      mass: 0,
      ...props,
      shapes: [
        { type: 'Plane', position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0] },
      ],
    }))
    return <Clone ref={PlaneBig1} scale={0.1} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} object={nodes.Plane} dispose={null} />
  }
  function Ground3(props) {
    const { nodes, materials } = useSpline('https://prod.spline.design/RlGf0SBK5pkSy-nY/scene.splinecode')
    const [ball2] = usePlane(() => ({ type: 'Static', ...props }))
    return <Clone ref={ball2} scale={1} position={[0, 0, 0]} object={nodes.slider} dispose={null} />
  }


  function Ground(props) {
    usePlane(() => ({ type: 'Static', ...props }))
    // return <ContactShadows position={[0, 0, 0]} scale={1} blur={2} opacity={1} />
    return <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="#FF0000" />
  }





  return (
    <>
      <color attach="background" args={['#afbed9']} />
      <group {...props} dispose={null}>
        <Physics iterations={6}>

          <Ball2 position={[10, 132, 10]} rotation={[10, 10, 10]} />

          <SliderX position={[0, -40, 0]} rotation={[1, -2, 1]} />
          {/* <PlaneBig position={[-10, -40, -10]} scale={100} rotation={[-0.8, 0, 0.2]} /> */}
          {/* <Ground rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} /> */}
          <Debug scale={1.1} color="#00FF00"></Debug>
        </Physics>

        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          position={[-16.4, 282.04, 1359.94]}
          rotation={[0, 0, 0]}
        />
        <mesh
          name="Cube1"
          geometry={nodes.Cube1.geometry}
          material={materials['Cube1 Material']}
          castShadow
          receiveShadow
          position={[349.75, 61.5, 81]}
        />

        {/* <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials['Plane Material']}
          castShadow
          receiveShadow
          position={[-17.72, -43.91, -1446.76]}
          rotation={[-Math.PI / 2, 0, 0]}
        />  <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials['Sphere Material']}
          castShadow
          receiveShadow
          position={[-226.53, 311.53, 39]}
        /> */}




        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>


    </>
  )
}

