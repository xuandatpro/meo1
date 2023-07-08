import React, { useReducer } from 'react'
const initState=0
const UP_DAT="up"
const CO_DAT="co"
const reducer=(state,action)=>{
    switch (action) {
        case UP_DAT:
            return state+1
        case CO_DAT:    
            return state-1
        default:
              new Error('Invalid action')
    }
}
export default function Bai6() {
    const[count,dispatch]=useReducer(reducer,initState)
  return (
    <div className='ok'>
        <p> xuandat :{count}</p>
        <button onClick={()=>dispatch(UP_DAT)}>start1</button>
        <button onClick={()=>dispatch(CO_DAT)}>start2</button>
    </div>
  )
}
