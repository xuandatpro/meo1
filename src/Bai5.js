import React, { useMemo, useState } from 'react'

export default function Bai5() {
    const[co,setCo]=useState('')
    const[meo,setMeo]=useState('')
    const[dat,setDat]=useState([])
    const handleClick=()=>{
        setDat([...dat,{
            co,
            meo:+meo,
        }])
    }
    const con=useMemo(()=>{
        const cac=dat.reduce((acc, ele)=>{
            return acc+ele.meo
        },0)
        return cac
    },[dat])
  return (
    <div className='xuandat'>
    <input
    value={co}
    placeholder='enter name...'
    onChange={e=>setCo(e.target.value)}
    />
    <input
    value={meo}
    placeholder='eneter meo...'
    onChange={e=>setMeo(e.target.value)}
    />
    <ul>
    {dat.map((da,index)=>(
      <li key={index}>{da.co}-{da.meo}</li>
    ))}
    </ul>
    
    <button onClick={handleClick}>start</button>
    <br/>
    ket qua:{con}
    </div>
  )
}
