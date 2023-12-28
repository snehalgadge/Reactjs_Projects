import { useState } from 'react'
import './App.css'

const App = () => {
  const[color,setColor] = useState("#ffff")

  const handleRed = ()=> {
    setColor('red')
  }
  const handleBlack = ()=> {
    setColor('black')
  }
  const handleBlue = ()=> {
   setColor('blue')
  }
  const handleGreen = ()=> {
   setColor('green')
  }
  // const handlePink = ()=> {
  //  setColor(color)
  // }
  const handleGray = () =>{
    setColor('gray')
  }

  return (
   <div>
   <div className='bg' style={{background:color}}>
    <div className='container'>
    <button className='btn red' onClick={handleRed}>Red</button>
    <button className='btn black' onClick={handleBlack}>Black</button>
    <button className='btn blue'  onClick={handleBlue}>Blue</button>
    <button className='btn green' onClick={handleGreen}>Green</button>
    <button className='btn gray' onClick={handleGray}>Gray</button>
    <button className='btn lav' onClick={() => setColor("pink")}>Pink</button>
    </div>
    </div>
   </div>
  )
}

export default App