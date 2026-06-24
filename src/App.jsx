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
    <div class="col-8">col-6</div>
    <div class="col-8">col-4</div>
    <div class="col-4">col-2</div>
  </div>
</div>
    </center>
  )
}

export default App
