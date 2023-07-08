import React, { useState } from 'react'
import Headr from './Headr'
import "./dat.css"
const Con=(props)=>{
    return (
        <>
        <h1>Dat fan {props.name}</h1>
        <p>con ten la{props.Diplaynam} </p>
        </>
    )
}
export default function Co() {
    
    const name='manchester untied'
    const couter={
        firstname:'xuandat',
        age:18,
    }
    const dat=(couter)=>{
        return couter.firstname+' '+couter.age
    }
    const[co,setCo]=useState(window.innerWidth)
    const handleclick=()=>{
        setCo(window.innerWidth)
    }
    window.addEventListener('co',handleclick)
  return (
    <div className='xuandat'>
        <Headr/>
        <h1> Bong da cua {name} || {co}</h1>
        <Con name={name} Diplaynam={JSON.stringify(couter)}/>
        <p>toi ten la {dat(couter)}</p>
    </div>
  )
}
