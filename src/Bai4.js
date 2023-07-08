import React, { useEffect, useState } from 'react'

export default function Bai4() {
    const[dat,setDat]=useState('')
    useEffect(()=>{
        async function xunadat() {
            var cn=fetch('https://jsonplaceholder.typicode.com/posts')
            document.title=dat
            return cn
        }
        xunadat()
    })
    const handleclick1=()=>{
         alert('ok')
    }
  return (
    <div className='ok'>
      <input
      value={dat}
      placeholder='enter dat...'
      onChange={e=>setDat(e.target.value)}
      />
      <button onClick={handleclick1}>start</button>
    </div>
  )
}
