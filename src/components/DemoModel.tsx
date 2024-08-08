import { ScrollControls, useScroll, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef,useLayoutEffect} from 'react'




const DemoModel = () => {

    return(
        <div 
        className="h-screen demo_model">
            {/* カメラ位置の追加  x,y,z fov:視野角 */}
            <Canvas camera={ { position: [ 0, 0, 10] } }>
                {/* 明かり 周囲光　*/}
                <ambientLight intensity={10}/>

                <Suspense fallback={null}>
                    <ScrollControls pages={3}>
                        {/* urlでモデルデータを引き渡す */}
                        <ModelScroll scale={0.03} position={[0, 0, 0]} rotation={[0, 30, 0]} />
                    </ScrollControls>

                </Suspense>

            </Canvas>
        </div>
    )
}


function ModelScroll({ ...props  }){
    const scroll = useScroll()

    const groupRef = useRef(null)
    
    const { scene, nodes } = useGLTF('/src/assets/models02/sea_keep_lonely_watcher.glb')

    useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
    useFrame((state) => {
        if (groupRef.current) {
            (groupRef.current as any).rotation.y = state.clock.elapsedTime * 0.1;
        }
        const offset = 1 - scroll.offset
        state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 10, Math.cos((offset * Math.PI) / 3) * -10)
        state.camera.lookAt(0, 4, 2)
      })


    return (
        <group ref={groupRef}>
            <primitive object={scene} {...props} />
        </group>

    )
}

useGLTF.preload('/src/assets/models02/sea_keep_lonely_watcher.glb')



export default DemoModel;