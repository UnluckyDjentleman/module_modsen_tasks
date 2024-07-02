import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [image, setImage]=useState("")
  const [count, setCount]=useState(0);

  useMemo(()=>{
    fetch('https://dog.ceo/api/breeds/image/random').then(resp=>resp.json()).then(data=>setImage(data.message))
  },[count]);

  return (
    <>
      <div>
        <img src={image}></img>
      </div>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </>
  )
}

export default App
