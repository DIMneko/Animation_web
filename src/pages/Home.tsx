import { motion  } from "framer-motion"
import ThreeModel from "../components/ThreeModel"
import vite_img from "../../public/vite.svg"
import react_img from "../../public/react.png"

const HomePage = () => {

    return(
    <>
        <div className="container mx-auto">
        {/* header */}
        <motion.header 
        initial={{y: -100, opacity:0}}
        animate={{y: 0, opacity:1}}
        transition={{
          type: "spring",
          duration:1,
          delay:0.5,
          stiffness:100,
          
        }}
        className="flex justify-between items-center text-white boder-box p-4 h-16">
          <h3 className="font-bold text-2xl">Framer WEBsite</h3>
          <nav>
            <ul className="flex items-center gap-4">
              <li><a href="/">Home</a></li>
              <li><a href="/demo">Demo</a></li>
            </ul>
          </nav>
        </motion.header>

        {/* hero */}
        <section className="md:py-48 hero">
          <div className="flex items-center justify-between">
            {/* text area */}
            <div className="space-y-5 text_area">
              <motion.h2 
              initial={{y: 60 , opacity:0}}
              animate={{y: 0, opacity:1}}
              transition={{
                type: "spring",
                duration:1,
                delay:0.5,
                stiffness:200,
                
              }}
              className="text-white lg:text-9xl md:text-8xl font-bold lg:max-w-[40rem]">Framer 3D Website</motion.h2>
              <motion.p 
              initial={{y: 80 , opacity:0}}
              animate={{y: 0, opacity:1}}
              transition={{
                type: "spring",
                duration:1,
                delay:1.5,
                stiffness:100,
                
              }}
              className="text-white lg:max-w-[40rem] lg:text-5xl md:text-4xl">
                The <span className="text-orange-300">next</span> generation</motion.p>

              <motion.div 
              initial={{y: 80 , opacity:0}}
              animate={{y: 0, opacity:1}}
              transition={{
                type: "spring",
                duration:1,
                delay:2,
                stiffness: 120,
                
              }}
              className="flex items-center gap-4 lg:max-w-[40rem]">
                <button className="px-6 py-3 rounded-md border-2 my-5 text-white">
                <a href="/demo">Demo3D Scrolls</a></button>
                <button className="px-6 py-3 rounded-md border-2 my-5 border-orange-300 text-orange-300">
                <a href="#docs">Doc's</a></button>
              </motion.div>

            </div>
            {/* 3d model */}
            <div className="w-1/2 model_3d">
              <ThreeModel />
              {/* <MnekoModel /> */}
            </div>
          </div>
        </section>

        {/* about */}
        <section className="about_contents">
          <div>
            <motion.h3
              initial={{y: 30 , opacity:0}}
              whileInView={{y: 0, opacity:1}}  //視覚範囲に入ったら実行
              transition={{
                type: "spring",
                duration:1,
                delay:0.5,
                stiffness:200,
                
              }}>
                開発環境について</motion.h3>
            <motion.p
              initial={{ opacity:0}}
              whileInView={{ opacity:1}}  //視覚範囲に入ったら実行
              transition={{
                type: "spring",
                duration:2,
                delay: 1,
              }}>今回は、Vite + React + TypeScript の環境で構築を進めていきます。<br/>
            主な学習内容は、アニメーションを付与するモジュール「framer-motion」の技術確認と
            3Dモデルを簡易的に追加する方法をまとめていきたいと思います。</motion.p>
            <motion.h3
              initial={{y: 30 , opacity:0}}
              whileInView={{y: 0, opacity:1}}  //視覚範囲に入ったら実行
              transition={{
                type: "spring",
                duration:1,
                delay:0.5,
                stiffness:200,
                
              }}
              id="docs">
                各モジュールの公式Doc's</motion.h3>
            <motion.ul
              initial={{x: 100 , opacity:0}}
              whileInView={{x: 0, opacity:1}}  //視覚範囲に入ったら実行
              transition={{
                type: "spring",
                duration:1.3,
                delay:1,
                stiffness:300,
                
              }}
            >
              <li><a href="https://ja.vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">
              <img src={vite_img} alt="vite" />
              Vite</a></li>
              <li><a href="https://ja.react.dev/learn" target="_blank" rel="noopener noreferrer">
              <img src={react_img} alt="React" />
              React</a></li>
              <li><a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">Framer Motion.</a></li>
              <li><a href="https://tailwindcss.com/docs/guides/vite" target="_blank" rel="noopener noreferrer">Tailwind</a></li>
              <li><a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank" rel="noopener noreferrer">React Three Fiber</a></li>
              <li><a href="https://github.com/pmndrs/drei" target="_blank" rel="noopener noreferrer">Drei</a></li>
            </motion.ul>

            <motion.h3
              initial={{y: 30 , opacity:0}}
              whileInView={{y: 0, opacity:1}}  //視覚範囲に入ったら実行
              transition={{
                type: "spring",
                duration:1,
                delay:0.5,
                stiffness:200,
                
              }}
              id="about">
                大まかな流れ</motion.h3>

              <p>Viteの安定板をインストール</p>
              <code>npm create vite@latest</code>
              <p>構築内容は、・React・Typescript+SWCの環境でインスト―ル。</p>
              <p>CSSを自身で書く場合は無視でよき。TailwindCSSのインストール</p>
              <code>npm install -D tailwindcss postcss autoprefixer</code>
              <p>公式マニュアルに従って、tailwindCSSの初期化とその他変更を行ってください。<br/>
              <a href="https://tailwindcss.com/docs/guides/vite" target="_blank" rel="noopener noreferrer">公式マニュアルVite</a>はこちら</p>
              <code>npx tailwindcss init -p</code>
              <p>本名のFramer-motionのインストール</p>
              <code>npm i framer-motion</code>
              <p>HTMLの構造の要素タグに、motionを加え、初期値・可変値・変化設定などを行っていく。<br/>
              <a href="https://www.framer.com/motion/scroll-animations/" target="_blank" rel="noopener noreferrer">Framer-motion公式</a>はこちら</p>

              <p>次に３Dモデルの表示について「React Three Fiber」と「Drei」をインストールしていく。<br/>
              <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank" rel="noopener noreferrer">React Three Fiber</a></p>
              <code>npm install three @types/three @react-three/fiber</code>
              <p><a href="https://github.com/pmndrs/drei#readme" target="_blank" rel="noopener noreferrer">Drei</a></p>
              <code>npm install @react-three/drei</code>
              <p>備考：個人的にTailwindCSSはまだ勉強中で細かい設定がわからんので、Sassの追加も行っていく。</p>
              <code>npm add --dev sass sass-loader@latest</code>

              <p>とりあえず、ここら辺の環境の追加が出来れば今回のサイトのような動きを付けることが出来ると思います。<br/>
              個人的に思ったのは視覚範囲に入った際のアニメーションの追加が簡単にできたため初心者の方でも簡単に使うことができると
              感じ便利さを感じました。また、コンポーネントの引数などでアニメーションの制御なども試したいと考えています。</p>
              <p>また、3Ｄモデルの導入をThree.jsを使って構築する方法を以前試してみたのですが、結構難易度を感じて構築までに時間が
                掛かった経験があったうえで、今回の方法を試してみてとても簡単に３Ｄモデルを追加することができました。<br/>
                コチラも、理解度を深めた後自社で作った３Ｄモデルを掲載する際にでも再度挑戦を考えています。
              </p>


              <motion.h3
              initial={{y: 30 , opacity:0}}
              whileInView={{y: 0, opacity:1}}  //視覚範囲に入ったら実行
              transition={{
                type: "spring",
                duration:1,
                delay:0.5,
                stiffness:200,
                
              }}
              id="about">
                ReactThreeFiber + Drei</motion.h3>
              <p>ReactThreeFiberは、Three.js用のReact renderモジュールだそうで、
                Threejs で動作するものはすべて動かすことが可能との事。<br/>
                Three.jsと同様に、canvas の中に、モデルデータ、光源、カメラ位置など
                を追加していきます。その際のモデルのデータを組み入れとコントローラーは、
                dreiを使って行います。それぞれの公式ドキュメントを確認してみてください。
                </p>
              <p>備忘録的な余談ですが、カメラの位置でモデルの配置を表現する
                方法とモデルの直接的な位置を表現する方法2つありますが、モデルを中心においてカメラワークを回したい場合は、
                なるべくモデルの位置は0地点で固定してカメラで調整することをお勧め。また、周期的な回転を行う場合は、カメラが
                常に対象を見るような表現で設定する必要があるため公式でそのやり方を確認する必要があります。</p>
              <p>Viteの初期状態ですとページの切替ができない。（やり方を知らないだけ）そのため、react-routerを
                用意してとりあえず検証ページなどを作っていろいろ実験をしてみようと思います。
              </p>
              <code>npm install react-router-dom</code>
              <p><a href="https://zenn.dev/monstera/articles/8b78152f1aa23c" target="_blank" rel="noopener noreferrer">参考用サイト</a>
              こちらを見るとページ切り替えの実装についてわかりやすいと思います。</p>


          </div>
        </section>






      </div>  {/*  コンテナ end  */}
    </>
    )
}


export default HomePage;