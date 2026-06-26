import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Shi from './assets/Shi' 
import Kris from './assets/kris'
import Kris01 from './assets/kris01'
import Kk from './assets/Kk'
function App() {
  const [count, setCount] = useState(0)

  return ( <>
    <Shi />
  <center className='tudo-container'>
  <Kris />
  <Kris01 />
  <Kk/>
   </center>

    </>
  );
}

export default App;
