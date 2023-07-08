import React, { useState } from 'react'

const couters=[
    {
        name:'xuandat',
        id:1
    },
    {
        name:'co',
        id:2
    },
    {
        name:'meo',
        id:3
    }
]
export default function Bai11() {
    const[checked,setChecked]=useState([])
    const handleclick=()=>{
        console.log({id:checked})
    }
    const handlesumbit=(id)=>{
      setChecked(prev=>{
        const index=checked.includes(id)
        if(index){
            return checked.filter(item =>item !== id)
        }else{
            return[...prev,id]
        }
      })
    }
  return (
    <div className='app'>
    {couters.map(con=>(
        <div key={con.id}>
        <input
        type='radio'
        onChange={()=>handlesumbit(con.id)}
        checked={checked.includes(con.id) ? 1:false }
        />
        {con.name}
        </div>
    ))} 
    <button onClick={handleclick}>start</button>
    </div>
  )
}
