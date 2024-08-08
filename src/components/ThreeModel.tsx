import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef } from "react";



// 3Dモデルをここで追加
const Model = ({
    url, 
    scale, 
    position,
    rotation,
}: { 
        url: string, 
        scale:number, 
        position:number[],
        rotation:number[]
     }) => {

    const groupRef = useRef(null)

    const { scene } = useGLTF(url);

    // モデルに動き
    useFrame((state) => {
        if(groupRef.current){
             // sin(0) && sin(180) => 0  sin(90) => 1  sin(-90) && sin(270) => -1 波表現
             (groupRef.current as any).y = Math.sin(state.clock.elapsedTime) * 0.6;
            // model本体も回転
            // groupRef.current.rotation.y = state.clock.elapsedTime * 0.01;
        }


    });


    return (
        // グループにアクセスさせるためにref
        <group ref={groupRef}>
            <primitive
            // モデルデータ 
            object={ scene }
            // 大きさ
            scale={ scale }
            // 位置
            position={ position }
            // 回転
            rotation={ rotation }
             />
        </group>
    )
};


const ThreeModel = () => {

    return(
        <motion.div 
        initial={{x: 100 , opacity:0}}
        animate={{x: 0, opacity:1}}
        transition={{
          type: "spring",
          duration:1,
          delay: 1,
          stiffness:200,
          
        }}
        className="model_area h-[500px]">
            {/* カメラ位置の追加  x,y,z fov:視野角 */}
            <Canvas camera={ { position: [ 0, 0, 20], fov: 60 } }>
                {/* 明かり 周囲光　*/}
                <ambientLight intensity={3}/>
                {/* urlでモデルデータを引き渡す */}
                <Model 
                url="/src/assets/models/scene.gltf" 
                scale={2.3} 
                // x , y, z の位置調整
                position={[0, 0, 0]}
                rotation={[0, 0, Math.PI / 6]} />


                {/* 操作を追加したい zoom 操作を無効 */}
                <OrbitControls enableZoom={false}/>

            </Canvas>
        </motion.div>
    )
}

export default ThreeModel;