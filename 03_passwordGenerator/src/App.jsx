import { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

  const[length, setLength] = useState(8);
  const[number, setNumber] = useState(false);
  const[char, setChar] = useState(false);
  const[password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const handleCopy = () =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  const passwordGenerator = useCallback(() =>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if(number) str+= "0123456789";
    if(char) str+= "@._";

    for(let i=1; i<=length; i++){
      let random = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(random);
    }

    setPassword(pass);

  } , [length,number,char,setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length,number,char,passwordGenerator])
  
  return (
   <div className='bg-[#756AB6] h-screen py-20 flex items-center flex-col shadow-md'>
    <div className='border-4 rounded-md w-[50%] py-4 border-[#AC87C5]'>
      <div className='flex justify-center items-center  py-8'>
        <h1 className='text-3xl text-[#eabddc] font-bold'>
        Password Generator
        </h1>
      </div>
      <div className='flex justify-center items-center gap-3 '>
        <input type='text'
        value={password}
        placeholder='Password'
        ref={passwordRef}
        readOnly
        className='border-2 w-80 rounded-lg border-[#AC87C5] py-1 px-1.5 hover:border-[#3b2847] text-[#AC87C5]'/>
        <button className='outline-none py-1.5 px-3.5 bg-[#E0AED0] rounded-md text-white font-medium  shrink-0 hover:bg-[#ba76a4]'
        onClick={handleCopy}>
        Copy
        </button>
      </div>
      <div className='flex items-center justify-center gap-10 py-8 text-xl font-semibold text-[#FFE5E5]'>
        <div className='flex gap-2'> 
          <input type='range'
          value={length}
          min={6}
          max={100}
          className='cursor-pointer'
          onChange={ (e) => setLength(e.target.value) }
          />
          <label>length({length})</label>
        </div>
        <div className='flex gap-2'> 
          <input type='checkbox'
          defaultChecked = {number}
          value={number}
          onChange={ () => setNumber((prev) => !prev) }
          />
          <label>Number</label>
        </div>
        <div className='flex gap-2'> 
          <input type='checkbox'
          defaultChecked = {char}
          onChange={ () => setChar((prev) => !prev) }
          value={char}
          />
          <label>Character</label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
