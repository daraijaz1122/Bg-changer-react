import { useState } from 'react'
import './index.css';

function App() {
  const [color,setColor] = useState('olive')
 
  return (
    
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}> 
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap gap-3 bg-white justify-center shadow-lg px-3 py-2 rounded-3xl '>
            <button 
            onClick={()=>setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-black text-3xl shadow-lg'
            style={{backgroundColor:'red'}}
            >
             Red
            </button>
            <button 
            onClick={()=>setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-black text-3xl shadow-lg'
            style={{backgroundColor:'green'}}
            >
             Green
            </button>
            <button 
            onClick={()=>setColor("yellow")}
            className='outline-none px-4 py-1 rounded-full text-black text-3xl shadow-lg'
            style={{backgroundColor:'yellow'}}
            >
             Yellow
            </button>
            <button 
            onClick={()=>setColor("purple")}
            className='outline-none px-4 py-1 rounded-full text-black text-3xl shadow-lg'
            style={{backgroundColor:'purple'}}
            >
             Purple
            </button>
            <button 
            onClick={()=>setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-black text-3xl shadow-lg'
            style={{backgroundColor:'blue'}}
            >
             Blue
            </button>
            <button 
            onClick={()=>setColor("gray")}
            className='outline-none px-4 py-1 rounded-full text-black text-3xl shadow-lg'
            style={{backgroundColor:'gray'}}
            >
             Gray
            </button>
            
          </div>
        </div >
      </div>
     
    
  )
}

export default App
