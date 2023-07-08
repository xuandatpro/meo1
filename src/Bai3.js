import React, { useState } from 'react'
import "./co.css"
export default function Bai3() {
    const[meo,setMeo]=useState(1000)
    const handledat=()=>{
        setMeo(meo+1)
    }
  return (
    <div className='couter'>
    <h3> toi nam nay {meo}</h3>
    <button onClick={handledat}>click</button>
    </div>
  )
}
