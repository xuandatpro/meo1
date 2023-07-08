import React, { useState } from 'react'

export default function Bai2() {
    const[co,setCo]=useState('')
    const[me,setMe]=useState([])
    const handlestart=()=>{
        setMe(prev=>{
            const dat=[...prev,co]
            const meo=JSON.stringify(dat)
            localStorage.setItem('co',meo)
            return dat
        })
    }
  return (
    <div className='ok'>
    <input
    value={co}
    type='text'
    placeholder='enter name'
    onChange={e=>setCo(e.target.value)}
    />
    {me.map((m,index)=>(
        <button key={index}>{m}</button>
    ))}
    <button onClick={handlestart}>click</button>
    </div>
  )
}
