import React, { useEffect, useRef} from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import * as THREE from "three";
// import { useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture,useAnimations } from '@react-three/drei'
import { DirectionalLight } from 'three'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
const Dog = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

    const model=useGLTF("/models/dog.drc.glb");
    useThree(({camera,scene,gl})=>{
      console.log(camera.position)
      camera.position.z=0.61;
      gl.toneMapping=THREE.ReinhardToneMapping
      gl.outputColorSpace=THREE.SRGBColorSpace
    })

    const [normalMap,sampleMatcap,branchesMap,branchesNormalMap]= (useTexture(["/dog_normals.jpg","/Matcap/mat-2.png","/branches_normals.jpeg","branches_diffuse.jpeg"]).map(texture=>{
      texture.flipY=false
      texture.colorSpace=THREE.SRGBColorSpace
      return texture
    }))

    const DogMaterial= new THREE.MeshMatcapMaterial({
      normalMap:normalMap,
      matcap:sampleMatcap
    })
    const branches= new THREE.MeshMatcapMaterial({
      normalMap:branchesNormalMap,
      map:branchesMap
    })

    model.scene.traverse((child)=>{
    if(child.name.includes("DOG")){
      child.material=DogMaterial
    }else{
      child.material=branches
    }
    })

    const dogModel= useRef(model);
  
    const {actions} = useAnimations(model.animations,model.scene)

    useEffect(()=>{
      actions["Take 001"].play() 
    },[actions])

    useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:"#section-1",
          endTrigger:"#section-3",
          start:"top top",
          end:"bottom bottom",
          scrub:true
        }
      })
      tl.
      to(dogModel.current.scene.position,{
        z:"-=0.75",
        y:"+=0.1"
      })
      .to(dogModel.current.scene.rotation,{
        x:`+=${Math.PI/12}`
      })
      .to(dogModel.current.scene.rotation,{
        y:`-=${Math.PI}`
      },"third"/*tag means animation more than one occur at same time*/)
      .to(dogModel.current.scene.position,{
        x:"-=0.4",
        z:"+=0.6",
        y:"-=0.01"
      },"third"/*tag*/)
    },[])
  return (
    <>
    { /*use for render pre built model*/ }
    <primitive object={model.scene} position={[0.25,-0.55,0.08]} rotation={[0,Math.PI/4.9,0]}/>
    <directionalLight position={[0,5,5]} color={0xffffff} intensity={10}/>
    </>
  )
}

export default Dog;
