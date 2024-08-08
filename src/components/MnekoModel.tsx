// 学習デモ : https://codesandbox.io/s/4jr4p?file=/src/App.js:24-29

import { Suspense, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, useScroll, useGLTF } from '@react-three/drei'





const MnekoModel = () => {

    // 描画エリア
    return (
        <Canvas camera={{ position:[ 0, 0, 10] }}>
            {/* 光源　周辺光 */}
            <ambientLight intensity={10}/>

 
            <Suspense fallback={null}>
                {/*  */}
                <ScrollControls pages={3}>
                    {/* 対象モデル */}
                    <LittlestTokyo scale={0.03} position={[0, 0, 0]} rotation={[0, 30,0]} />
                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}

// ３モデルの追加 ...props 型のプロパティを引き継ぐ
// ...props は
function LittlestTokyo({ ...props }) {
    const scroll = useScroll()
    const { scene, nodes } = useGLTF('/src/assets/models02/sea_keep_lonely_watcher.glb')


    // const { actions } = useAnimations(animations, scene)
    useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
    // useEffect(() => void (actions['Take 001'].play().paused = true), [actions])
    useFrame((state) => {
        // const action = actions['Take 001']
        // The offset is between 0 and 1, you can apply it to your models any way you like
        const offset = 1 - scroll.offset
        // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
        state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 10, Math.cos((offset * Math.PI) / 3) * -10)
        state.camera.lookAt(0, 4, 2)
      })
      return <primitive object={scene} {...props} />
}

useGLTF.preload('/src/assets/models02/sea_keep_lonely_watcher.glb')




export default MnekoModel;