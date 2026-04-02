import './App.css'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

function App() {
  gsap.registerPlugin(useGSAP)
  const navRef= useRef();
  const middleRef= useRef();
  const BottomRef=useRef();
  useGSAP(() => {
  const tl = gsap.timeline();
  tl.from(navRef.current,{
    y:-50,
    opacity:0,
    duration:1,
    ease:"power2.out"
  },"first")
  tl.from(".left",{
    scale:0,
    rotateY:180,
    opacity:0,
    duration:1,
    ease:"power3.out"
  },"first")
  tl.from(middleRef.current,{
    scale:0,
    opacity:0,
    duration:1,
    ease:"back.out(1.7)"
  },"first")
  tl.to(BottomRef.current, {
    "--myColor": "#d3e05e",
    duration: 2,
    repeat: -1,
    yoyo: true
  });
  tl.to(".smallpara",{
    "--myColor": "#d35aa7",
    duration:1,
    repeat:-1,
    yoyo:true
  })

}, []);
  return (

    <>
    <main>
      <div className="images">
        <img id='tommorowland' src="/tommorowland.png" alt="" />
        <img id='navy-pier' src="/navy-pier.png" alt="" />
        <img id='msi-chicago' src="/msi-chicago.png" alt="" />
        <img id='phone' src="/phone.png" alt="" />
        <img id='opera' src="/opera.png" alt="" />
        <img id='kikk' src="/kikk.png" alt="" />
        <img id='kennedy' src="/kennedy.png" alt="" />
      </div>
      <Canvas id='canvas-elem' style={{
        height:"100vh",
        width:"100vw",
        position:'fixed',
        top:0,
        left:0,
        zIndex:1,//to make the model down thats why we use z index
      }
      }>
      <Dog/>
      </Canvas>
      <section id='section-1' style={{position:'relative'}}>
        <nav ref={navRef} style={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center'

        }}>
          <div style={{
            color:'black',
            margin:'24px',
            fontSize:'30px',
            fontWeight:'bold'
          }}>DogStudio
          <h2 style={{
            color:'white'
          }}>Hii Babies</h2>
          </div>
          <div style={{
            marginBottom:'37px',
            fontWeight:'bold',
            color:'white',
            marginRight:'140px'
          }}>
            <i class="ri-arrow-right-s-line"  style={{color:'red'}}></i>Our ShowReel
          </div>
          <div style={{color:'white',
          fontSize: '20px',
          fontFamily:'sans-serif',
          fontWeight:'bold',
          marginRight:'17px',
          marginBottom:'37px'
          }}><i className="ri-menu-3-line"></i></div>
        </nav>
        <div className="middle">
          <div className="left">
            <h1>We <br /> Make <br /> Good <br /> Shit</h1>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom">
          <div className="left"></div>
          <div className="right">
            <p ref={middleRef}>We build things that glitch expectations <br />and leave fingerprints everywhere. <br />Welcome To our DogWorld...</p>
            <div>
              <p ref={BottomRef} className='para'>Our goal is to deliver amazing experiences that make
                people <br /> talk, and build strategic value for brands, tech,
                entertainment, <br />arts & culture.
              </p>
            </div>
          </div>
        </div>
        <div className="first-line"></div>
        <div className="second-line"></div>
      </section>
      <section id='section-2'>
        <div className="titles">
          <div img-title="tommorowland" className="title">
            <small>2020 - ONGOING</small>
            <h1>Tomorrowland</h1>
          </div>
          <div img-title="navy-pier" className="title">
            <small>2018 - TODAY</small>
            <h1>Navy Pier</h1>
          </div>
          <div img-title="msi-chicago" className="title">
            <small>2015 - TODAY</small>
            <h1>MSI Chicago</h1>
          </div>
          <div img-title="phone" className="title">
            <small>     2016</small>
            <h1>This Was Louis's Phone</h1>
          </div>
          <div img-title="kikk" className="title">
            <small>2012 - TODAY</small>
            <h1>KIKK Festival 2018</h1>
          </div>
          <div img-title="kennedy" className="title">
            <small>2017</small>
            <h1>The Kennedy Center</h1>
          </div>
          <div img-title="opera" className="title">
            <small>2016 - ONGOING</small>
            <h1>Royal Opera Of Wallonia</h1>
          </div>
        </div>
      </section>
      <section id='section-3'>
        <div className="start">
          <div className="leftStart">
            <p className='smallpara'>THIS IS HOW WE START</p>
            <h2>We'r crafting <br />emotional <br />experiences aims <br />at improving <br />results</h2>
          </div>
          <div className="rightStart"></div>
        </div>
      </section>
    </main>
    
    </>
  )
}

export default App
