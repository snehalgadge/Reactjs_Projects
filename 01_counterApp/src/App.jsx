
import { useState } from 'react'
import './App.css'

function App() {
  const[value,setValue] = useState(0);

  return (
    <div className='container'>
      <h1 className='heading'>Counter : {value}</h1>
      <div className='btns'>
      <button className='btn' onClick={ () => value<20 ? setValue(value+1) : value }>+</button>
      <button className='btn' onClick={ () => value>0 ? setValue(value-1) : value}>-</button>
      </div>
    </div>
  )
}

export default App
