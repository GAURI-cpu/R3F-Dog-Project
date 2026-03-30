import './App.css'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'

function App() {
  

  return (

    <>
    <main>
      <Canvas style={{
        height:"100vh",
        width:"100vw",
        position:'fixed',
        top:0,
        left:0,
        zIndex:1,//to make the model down thats why we use z index
        backgroundImage:"url(/background.png)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }
      }>
      <Dog/>
      </Canvas>
      <section id='section-1'>
        <nav style={{
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
          <div className="right"></div>
        </div>
      </section>
      <section id='section-2'></section>
      <section id='section-3'></section>
    </main>
    
    </>
  )
}

export default App
