import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <center class="todo-container">
      <h1 style={{'background':'yellow'}}>Todo App </h1>
      <div class="container text-center">
  <div class="row">
    <div class="col-6">
      <input type="text" placeholder= "enter something here"/>
      </div>
    <div class="col-4">
      <input type='date'/>
      </div>
    <div class="col-2">col-2</div>
  </div>
</div>
    </center>
  )
}

export default App
